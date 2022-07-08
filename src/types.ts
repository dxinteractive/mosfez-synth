import type { compile as Compile } from "mosfez-faust/faust";

export type ParamDefinition = number | string;

export type ParamDefinitionObject = Record<string, ParamDefinition>;

export type ParamValueObject = Record<string, number>;

export type DspNodeFaust = {
  type: "faust";
  dsp: string;
  audioIn: DspNode[];
  params: ParamDefinitionObject;
  dependencies: {
    compile: typeof Compile;
  };
};

export type DspNode = DspNodeFaust;

export function isFaustDspNode(DspNode: DspNode): DspNode is DspNodeFaust {
  return DspNode.type === "faust";
}

export type DspAudioNode<P> = AudioNode & {
  set: (params: Partial<P>) => void;
  destroy: () => void;
};
