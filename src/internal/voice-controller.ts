import { VoiceAllocator } from "./voice-allocator";
import type { ParamValueObject, ParamValue } from "../types";

export type VoiceControllerConfig = {
  totalVoices: number;
  maxKeys: number;
};

export type VoiceParam<P extends ParamValueObject> = {
  index: number;
  params: Partial<P>;
};

export class VoiceController<P extends ParamValueObject> {
  private _totalVoices: number;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private _maxKeys: number;
  private _allocator: VoiceAllocator;
  private _allParams: Partial<P> = {};
  private _perVoiceParamsStore = new Map<
    Extract<keyof P, string>,
    Map<string, ParamValue>
  >();
  private _recentlyAccessedIds = new Set<string>();

  constructor(config: VoiceControllerConfig) {
    const { totalVoices, maxKeys } = config;
    this._totalVoices = totalVoices;
    this._maxKeys = maxKeys;
    this._allocator = new VoiceAllocator(totalVoices);
  }

  private _accessId(id: string) {
    const set = this._recentlyAccessedIds;
    set.delete(id);
    set.add(id);

    console.log("before", set);

    while (set.size > this._maxKeys) {
      const id = set.keys().next().value;
      set.delete(id);
      this._deleteParamsForId(id);
    }
  }

  private _getParamsForVoice(id: string): Partial<P> {
    this._accessId(id);

    // build up a params object from the nested maps in perVoiceParamsStore
    const out: Partial<P> = {};
    this._perVoiceParamsStore.forEach((subMap, key) => {
      const value = subMap.get(id);
      if (value !== undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        out[key] = value;
      }
    });

    return out;
  }

  private _addParamForVoice(
    paramKey: Extract<keyof P, string>,
    id: string,
    paramValue: ParamValue
  ) {
    const subMap: Map<string, ParamValue> =
      this._perVoiceParamsStore.get(paramKey) ?? new Map();

    subMap.set(id, paramValue);
    this._perVoiceParamsStore.set(paramKey, subMap);
  }

  private _addParamsForVoice(id: string, params: Partial<P>) {
    this._accessId(id);

    for (const key in params) {
      const value = params[key];
      if (value !== undefined) {
        this._addParamForVoice(key, id, value);
      }
    }
  }

  private _deleteParamsForId(id: string) {
    this._perVoiceParamsStore.forEach((subMap) => {
      subMap.delete(id);
    });
  }

  set({ voice, ...params }: Partial<P>): VoiceParam<P>[] {
    if (voice === undefined) {
      return this.setAll(params as Partial<P>);
    }
    return this.setWithId(`${voice}`, params as Partial<P>);
  }

  private setWithId(id: string, params: Partial<P>): VoiceParam<P>[] {
    const { gate } = params;
    const { _allocator, _allParams } = this;

    // register note event with voice allocator
    // and receive voice index
    let index = -1;
    if (gate !== undefined) {
      [index] = gate > 0 ? _allocator.start(id) : _allocator.release(id, 2000); // TODO change this
    } else {
      index = _allocator.get(id);
    }
    if (index === -1) return [];

    // merge params
    const perVoiceParams = this._getParamsForVoice(id);

    const mergedParams = {
      ..._allParams,
      ...perVoiceParams,
      ...params,
    };

    // add them to the per-voice store
    this._addParamsForVoice(id, mergedParams);

    // return current state
    return [
      {
        index,
        params: mergedParams,
      },
    ];
  }

  private setAll(params: Partial<P>): VoiceParam<P>[] {
    // set all params
    this._allParams = {
      ...this._allParams,
      ...params,
    };

    // add / reset any per-voice sub maps
    for (const paramName in params) {
      this._perVoiceParamsStore.set(paramName, new Map());
    }

    // return these params for every voice
    const out: VoiceParam<P>[] = [];
    for (let i = 0; i < this._totalVoices; i++) {
      out.push({
        index: i,
        params,
      });
    }
    return out;
  }
}
