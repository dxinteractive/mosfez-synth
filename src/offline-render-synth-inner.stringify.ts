import type { ParamValueObject } from "./params";
import type { DspNodeSerialized } from "./dsp-node";
import { deserializeInIframe } from "./internal/deserialize-in-iframe";
import { Synth, InputEvent, isInputSetEvent } from "./synth";

type Props = {
  initialParams: Partial<ParamValueObject>;
  dspNodeSerialized: DspNodeSerialized;
  events: InputEvent[];
};

export async function offlineRenderSynthInner(
  offlineCtx: OfflineAudioContext,
  _source: AudioBufferSourceNode,
  props: Props
) {
  const { initialParams, dspNodeSerialized, events } = props;
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

  // process set events
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (isInputSetEvent(event)) {
      offlineCtx.suspend(event.time).then(() => {
        synth.set(event.params);
        offlineCtx.resume();
      });
    }
  }
}
