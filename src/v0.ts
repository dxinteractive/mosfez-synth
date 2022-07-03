import { compile } from "mosfez-faust/faust";

console.log("compile", compile);

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
export class MosfezXenSynth {
  // components
  private _totalVoices = 8;
  private _voiceAllocator = new VoiceAllocator(this._totalVoices);

  // internal state
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

  // ready = new Promise((r) => {
  //   this._setReady = r;
  // });

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
  }
}
