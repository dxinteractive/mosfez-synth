import { Graph, isFaustGraph, GraphAudioNode } from "../graph";
import { constructFaustNode } from "./construct-faust-node";

export async function constructNode<P>(
  audioContext: AudioContext,
  graph: Graph
): Promise<GraphAudioNode<P>> {
  if (isFaustGraph(graph)) {
    return await constructFaustNode(audioContext, graph);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`graph has invalid type "${graph.type}"`);
}
