import type { compile } from "mosfez-faust/faust";
import type { VoiceController } from "./internal/voice-controller";
import {
  validateParamDefinitionObject,
  validateParamDefinition,
} from "./internal/param-utils";

export type ParamDefinition = number | string;

export type ParamDefinitionObject = Record<string, ParamDefinition>;

export type DspNodeType = "faust" | "poly";

export type DspNodeSerialized = DspNodeFaustSerialized | DspNodePolySerialized;

export type DspNodeConfig = {
  type: DspNodeType;
};

export class DspNode {
  type: DspNodeType;

  constructor(config: DspNodeConfig) {
    this.type = config.type;
  }

  static isFaustDspNode(DspNode: DspNode): DspNode is DspNodeFaust {
    return DspNode.type === "faust";
  }

  static isPolyDspNode(DspNode: DspNode): DspNode is DspNodePoly {
    return DspNode.type === "poly";
  }

  static isFaustDspNodeSerialized(
    serialized: DspNodeSerialized
  ): serialized is DspNodeFaustSerialized {
    return serialized.type === "faust";
  }

  static isPolyDspNodeSerialized(
    serialized: DspNodeSerialized
  ): serialized is DspNodePolySerialized {
    return serialized.type === "poly";
  }

  serialize(): DspNodeSerialized {
    throw new Error(".serialize() can only be called on subclasses");
  }
}

//
// faust
//

export type DspNodeFaustDependencies = {
  compile: typeof compile;
};

export type DspNodeFaustConfig = {
  dsp: string;
  inputs?: DspNode[];
  paramDefs: ParamDefinitionObject;
  dependencies: DspNodeFaustDependencies;
};

export type DspNodeFaustSerialized = {
  type: "faust";
  dsp: string;
  inputs: DspNodeSerialized[];
  paramDefs: ParamDefinitionObject;
};

export class DspNodeFaust extends DspNode {
  dsp: string;
  inputs: DspNode[];
  paramDefs: ParamDefinitionObject;
  dependencies: DspNodeFaustDependencies;

  constructor(config: DspNodeFaustConfig) {
    super({
      type: "faust",
    });

    this.dsp = config.dsp;
    this.inputs = config.inputs ?? [];
    this.paramDefs = validateParamDefinitionObject(config.paramDefs);
    this.dependencies = config.dependencies;
  }

  serialize(): DspNodeFaustSerialized {
    const { dsp, paramDefs } = this;
    const inputs = this.inputs.map((input) => input.serialize());

    return {
      type: "faust",
      dsp,
      inputs,
      paramDefs,
    };
  }
}

//
// poly
//

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
    this.release = validateParamDefinition("release", config.release);
    this.gate = validateParamDefinition("gate", config.gate);
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
