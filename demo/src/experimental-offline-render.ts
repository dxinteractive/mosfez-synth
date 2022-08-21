// import { audioBufferToFloat32Array } from "mosfez-faust/convert";

function audioBufferToFloat32Array(audioBuffer: AudioBuffer): Float32Array[] {
  const channels: Float32Array[] = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }
  return channels;
}

import {
  liveAudioContext,
  buildSynthNodes,
  createSynthWithContext,
} from "./synth-instance";

export async function experimentalOfflineRender() {
  const length = 5;
  const sampleRate = 48000;
  const offlineContext = new OfflineAudioContext(
    2,
    sampleRate * length,
    sampleRate
  );

  // offlineContext
  //   .suspend(0.1)
  //   .then(() => {
  //     synth.set({
  //       voice: "a",
  //       gate: 1, // start the voice
  //       force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
  //       pitch: 72, // set the pitch in decimalMidi
  //       pan: Math.random() * 0.5 + 0.25, // set an amount of pan
  //       speed: Math.random() * 10 + 1, // set a tremolo speed
  //     });
  //   })
  //   .then(() => offlineContext.resume());

  const synth = createSynthWithContext(offlineContext);
  synth.build(buildSynthNodes());

  const buffer = await offlineContext.startRendering();
  const data = audioBufferToFloat32Array(buffer);

  const source = liveAudioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(liveAudioContext.destination);
  source.start();

  console.log("offline rendered data:", data);
}
