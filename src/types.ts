import type { compile as Compile } from "mosfez-faust/faust";
import type { VoiceController } from "./internal/voice-controller";

export type ParamValue = number | string;
// should just be number, but voice is part of the same object
// which must be a string and typescript currently cant do
// rest types that differ from explicit child types

export type ParamValueObject = Record<string, ParamValue>;

export type ParamDefinition = number | string;

export type ParamDefinitionObject = Record<string, ParamDefinition>;

export type FaustParamDefinitionObject = {
  inputs?: DspNode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type PolyParamDefinitionObject = {
  input: DspNode;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
};

export type DspNodeFaust = {
  type: "faust";
  dsp: string;
  inputs?: DspNode[];
  paramDefs: ParamDefinitionObject;
  dependencies: {
    compile: typeof Compile;
  };
};

export type DspNodePoly = {
  type: "poly";
  input: DspNode;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
  dependencies: {
    VoiceController: typeof VoiceController;
  };
};

export type DspNode = DspNodeFaust | DspNodePoly;

export function isFaustDspNode(DspNode: DspNode): DspNode is DspNodeFaust {
  return DspNode.type === "faust";
}

export function isPolyDspNode(DspNode: DspNode): DspNode is DspNodePoly {
  return DspNode.type === "poly";
}

export type DspAudioNode<P extends ParamValueObject> = AudioNode & {
  set: (params: Partial<P>) => void;
  destroy: () => void;
};
