import { DspNodePoly, DspAudioNode, ParamValueObject } from "../types";

import type { ConstructNode } from "./construct-node";

export async function constructNodePoly<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodePoly<P>,
  constructNode: ConstructNode<P>
): Promise<DspAudioNode<P>> {
  const { voice, polyphony, dependencies } = dspNode;

  // create a voice bank
  const { VoiceController } = dependencies;
  const controller = new VoiceController({
    totalVoices: polyphony,
    maxKeys: 10000,
  });

  // catch non-voice-specific params in state
  // let nonVoiceParams: Partial<P> = {};

  // create a map to hold per-voice state
  // const voiceParamsMap = new LRUMap<string, Partial<P>>(999);

  // construct polyphony number of voices
  const voiceNodes = await Promise.all(
    Array(polyphony)
      .fill(0)
      .map(() => constructNode(audioContext, voice))
  );

  // make a gain node and connect all voices to it
  const gainNode = new GainNode(audioContext) as unknown as DspAudioNode<P>;
  voiceNodes.forEach((node) => node.connect(gainNode));

  // cascade any calls to destroy
  gainNode.destroy = () => {
    voiceNodes.forEach((node) => node?.destroy());
  };

  // cascade any calls to set, filtered down to particular voices if required
  gainNode.set = (params: Partial<P>) => {
    const paramsToSet = controller.set(params);
    paramsToSet.forEach(({ index, params }) => {
      voiceNodes[index].set(params as Partial<P>);
    });
  };

  return gainNode;
}
