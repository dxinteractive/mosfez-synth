import { DspNodeFaust } from "./dsp-node";
import type { DspNode } from "./dsp-node";
import { compile } from "mosfez-faust/faust";

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
    paramDefs: rest,
    dependencies: {
      compile,
    },
  });
}
