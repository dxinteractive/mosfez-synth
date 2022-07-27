type VoiceIndex = number;
type VoiceIsNew = boolean;
type Result = [VoiceIndex, VoiceIsNew];
type Voice = {
  id: string;
  voice: number;
  time: number;
  released?: ReturnType<typeof setTimeout>;
};

function findOldestVoiceIndex(voices: (Voice | undefined)[]): number {
  if (voices.length === 0) return -1;
  const oldest = voices.reduce((prev, current) => {
    const usePrev = !current || (prev && prev.time < current.time);
    return usePrev ? prev : current;
  });
  return oldest?.voice ?? -1;
}

export class VoiceAllocator {
  private _time = 0;
  private _voices: (Voice | undefined)[] = [];

  constructor(total: number) {
    this._voices.length = total;
  }

  private _startVoice(voice: number, id: string) {
    const existing = this._voices[voice];
    if (existing?.released !== undefined) {
      clearTimeout(existing.released);
    }
    this._voices[voice] = {
      id,
      voice,
      time: this._time++,
    };
    return voice;
  }

  private _stopVoice(voice: number) {
    this._voices[voice] = undefined;
  }

  private _findStarted(id: string) {
    return this._voices.findIndex(
      (v) => v && v.id === id && v.released === undefined
    );
  }

  private _findReleased(id: string) {
    return this._voices.findIndex(
      (v) => v && v.id === id && v.released !== undefined
    );
  }

  get voices(): (undefined | string)[] {
    return this._voices.map((voice) => voice?.id);
  }

  get(id: string): number {
    return this._voices.findIndex((v) => v && v.id === id);
  }

  start(id: string): Result {
    // if this voice is already started, return it
    const started = this._findStarted(id);
    if (started !== -1) {
      return [started, false];
    }

    // else, if this voice is currently released, start it again and return it
    const released = this._findReleased(id);
    if (released !== -1) {
      return [this._startVoice(released, id), false];
    }

    // else, if there is a stopped voice voice, start it and return it
    const stopped = this._voices.findIndex((v) => !v);
    if (stopped !== -1) {
      return [this._startVoice(stopped, id), true];
    }

    // else, if there are any released notes, find the oldest, start it and return it
    const releasedVoices = this._voices.filter(
      (v) => v?.released !== undefined
    );
    const oldestReleased = findOldestVoiceIndex(releasedVoices);
    if (oldestReleased !== -1) {
      return [this._startVoice(oldestReleased, id), true];
    }

    // else, if there are any active notes, find the oldest, start it and return it
    const oldestActive = findOldestVoiceIndex(this._voices);
    if (oldestActive !== -1) {
      return [this._startVoice(oldestActive, id), true];
    }

    throw new Error("unable to find oldest active voice");
  }

  stop(id: string): Result {
    const started = this._findStarted(id);
    if (started !== -1) {
      this._stopVoice(started);
    }
    return [started, false];
  }

  release(id: string, ms: number): Result {
    const started = this._findStarted(id);
    const voiceObject = this._voices[started];
    if (voiceObject) {
      voiceObject.released = setTimeout(() => {
        this._stopVoice(started);
      }, ms);
    }
    return [started, false];
  }
}
