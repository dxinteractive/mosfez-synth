import { constructNode } from "./internal/construct-node";
import type { Graph, GraphAudioNode, ParamValueObject } from "./graph";

export type SynthConfig<P> = {
  audioContext: AudioContext;
  params?: Partial<P>;
};

export class Synth<P = ParamValueObject> {
  audioContext: AudioContext;
  paramState: Partial<P>;

  node?: GraphAudioNode<Partial<P>>;
  connection?: [AudioNode, number?, number?];

  constructor(config: SynthConfig<P>) {
    this.audioContext = config.audioContext;
    this.paramState = config.params ?? {};
  }

  async build(graph: Graph) {
    const newNode = await constructNode<Partial<P>>(this.audioContext, graph);
    this.node?.disconnect();
    this.node?.destroy();
    this.node = newNode;
    this.tryUpdateParams();
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
    this.paramState = {
      ...this.paramState,
      ...params,
    };
    this.tryUpdateParams();
  }

  private tryUpdateParams() {
    if (this.node) {
      this.node.set(this.paramState);
    }
  }
}
