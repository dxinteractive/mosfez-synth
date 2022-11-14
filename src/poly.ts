import { DspNode } from "./dsp-node";
import type { ParamDefinition, DspNodeSerialized } from "./dsp-node";
import { VoiceController } from "./internal/voice-controller";
import { validateParamDefinition } from "./internal/param-utils";

export type DspNodePolyDependencies = {
  VoiceController: typeof VoiceController;
};

export type DspNodePolyConfig = {
  input: DspNode;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
  dependencies: DspNodePolyDependencies;
};

export type DspNodePolySerialized = {
  type: "poly";
  input: DspNodeSerialized;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
};

export class DspNodePoly extends DspNode {
  input: DspNode;
  polyphony: number;
  paramCacheSize?: number;
  release: ParamDefinition;
  gate: ParamDefinition;
  dependencies: DspNodePolyDependencies;

  constructor(config: DspNodePolyConfig) {
    super({
      type: "poly",
    });

    this.input = config.input;
    this.polyphony = config.polyphony;
    this.paramCacheSize = config.paramCacheSize;
    this.release = config.release;
    this.gate = config.gate;
    this.dependencies = config.dependencies;
  }

  serialize(): DspNodePolySerialized {
    const { polyphony, paramCacheSize, release, gate } = this;
    const input = this.input.serialize();

    return {
      type: "poly",
      input,
      polyphony,
      paramCacheSize,
      release,
      gate,
    };
  }
}

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
    release: validateParamDefinition("release", release),
    gate: validateParamDefinition("gate", gate),
    dependencies: {
      VoiceController,
    },
  });
}
