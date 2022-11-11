import { compile } from "mosfez-faust/faust";

export async function offlineRenderDspInner(
  offlineCtx: OfflineAudioContext,
  source: AudioBufferSourceNode,
  props: {
    dsp: string;
  }
) {
  const node = await compile(offlineCtx, props.dsp);
  source.connect(node);
  node.connect(offlineCtx.destination);
}