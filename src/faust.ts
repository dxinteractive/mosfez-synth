import { DspNode } from "./dsp-node";
import type { ParamDefinitionObject, DspNodeSerialized } from "./dsp-node";
import { compile } from "mosfez-faust/faust";
import { validateParamDefinitionObject } from "./internal/param-utils";

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
    this.paramDefs = config.paramDefs;
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

export type FaustParamDefinitionObject = {
  inputs?: DspNode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export function faust(
  dsp: string,
  paramDefs: FaustParamDefinitionObject
): DspNodeFaust {
  const { inputs, ...rest } = paramDefs;
  return new DspNodeFaust({
    dsp,
    inputs,
    paramDefs: validateParamDefinitionObject(rest as ParamDefinitionObject),
    dependencies: {
      compile,
    },
  });
}
