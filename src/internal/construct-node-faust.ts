import { DspNodeFaust, DspAudioNode, ParamValueObject } from "../types";

import type { ConstructNode } from "./construct-node";

import { series, env, lines } from "./faust-dsp-utils";

export async function constructNodeFaust<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodeFaust<P>,
  constructNode: ConstructNode<P>
): Promise<DspAudioNode<P>> {
  const { inputs = [], dependencies } = dspNode;

  // build input nodes
  const inputNodes = await Promise.all(
    inputs.map((input) => constructNode(audioContext, input))
  );

  // build dsp
  const dspToCompile = lines([
    'import("stdfaust.lib");',
    constructFaustDsp(dspNode),
  ]);

  console.log("dsp to compile:", dspToCompile);
  const faustNode = await dependencies.compile(audioContext, dspToCompile);
  const faustNodeDestroy = faustNode.destroy;
  const node = faustNode as unknown as DspAudioNode<P>;

  // execute and cascade any calls to destroy
  node.destroy = () => {
    faustNodeDestroy();
    inputNodes.forEach((node) => node?.destroy());
  };

  // precalculate params used in this node
  const paramsUsed = faustNode.getParams();

  // execute and cascade any calls to set
  node.set = (params: Partial<P>) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\/FaustDSP\//g, "");
      const value = params[paramKey];
      if (typeof value === "number") {
        faustNode.setParamValue(name, value);
      }
    });

    inputNodes.forEach((node) => node?.set(params));
  };

  // connect input nodes
  // todo - squash faust nodes together before compilation where possible
  // to reduce the amount of nodes and audio rate params being sent between nodes
  for (let i = 0; i < inputNodes.length; i++) {
    inputNodes[i].connect(node, 0, i);
  }

  return node;
}

function constructFaustDsp<P extends ParamValueObject>(
  dspNode: DspNodeFaust<P>
): string {
  const { params, dsp } = dspNode;

  // todo - use this when squashing faust nodes together
  // inputs
  // const inputDspVars = series(inputs, ",", (_, key) => `input_${key}.process`);
  // const inputDsp = series(inputs, ",", (dspNode, key) =>
  //   env(`input_${key}`, constructFaustDsp(dspNode))
  // );
  // const bodyDsp =
  //   inputDspVars.length === 0
  //     ? dsp
  //     : dsp.replace("process = ", `process = ${inputDspVars} : `);

  // params
  const paramsDsp = env(
    "params",
    lines([
      series(Object.entries(params), "\n", ([name, value]) => {
        if (typeof value === "number") {
          return `${name} = ${value};\n`;
        }

        if (typeof value === "string" && value[0] === ":") {
          const sliced = name.slice(0);
          return `${sliced} = hslider("${sliced}",0.0,-9999999.0,9999999.0,0.0000001);`;
        }

        throw new Error(
          `param "${name}" must be a number or a string beginning with ":"`
        );
      }),
      // `changed(x) = x != x';`,
      // `reset = hslider("reset",0.0,0.0,9999999.0,1.0) : changed;`,
    ])
  );

  return lines([paramsDsp, dsp]);
}
