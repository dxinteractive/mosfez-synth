type ConsoleLogger = (...args: unknown[]) => void;

type Console = {
  log: ConsoleLogger;
  warn: ConsoleLogger;
  error: ConsoleLogger;
};

export type NoteOptions = {
  id?: string;
};

export default class MosfezXenSynth {
  private _rootHz = 440;

  public console?: Console;

  get rootHz(): number {
    return this._rootHz;
  }

  set rootHz(hz: number) {
    this._rootHz = hz;
  }

  setNote(midi: number, options: NoteOptions = {}): void {
    this.console?.log("setNote()", midi, JSON.stringify(options));
  }

  stopNote(midi: number): void;
  stopNote(id: string): void;
  stopNote(midiOrId: number | string): void {
    this.console?.log("stopNote()", `"${midiOrId}"`);
  }
}
