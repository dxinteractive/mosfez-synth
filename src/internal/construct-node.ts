import { ParamValueObject } from "../params";
import { DspNode } from "../dsp-node";
import { constructNodeFaust } from "./construct-node-faust";
import { constructNodePoly } from "./construct-node-poly";

export type DspAudioNode<P extends ParamValueObject> = AudioNode & {
  set: (params: Partial<P>) => void;
  destroy: () => void;
};

export type ConstructNode<P extends ParamValueObject> = (
  audioContext: AudioContext | OfflineAudioContext,
  dspNode: DspNode
) => Promise<DspAudioNode<P>>;

export async function constructNode<P extends ParamValueObject>(
  audioContext: AudioContext | OfflineAudioContext,
  dspNode: DspNode
): Promise<DspAudioNode<P>> {
  if (DspNode.isFaustDspNode(dspNode)) {
    return await constructNodeFaust<P>(audioContext, dspNode, constructNode);
  }
  if (DspNode.isPolyDspNode(dspNode)) {
    return await constructNodePoly<P>(audioContext, dspNode, constructNode);
  }
  throw new Error(`dspNode has invalid type "${dspNode.type}"`);
}
