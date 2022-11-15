// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import offlineRenderSynthInnerStringified from "../dist/offline-render-synth-inner.stringify.js";
import { offlineRender as offlineRenderContext } from "mosfez-faust/offline-render";
import type { ParamValueObject } from "./params";
import { DspNode } from "./dsp-node";
import type { InputEvent } from "./synth";

export type OfflineRenderSynthParams<P> = {
  channels: number;
  sampleRate: number;
  length: number;
  initialParams: Partial<P>;
  dspNode: DspNode;
  events: InputEvent[];
};

export async function offlineRender<P extends ParamValueObject>(
  params: OfflineRenderSynthParams<P>
) {
  const { initialParams, dspNode, events, ...rest } = params;
  const dspNodeSerialized = dspNode.serialize();

  return offlineRenderContext({
    functionString: `
      ${offlineRenderSynthInnerStringified}
      exports.buildContext = exports.offlineRenderSynthInner;
    `,
    props: {
      initialParams,
      dspNodeSerialized,
      events,
    },
    ...rest,
  });
}
