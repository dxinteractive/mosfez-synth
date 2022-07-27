import type { compile as Compile } from "mosfez-faust/faust";
import type { VoiceController } from "./internal/voice-controller";

export type ParamValueObject = Record<string, number | string>;

export type ParamDefinition = number | string;

export type ParamDefinitionObject<P extends ParamValueObject> = Partial<
  Record<keyof P, string | number>
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
  polyphony: number;
  dependencies: {
    VoiceController: typeof VoiceController;
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
