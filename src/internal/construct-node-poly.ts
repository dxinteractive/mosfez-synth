import { DspNodePoly, DspAudioNode, ParamValueObject } from "../types";

import type { ConstructNode } from "./construct-node";
import { isVariable, resolveParam } from "./param-utils";

export async function constructNodePoly<P extends ParamValueObject>(
  audioContext: AudioContext | OfflineAudioContext,
  dspNode: DspNodePoly,
  constructNode: ConstructNode<P>
): Promise<DspAudioNode<P>> {
  const {
    input,
    polyphony,
    paramCacheSize = 10000,
    release,
    gate,
    dependencies,
  } = dspNode;
  const releaseIsVariable = isVariable(release);

  // create a voice bank
  const { VoiceController } = dependencies;
  const controller = new VoiceController({
    polyphony,
    resolveGate: (params) => resolveParam(params, gate),
    paramCacheSize,
  });

  // set release if it's constant
  const setRelease = (r: number) => controller.setRelease(r * 1000);

  if (!releaseIsVariable) {
    setRelease(release);
  }

  // construct polyphony number of voices
  const voiceNodes = await Promise.all(
    Array(polyphony)
      .fill(0)
      .map(() => constructNode(audioContext, input))
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
    // set release if it is passed through here
    if (releaseIsVariable) {
      const value = params[release];
      if (typeof value === "number") {
        setRelease(value);
      }
    }

    // pass params through the controller
    const paramsToSet = controller.set(params);

    // send the results to child nodes
    paramsToSet.forEach(({ index, params }) => {
      voiceNodes[index].set(params as Partial<P>);
    });
  };

  return gainNode;
}
