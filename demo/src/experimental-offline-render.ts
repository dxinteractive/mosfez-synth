import { toAudioBuffer } from "mosfez-faust/convert";
// import { Synth } from "mosfez-synth/synth";

import {
  initialParams,
  synthDspNode,
  liveAudioContext,
} from "./synth-instance";

import { offlineRender } from "mosfez-synth/offline-render";

export async function experimentalOfflineRender() {
  const channels = 2;
  const length = 2;
  const sampleRate = 48000;

  const samples = [];
  for (let i = 0; i < 10000; i++) {
    samples.push(0.2);
  }

  const result = await offlineRender({
    channels,
    sampleRate,
    length,
    initialParams,
    dspNode: synthDspNode,
  });

  console.log("result", result);

  const source = liveAudioContext.createBufferSource();
  source.buffer = await toAudioBuffer(result, liveAudioContext);
  source.connect(liveAudioContext.destination);
  source.start();
}
