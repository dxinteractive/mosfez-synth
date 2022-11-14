import { DspNodePoly } from "./dsp-node";
import type { ParamDefinition, DspNode } from "./dsp-node";
import { VoiceController } from "./internal/voice-controller";

export type PolyParamDefinitionObject = {
  input: DspNode;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
};

export function poly(params: PolyParamDefinitionObject): DspNodePoly {
  const { input, polyphony, paramCacheSize, release, gate } = params;
  return new DspNodePoly({
    input,
    polyphony,
    paramCacheSize,
    release,
    gate,
    dependencies: {
      VoiceController,
    },
  });
}
