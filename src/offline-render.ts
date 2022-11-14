// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import offlineRenderSynthInnerStringified from "../dist/offline-render-synth-inner.stringify.js";
import {
  offlineRender as offlineRenderContext,
  OfflineRenderParams,
} from "mosfez-faust/offline-render";
import type { ParamValueObject } from "./params";
import { DspNode } from "./dsp-node";

export type OfflineRenderSynthParams<P> = Omit<
  OfflineRenderParams,
  "functionString"
> & {
  initialParams: Partial<P>;
  dspNode: DspNode;
};

export async function offlineRender<P extends ParamValueObject>(
  params: OfflineRenderSynthParams<P>
) {
  const { initialParams, dspNode, ...rest } = params;
  const dspNodeSerialized = dspNode.serialize();

  return offlineRenderContext({
    functionString: `
      ${offlineRenderSynthInnerStringified}
      exports.buildContext = exports.offlineRenderSynthInner;
    `,
    props: {
      initialParams,
      dspNodeSerialized,
    },
    ...rest,
  });
}
