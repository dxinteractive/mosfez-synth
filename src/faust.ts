import { compile } from "mosfez-faust/faust";
import type {
  DspNodeFaust,
  FaustParamDefinitionObject,
  ParamDefinitionObject,
} from "./types";
import { validateParamDefinitionObject } from "./internal/param-utils";

export function faust(
  dsp: string,
  params: FaustParamDefinitionObject
): DspNodeFaust {
  const { inputs, ...rest } = params;
  return {
    type: "faust",
    dsp,
    inputs,
    params: validateParamDefinitionObject(rest as ParamDefinitionObject),
    dependencies: {
      compile,
    },
  };
}
