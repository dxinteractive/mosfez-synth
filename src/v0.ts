import { el } from "@elemaudio/core";
import WebRenderer from "@elemaudio/web-renderer";

import { VoiceAllocator } from "./voice-allocator";

function noteToFreq(note: number, rootHz: number): number {
  return (rootHz / 32) * 2 ** ((note - 9) / 12);
}

function range(total: number) {
  return [...Array(total)].map((_a, i) => i);
}

type ConsoleLogger = (...args: unknown[]) => void;

type Console = {
  log: ConsoleLogger;
  warn: ConsoleLogger;
  error: ConsoleLogger;
  clear: () => void;
};

export type NoteOptions = {
  id?: string;
};

type VoiceState = {
  gate: number;
  freq: number;
};
export default class MosfezXenSynth {
  // components
  private _totalVoices = 8;
  private _voiceAllocator = new VoiceAllocator(this._totalVoices);
  private _audioContext?: AudioContext;
  private _core = new WebRenderer();

  // internal state
  private _setReady?: (value: unknown) => void;
  private _voicesState: VoiceState[] = [];

  // public state
  private _rootHz = 440;
  private _envRelease = 4;

  // debug
  public console?: Console;

  constructor() {
    this.resetVoiceState();
  }

  private resetVoiceState() {
    this._voicesState = range(this._totalVoices).map(() => ({
      freq: 440,
      gate: 0,
    }));
  }

  ready = new Promise((r) => {
    this._setReady = r;
  });

  async init(audioContext?: AudioContext) {
    this._audioContext = audioContext ?? new AudioContext();
    this._core.on("load", () => this._setReady?.(undefined));

    const node = await this._core.initialize(this._audioContext, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    if (!audioContext) {
      node.connect(this._audioContext.destination);
    }
    return node;
  }

  async start() {
    if (!this._audioContext) {
      throw new Error(
        `You must wait for the.init() / .ready to resolve before calling .start()`
      );
    }

    if (this._audioContext.state === "suspended") {
      await this._audioContext.resume();
    }

    this.render();
  }

  get rootHz(): number {
    return this._rootHz;
  }

  set rootHz(hz: number) {
    this._rootHz = hz;
  }

  setNote(midi: number, options: NoteOptions = {}): void {
    const id = options.id !== undefined ? options.id : `${midi}`;
    const voice = this._voiceAllocator.activate(id);
    const freq = noteToFreq(midi, this._rootHz);
    const gate = 1;

    this.console?.log(`activate voice ${voice} to ${freq}`);

    const existingVoice = this._voicesState[voice];
    if (existingVoice.freq !== freq || existingVoice.gate !== gate) {
      this._voicesState[voice] = {
        freq,
        gate: 1,
      };
      this.render();
    }
  }

  stopNote(midi: number): void;
  stopNote(id: string): void;
  stopNote(midiOrId: number | string): void {
    const id = `${midiOrId}`;
    const voice = this._voiceAllocator.release(id, this._envRelease * 1000);
    if (voice === -1) return;

    this.console?.log(`release voice ${voice}`);

    this._voicesState[voice].gate = 0;
    this.render();
  }

  render() {
    const voices = this._voicesState.map((voice, index) => {
      const key = `v-${index}`;
      const gate = el.const({
        key: `${key}:gate`,
        value: voice.gate,
      });
      const env = el.adsr(0.001, 1.0, 0.4, this._envRelease, gate);

      return el.mul(
        env,
        el.blepsaw(el.const({ key: `${key}:freq`, value: voice.freq }))
      );
    });
    const summed = el.add(...voices);
    const output = el.mul(summed, 0.5);
    this._core.render(output, output);
  }
}
