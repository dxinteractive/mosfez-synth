import type { compile as Compile } from "mosfez-faust/faust";

export type ParamValueObject = Record<string, number>;

export type ParamDefinition = number | string;

export type ParamDefinitionObject<P extends ParamValueObject> = Record<
  keyof P,
  string | number
>;

export type FaustParamDefinitionObject<P extends ParamValueObject> = Partial<
  ParamDefinitionObject<P>
> & {
  inputs?: DspNode<P>[];
};

export type DspNodeFaust<P extends ParamValueObject> = {
  type: "faust";
  dsp: string;
  inputs?: DspNode<P>[];
  params: Partial<ParamDefinitionObject<P>>;
  dependencies: {
    compile: typeof Compile;
  };
};

export type DspNodePoly<P extends ParamValueObject> = {
  type: "poly";
  voice: DspNode<P>;
  max: number;
  dependencies: {
    compile: typeof Compile;
  };
};

export type DspNode<P extends ParamValueObject> =
  | DspNodeFaust<P>
  | DspNodePoly<P>;

export function isFaustDspNode<P extends ParamValueObject>(
  DspNode: DspNode<P>
): DspNode is DspNodeFaust<P> {
  return DspNode.type === "faust";
}

export function isPolyDspNode<P extends ParamValueObject>(
  DspNode: DspNode<P>
): DspNode is DspNodePoly<P> {
  return DspNode.type === "poly";
}

export type DspAudioNode<P extends ParamValueObject> = AudioNode & {
  set: (params: Partial<P>) => void;
  destroy: () => void;
};
