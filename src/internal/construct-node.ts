import {
  DspNode,
  isFaustDspNode,
  DspAudioNode,
  ParamValueObject,
  DspNodeFaust,
} from "../types";

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

//
// faust
//

async function constructFaustNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodeFaust
): Promise<DspAudioNode<P>> {
  const { dependencies } = dspNode;

  // build dsp
  let dsp = `import("stdfaust.lib");\n\n`;
  dsp += constructFaustDsp(dspNode);

  console.log("compiled dsp:", dsp);

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
  let dsp = "";

  // add input dsp

  dspNode.audioIn.forEach((audioIn, key) => {
    dsp += `\ninput_${key} = environment {\n`;
    dsp += constructFaustDsp(audioIn);
    dsp += "};\n";
  });

  const inputDspVars = dspNode.audioIn
    .map((_value, key) => `input_${key}.process`)
    .join(",");

  // add params
  dsp += "\nparams = environment {\n";
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
  dsp +=
    inputDspVars.length === 0
      ? dspNode.dsp
      : dspNode.dsp.replace("process = ", `process = ${inputDspVars} : `);

  // return result
  return dsp;
}
