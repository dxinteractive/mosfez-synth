import { compile } from "mosfez-faust/faust";
import type { DspNode, ParamDefinitionObject } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function faust<P extends Record<string, any>>(
  dsp: string,
  params: ParamDefinitionObject<P>
): DspNode<P> {
  const { inputs, ...rest } = params;
  return {
    type: "faust",
    dsp,
    inputs,
    params: rest as Partial<P>,
    dependencies: {
      compile,
    },
  };
}
