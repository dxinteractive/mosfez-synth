// import { audioBufferToFloat32Array } from "mosfez-faust/convert";
// import { Synth } from "mosfez-synth/synth";

// import {
//   createSynthWithContext,
//   buildSynthNodes,
//   liveAudioContext,
// } from "./synth-instance";

import { offlineRenderDsp } from "mosfez-synth/offline-render";
// import { offlineRenderDsp } from "mosfez-faust/offline-render-dsp";

// function audioBufferToFloat32Array(audioBuffer: AudioBuffer): Float32Array[] {
//   const channels: Float32Array[] = [];
//   for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
//     channels.push(audioBuffer.getChannelData(i));
//   }
//   return channels;
// }

// import { liveAudioContext } from "./synth-instance";

export async function experimentalOfflineRender() {
  const channels = 2;
  // const length = 2;
  const sampleRate = 48000;
  // const offlineContext = new OfflineAudioContext(
  //   channels,
  //   sampleRate * length,
  //   sampleRate
  // );

  const samples = [];
  for (let i = 0; i < 10; i++) {
    samples.push(0.2);
  }

  const result = await offlineRenderDsp({
    channels,
    sampleRate,
    dsp: `import("stdfaust.lib");
    process = _,*(0.5);`,
    input: [samples, samples],
  });

  console.log("result", result);

  // offlineContext
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
  //   .then(() => offlineContext.resume());

  // offlineContext
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
  //   .then(() => offlineContext.resume());

  // const synth = createSynthWithContext(offlineContext);
  // await synth.build(buildSynthNodes());
  // synth.connect(offlineContext.destination);

  // const buffer = await offlineContext.startRendering();

  // const source = liveAudioContext.createBufferSource();
  // source.buffer = buffer;
  // source.connect(liveAudioContext.destination);
  // source.start();

  // console.log("buffer", buffer);

  // synth.destroy();
}
