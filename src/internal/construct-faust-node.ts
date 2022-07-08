import type { GraphFaust, GraphAudioNode, ParamValueObject } from "../graph";

export async function constructFaustNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  graph: GraphFaust
): Promise<GraphAudioNode<P>> {
  const { dependencies } = graph;

  // build dsp
  let dsp = `import("stdfaust.lib");\n`;
  dsp += constructFaustDsp(graph);
  console.log("dsp", dsp);
  const faustNode = await dependencies.compile(audioContext, dsp);
  const node = faustNode as unknown as GraphAudioNode<P>;

  // cascade any calls to destroy
  const faustDestroy = node.destroy;
  node.destroy = () => {
    console.log("destroy");
    faustDestroy();
  };

  const paramsUsed = faustNode.getParams();

  // add a set method
  node.set = (params: P) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\/FaustDSP\//g, "");
      const value = params[paramKey] ?? 0;
      faustNode.setParamValue(name, value);
    });
  };

  return node;
}

function constructFaustDsp(graph: GraphFaust): string {
  // write params into dsp
  const params = Object.entries(graph.params)
    .map(([name, value]) => {
      if (typeof value === "number") {
        return `param_${name} = ${value};`;
      }

      if (typeof value === "string" && value[0] === ":") {
        const sliced = name.slice(0);
        return `param_${sliced} = hslider("${sliced}",0.0,-9999999.0,9999999.0,0.0000001);`;
      }

      throw new Error(
        `param "${name}" must be a number or a string beginning with ":"`
      );
    })
    .join("\n");

  // add provided dsp code and return
  return `${params}\n${graph.dsp}`;
}
