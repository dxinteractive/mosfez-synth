import { compile } from "mosfez-faust/faust";
import type {
  DspNodeFaust,
  FaustParamDefinitionObject,
  ParamDefinitionObject,
} from "./types";
import { validateParamDefinitionObject } from "./internal/param-utils";

export function faust(
  dsp: string,
  paramDefs: FaustParamDefinitionObject
): DspNodeFaust {
  const { inputs, ...rest } = paramDefs;
  return {
    type: "faust",
    dsp,
    inputs,
    paramDefs: validateParamDefinitionObject(rest as ParamDefinitionObject),
    dependencies: {
      compile,
    },
  };
}
