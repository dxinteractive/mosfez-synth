import { DspNodeFaust, DspAudioNode, ParamValueObject } from "../types";

import type { ConstructNode } from "./construct-node";

import { series, env, lines } from "./faust-dsp-utils";
import { resolveParam } from "./param-utils";

export async function constructNodeFaust<P extends ParamValueObject>(
  audioContext: AudioContext | OfflineAudioContext,
  dspNode: DspNodeFaust,
  constructNode: ConstructNode<P>
): Promise<DspAudioNode<P>> {
  const { inputs = [], paramDefs, dependencies } = dspNode;

  // build input nodes
  const inputNodes = await Promise.all(
    inputs.map((input) => constructNode(audioContext, input))
  );

  // build dsp
  const dspToCompile = lines([
    'import("stdfaust.lib");',
    constructFaustDsp(dspNode),
  ]);

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
      const paramDef = paramDefs[paramKey];
      if (paramDef !== undefined) {
        const value = resolveParam(params, paramDef);
        if (typeof value === "number") {
          faustNode.setParamValue(name, value);
        }
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

function constructFaustDsp(dspNode: DspNodeFaust): string {
  const { paramDefs, dsp } = dspNode;

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
      series(Object.entries(paramDefs), "\n", ([name, value]) => {
        if (typeof value === "number") {
          return `${name} = ${value};\n`;
        }
        return `${name} = hslider("${name}",0.0,-9999999.0,9999999.0,0.0000001);`;
      }),
      // `changed(x) = x != x';`,
      // `reset = hslider("reset",0.0,0.0,9999999.0,1.0) : changed;`,
    ])
  );

  return lines([paramsDsp, dsp]);
}
