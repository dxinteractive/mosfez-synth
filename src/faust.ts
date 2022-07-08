import { compile } from "mosfez-faust/faust";
import type { DspNode, ParamDefinitionObject } from "./types";

export function faust(
  dsp: string,
  audioIn: DspNode[],
  params: ParamDefinitionObject = {}
): DspNode {
  return {
    type: "faust",
    dsp,
    audioIn,
    params,
    dependencies: {
      compile,
    },
  };
}
