import { constructNode, DspAudioNode } from "./internal/construct-node";
import type { DspNode } from "./dsp-node";
import type { ParamValueObject } from "./params";

export type InputSetEvent = {
  type: "set";
  time: number;
  params: Partial<ParamValueObject>;
};

export type InputStopEvent = {
  type: "stop";
  time: number;
};

export type InputEvent = InputSetEvent | InputStopEvent;

export function isInputSetEvent(e: InputEvent): e is InputSetEvent {
  return e.type === "set";
}

export function isInputStopEvent(e: InputEvent): e is InputStopEvent {
  return e.type === "stop";
}

class InputEventRecorder<P extends ParamValueObject> {
  public recording = false;
  private recordingStartTime = Date.now();
  private events: InputEvent[] = [];

  record() {
    this.recording = true;
    this.recordingStartTime = Date.now();
  }

  stop(): InputEvent[] {
    const time = (Date.now() - this.recordingStartTime) * 0.001;

    this.events.push({
      type: "stop",
      time,
    });

    const result = this.events;
    this.events = [];
    this.recording = false;
    return result;
  }

  addSetEvent(params: Partial<P>) {
    const time = (Date.now() - this.recordingStartTime) * 0.001;

    this.events.push({
      type: "set",
      time,
      params,
    });
  }
}

export type SynthConfig<P> = {
  audioContext: AudioContext | OfflineAudioContext;
  params?: Partial<P>;
};

export class Synth<P extends ParamValueObject> {
  private audioContext: AudioContext | OfflineAudioContext;
  private initialParams?: Partial<P>;

  private node?: DspAudioNode<P>;
  private connection?: [AudioNode, number?, number?];

  constructor(config: SynthConfig<P>) {
    this.audioContext = config.audioContext;
    this.initialParams = config.params;
  }

  async build(dspNode: DspNode) {
    const newNode = await constructNode<P>(this.audioContext, dspNode);
    this.node?.disconnect();
    this.node?.destroy();
    this.node = newNode;
    this.tryConnectNode();
  }

  connect(audio: AudioNode, output?: number, input?: number): AudioNode {
    this.connection = [audio, output, input];
    this.tryConnectNode();
    return audio;
  }

  private tryConnectNode() {
    if (this.node && this.connection) {
      this.node.disconnect();
      this.node.connect(...this.connection);
      if (this.initialParams) {
        this.set(this.initialParams);
      }
    }
  }

  disconnect(): void;
  disconnect(output: number): void;
  disconnect(destinationNode: AudioNode): void;
  disconnect(destinationNode: AudioNode, output: number): void;
  disconnect(destinationNode: AudioNode, output: number, input: number): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disconnect(outputOrDestinationNode?: any, output?: any, input?: any): void {
    if (this.node) {
      this.node.disconnect(outputOrDestinationNode, output, input);
    }
  }

  set(params: Partial<P>) {
    if (this.inputEvents.recording) {
      this.inputEvents.addSetEvent(params);
    }
    if (this.node) {
      this.node.set(params);
    }
  }

  destroy() {
    this.node?.destroy();
    this.node = undefined;
  }

  inputEvents = new InputEventRecorder<P>();
}
