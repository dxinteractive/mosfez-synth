import { toAudioBuffer } from "mosfez-faust/convert";

import {
  initialParams,
  synthDspNode,
  liveAudioContext,
} from "./synth-instance";

import { offlineRender } from "mosfez-synth/offline-render";

export async function experimentalOfflineRender() {
  const events = [
    {
      time: 0.3,
      params: {
        voice: "a",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 72, // set the pitch in decimalMidi
        speed: 5,
      },
    },
    {
      time: 0.6,
      params: {
        voice: "b",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 75, // set the pitch in decimalMidi
        speed: 3,
      },
    },
    {
      time: 0.9,
      params: {
        voice: "c",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 76, // set the pitch in decimalMidi
        speed: 5,
      },
    },
    {
      time: 1.2,
      params: {
        voice: "d",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 79, // set the pitch in decimalMidi
        speed: 3,
      },
    },
  ];

  const result = await offlineRender({
    channels: 1,
    sampleRate: 48000,
    length: 2 * 48000,
    initialParams,
    dspNode: synthDspNode,
    events,
  });

  const source = liveAudioContext.createBufferSource();
  source.buffer = await toAudioBuffer(result, liveAudioContext);
  source.connect(liveAudioContext.destination);
  source.start();
}
