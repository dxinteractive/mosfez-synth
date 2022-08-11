import {
  DspNode,
  isFaustDspNode,
  isPolyDspNode,
  DspAudioNode,
  ParamValueObject,
} from "../types";

import { constructNodeFaust } from "./construct-node-faust";
import { constructNodePoly } from "./construct-node-poly";

export type ConstructNode<P extends ParamValueObject> = (
  audioContext: AudioContext,
  dspNode: DspNode
) => Promise<DspAudioNode<P>>;

export async function constructNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNode
): Promise<DspAudioNode<P>> {
  if (isFaustDspNode(dspNode)) {
    return await constructNodeFaust<P>(audioContext, dspNode, constructNode);
  }
  if (isPolyDspNode(dspNode)) {
    return await constructNodePoly<P>(audioContext, dspNode, constructNode);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`dspNode has invalid type "${dspNode.type}"`);
}
