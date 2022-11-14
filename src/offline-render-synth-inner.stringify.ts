import type { ParamValueObject } from "./params";
import type { DspNodeSerialized } from "./dsp-node";
import { deserializeInIframe } from "./internal/deserialize-in-iframe";
import { Synth } from "./synth";

export async function offlineRenderSynthInner(
  offlineCtx: OfflineAudioContext,
  _source: AudioBufferSourceNode,
  props: {
    initialParams: Partial<ParamValueObject>;
    dspNodeSerialized: DspNodeSerialized;
  }
) {
  const { initialParams, dspNodeSerialized } = props;
  const synthDspNode = deserializeInIframe(dspNodeSerialized);

  // create synth with offline audio context
  const synth = new Synth({
    audioContext: offlineCtx,
    params: initialParams,
  });

  // build node graph into the synth
  await synth.build(synthDspNode);

  // connect the synth to the audio out on the offline context
  synth.connect(offlineCtx.destination);

  offlineCtx
    .suspend(0.1)
    .then(() => {
      synth.set({
        voice: "a",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 72, // set the pitch in decimalMidi
        speed: 5,
      });
    })
    .then(() => offlineCtx.resume());

  offlineCtx
    .suspend(0.2)
    .then(() => {
      synth.set({
        voice: "b",
        gate: 1, // start the voice
        force: 1, // set the amount of force (for force enabled devices), temporarily always set to 1
        pitch: 75, // set the pitch in decimalMidi
        speed: 3,
      });
    })
    .then(() => offlineCtx.resume());
}
