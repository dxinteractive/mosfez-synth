import type { compile as Compile } from "mosfez-faust/faust";

export type ParamDefinition = number | string;

export type ParamDefinitionObject = Record<string, ParamDefinition>;

export type ParamValueObject = Record<string, number>;

export type GraphFaust = {
  type: "faust";
  dsp: string;
  audioIn: Graph[];
  params: ParamDefinitionObject;
  dependencies: {
    compile: typeof Compile;
  };
};

export type Graph = GraphFaust;

export function isFaustGraph(graph: Graph): graph is GraphFaust {
  return graph.type === "faust";
}

export type GraphAudioNode<P> = AudioNode & {
  set: (params: P) => void;
  destroy: () => void;
};
