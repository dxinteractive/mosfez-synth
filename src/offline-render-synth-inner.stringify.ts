import type { ParamValueObject } from "./params";
import type { DspNodeSerialized } from "./dsp-node";
import { deserializeInIframe } from "./internal/deserialize-in-iframe";
import { Synth } from "./synth";
import type { SequencerEvent } from "./sequencer";

type Props = {
  initialParams: Partial<ParamValueObject>;
  dspNodeSerialized: DspNodeSerialized;
  events: SequencerEvent[];
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

  // process all events
  for (let i = 0; i < events.length; i++) {
    const { time, params } = events[i];
    offlineCtx.suspend(time).then(() => {
      synth.set(params);
      offlineCtx.resume();
    });
  }
}
