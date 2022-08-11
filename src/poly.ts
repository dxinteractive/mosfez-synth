import { VoiceController } from "./internal/voice-controller";
import type { DspNodePoly, PolyParamDefinitionObject } from "./types";
import { validateParamDefinition } from "./internal/param-utils";

export function poly(params: PolyParamDefinitionObject): DspNodePoly {
  const { input, polyphony, paramCacheSize, release, gate } = params;
  return {
    type: "poly",
    input,
    polyphony,
    paramCacheSize,
    release: validateParamDefinition("release", release),
    gate: validateParamDefinition("gate", gate),
    dependencies: {
      VoiceController,
    },
  };
}
