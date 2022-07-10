import { compile } from "mosfez-faust/faust";
import type { DspNode, ParamValueObject } from "./types";

export function poly<P extends ParamValueObject>(
  voice: DspNode<P>,
  max: number
): DspNode<P> {
  return {
    type: "poly",
    voice,
    max,
    dependencies: {
      compile,
    },
  };
}
