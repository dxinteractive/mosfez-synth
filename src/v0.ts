import { VoiceAllocator } from "./voice-allocator";

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

export default class MosfezXenSynth {
  private _voiceAllocator = new VoiceAllocator();

  private _rootHz = 440;

  public console?: Console;

  get rootHz(): number {
    return this._rootHz;
  }

  set rootHz(hz: number) {
    this._rootHz = hz;
  }

  setNote(midi: number, options: NoteOptions = {}): void {
    const id = options.id !== undefined ? options.id : `${midi}`;
    const voice = this._voiceAllocator.activate(id);

    this.console?.log("setNote()", midi, JSON.stringify(options));
    this.console?.log(" with voice ", voice);
  }

  stopNote(midi: number): void;
  stopNote(id: string): void;
  stopNote(midiOrId: number | string): void {
    const id = `${midiOrId}`;
    const releaseTime = 50;
    this._voiceAllocator.release(id, releaseTime);

    this.console?.log("stopNote()", `"${midiOrId}"`);
  }
}
