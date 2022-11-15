import { toAudioBuffer } from "mosfez-faust/convert";

import {
  initialParams,
  synthDspNode,
  liveAudioContext,
} from "./synth-instance";

import { offlineRender } from "mosfez-synth/offline-render";
import { InputEvent, isInputStopEvent } from "mosfez-synth/synth";

let buffer: AudioBuffer | undefined;

export async function experimentalOfflineRender(events: InputEvent[]) {
  console.log("events", events);

  const stopEvent = events.find(isInputStopEvent);
  if (!stopEvent) {
    console.log("no stop event found");
    return;
  }

  const sampleRate = 48000;

  const result = await offlineRender({
    channels: 1,
    sampleRate,
    length: stopEvent.time * sampleRate,
    initialParams,
    dspNode: synthDspNode,
    events,
  });

  buffer = await toAudioBuffer(result, liveAudioContext);
}

export function playLastRender() {
  if (!buffer) {
    console.log("no buffer to play");
    return;
  }

  const source = liveAudioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(liveAudioContext.destination);
  source.addEventListener("ended", () => {
    source.disconnect(liveAudioContext.destination);
  });
  source.start();
}
