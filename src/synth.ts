import { constructNode } from "./internal/construct-node";
import type { DspNode, DspAudioNode, ParamValueObject } from "./types";

export type SynthConfig<P> = {
  audioContext: AudioContext;
  params?: Partial<P>;
};

export class Synth<P extends ParamValueObject> {
  private audioContext: AudioContext;
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
    if (this.node) {
      this.node.set(params);
    }
  }
}
