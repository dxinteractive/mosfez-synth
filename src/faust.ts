import { compile } from "mosfez-faust/faust";
import type { Graph, ParamDefinitionObject } from "./graph";

export function faust(
  dsp: string,
  audioIn: Graph[],
  params: ParamDefinitionObject = {}
): Graph {
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
