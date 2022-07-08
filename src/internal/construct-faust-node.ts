import type { DspNodeFaust, DspAudioNode, ParamValueObject } from "../types";

export async function constructFaustNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodeFaust
): Promise<DspAudioNode<P>> {
  const { dependencies } = dspNode;

  // build dsp
  let dsp = `import("stdfaust.lib");\n\n`;
  dsp += constructFaustDsp(dspNode);
  console.log("dsp", dsp);

  const faustNode = await dependencies.compile(audioContext, dsp);
  const node = faustNode as unknown as DspAudioNode<P>;

  // cascade any calls to destroy
  node.destroy = () => {
    faustNode.destroy();
  };

  // precalculate params used in this node
  const paramsUsed = faustNode.getParams();

  // add a set method
  node.set = (params: Partial<P>) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\/FaustDSP\//g, "");
      const value = params[paramKey] ?? 0;
      faustNode.setParamValue(name, value);
    });
  };

  return node;
}

function constructFaustDsp(dspNode: DspNodeFaust): string {
  // write params into dsp

  let dsp = "";

  // add params
  dsp += "params = environment {\n";
  Object.entries(dspNode.params).forEach(([name, value]) => {
    if (typeof value === "number") {
      dsp += `  ${name} = ${value};\n`;
      return;
    }

    if (typeof value === "string" && value[0] === ":") {
      const sliced = name.slice(0);
      dsp += `  ${sliced} = hslider("${sliced}",0.0,-9999999.0,9999999.0,0.0000001);\n`;
      return;
    }

    throw new Error(
      `param "${name}" must be a number or a string beginning with ":"`
    );
  });
  dsp += "};\n";

  // add provided dsp code
  dsp += dspNode.dsp;

  // return result
  return dsp;
}
