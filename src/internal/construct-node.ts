import {
  Graph,
  isFaustGraph,
  GraphAudioNode,
  ParamValueObject,
} from "../graph";
import { constructFaustNode } from "./construct-faust-node";

export async function constructNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  graph: Graph
): Promise<GraphAudioNode<P>> {
  if (isFaustGraph(graph)) {
    return await constructFaustNode<P>(audioContext, graph);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`graph has invalid type "${graph.type}"`);
}
