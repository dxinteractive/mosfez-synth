import {
  DspNode,
  isFaustDspNode,
  DspAudioNode,
  ParamValueObject,
} from "../types";
import { constructFaustNode } from "./construct-faust-node";

export async function constructNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNode
): Promise<DspAudioNode<P>> {
  if (isFaustDspNode(dspNode)) {
    return await constructFaustNode<P>(audioContext, dspNode);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`dspNode has invalid type "${dspNode.type}"`);
}
