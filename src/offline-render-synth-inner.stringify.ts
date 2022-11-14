// import { compile } from "../bundled-deps/mosfez-faust/faust";

import type { ParamValueObject } from "./params";

export async function offlineRenderSynthInner(
  offlineCtx: OfflineAudioContext,
  source: AudioBufferSourceNode,
  props: {
    initialParams: Partial<ParamValueObject>;
    dspNodeSerialized: unknown;
  }
) {
  const { initialParams, dspNodeSerialized } = props;
  console.log("initialParams", initialParams);
  console.log("dspNodeSerialized", dspNodeSerialized);

  source.connect(offlineCtx.destination);

  // offlineCtx
  //   .suspend(0.1)
  //   .then(() => {
  //     synth.set({
  //       voice: "a",
  //       gate: 1, // start the voice
  //       force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
  //       pitch: 72, // set the pitch in decimalMidi
  //       speed: 5,
  //     });
  //   })
  //   .then(() => offlineCtx.resume());

  // offlineCtx
  //   .suspend(0.2)
  //   .then(() => {
  //     synth.set({
  //       voice: "b",
  //       gate: 1, // start the voice
  //       force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
  //       pitch: 75, // set the pitch in decimalMidi
  //       speed: 3,
  //     });
  //   })
  //   .then(() => offlineCtx.resume());

  // const synth = createSynthWithContext(offlineCtx);
  // await synth.build(buildSynthNodes());
  // synth.connect(offlineCtx.destination);
}
