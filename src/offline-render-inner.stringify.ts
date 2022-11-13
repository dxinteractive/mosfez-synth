// import { compile } from "../bundled-deps/mosfez-faust/faust";

export async function offlineRenderDspInner(
  offlineCtx: OfflineAudioContext,
  source: AudioBufferSourceNode
  // props: {
  //   dsp: string;
  // }
) {
  // const node = await compile(offlineCtx, props.dsp);
  // source.connect(node);
  source.connect(offlineCtx.destination);
}
