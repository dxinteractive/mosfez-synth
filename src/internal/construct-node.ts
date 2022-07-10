import {
  DspNode,
  DspNodeFaust,
  DspNodePoly,
  isFaustDspNode,
  isPolyDspNode,
  DspAudioNode,
  ParamValueObject,
} from "../types";

import { series, env, lines } from "./faust-dsp-utils";

export async function constructNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNode<P>
): Promise<DspAudioNode<P>> {
  if (isFaustDspNode(dspNode) || isPolyDspNode(dspNode)) {
    return await constructFaustNode<P>(audioContext, dspNode);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`dspNode has invalid type "${dspNode.type}"`);
}

//
// faust and poly
//

async function constructFaustNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodeFaust<P> | DspNodePoly<P>
): Promise<DspAudioNode<P>> {
  const { dependencies } = dspNode;

  // build dsp
  const dspToCompile = lines([
    'import("stdfaust.lib");',
    constructFaustDsp(dspNode),
  ]);

  console.log("dsp to compile:", dspToCompile);
  const faustNode = await dependencies.compile(audioContext, dspToCompile);
  const node = faustNode as unknown as DspAudioNode<P>;

  // cascade any calls to destroy
  node.destroy = () => {
    faustNode.destroy();
  };

  // precalculate params used in this node
  const paramsUsed = faustNode.getParams();
  console.log("paramsUsed", paramsUsed);

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

function constructFaustDsp<P extends ParamValueObject>(
  dspNode: DspNodeFaust<P> | DspNodePoly<P>,
  i = 0
): string {
  if (isPolyDspNode(dspNode)) {
    const voiceDsp = constructFaustDsp(dspNode.voice).replace(
      "process = ",
      `voice(i) = `
    );

    return lines([
      voiceDsp,
      `process = par(i, ${dspNode.max}, voice(i)) :> _;`,
    ]);
  }

  const { inputs = [], params, dsp } = dspNode;

  // inputs
  const inputDspVars = series(inputs, ",", (_, key) => `input_${key}.process`);
  const inputDsp = series(inputs, ",", (dspNode, key) =>
    env(`input_${key}`, constructFaustDsp(dspNode))
  );

  // params
  const paramsDsp = env(
    "params",
    series(Object.entries(params), "\n", ([name, value]) => {
      if (typeof value === "number") {
        return `${name} = ${value};\n`;
      }

      if (typeof value === "string" && value[0] === ":") {
        const sliced = name.slice(0);
        return `${sliced} = hslider("${sliced}_%${i}",0.0,-9999999.0,9999999.0,0.0000001);`;
      }

      throw new Error(
        `param "${name}" must be a number or a string beginning with ":"`
      );
    })
  );

  // provided dsp code
  const bodyDsp =
    inputDspVars.length === 0
      ? dsp
      : dsp.replace("process = ", `process = ${inputDspVars} : `);

  return lines([inputDsp, paramsDsp, bodyDsp]);
}
