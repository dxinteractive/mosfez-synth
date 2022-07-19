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
  if (isFaustDspNode(dspNode)) {
    return await constructFaustNode<P>(audioContext, dspNode);
  }
  if (isPolyDspNode(dspNode)) {
    return await constructPolyNode<P>(audioContext, dspNode);
  }
  // @ts-expect-error - types do not allow this path yet
  throw new Error(`dspNode has invalid type "${dspNode.type}"`);
}

//
// faust
//

async function constructFaustNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodeFaust<P>
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
  const node = faustNode as unknown as DspAudioNode<P>;

  // execute and cascade any calls to destroy
  node.destroy = () => {
    faustNode.destroy();
    inputNodes.forEach((node) => node?.destroy());
  };

  // precalculate params used in this node
  const paramsUsed = faustNode.getParams();

  // execute and cascade any calls to set
  node.set = (params: Partial<P>) => {
    paramsUsed.forEach((name) => {
      const paramKey = name.replace(/^\/FaustDSP\//g, "");
      const value = params[paramKey] ?? 0;
      faustNode.setParamValue(name, value);
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
    })
  );

  return lines([paramsDsp, dsp]);
}

//
// poly
//

async function constructPolyNode<P extends ParamValueObject>(
  audioContext: AudioContext,
  dspNode: DspNodePoly<P>
): Promise<DspAudioNode<P>> {
  const { voice, polyphony, dependencies } = dspNode;

  const VoiceAllocator = dependencies.voiceAllocator;
  const voiceAllocator = new VoiceAllocator(polyphony);

  // todo - test performance of constructing these on the fly when new voices are required
  const voiceNodes = await Promise.all(
    Array(polyphony)
      .fill(0)
      .map(() => constructNode(audioContext, voice))
  );

  const gainNode = new GainNode(audioContext) as unknown as DspAudioNode<P>;

  console.log("voiceNodes", voiceNodes);

  // connect voices to gain (mixer) node
  voiceNodes.forEach((node) => node.connect(gainNode));

  // cascade any calls to destroy
  gainNode.destroy = () => {
    voiceNodes.forEach((node) => node?.destroy());
  };

  // cascade any calls to set, filtered down to particular voices if required
  gainNode.set = ({ voice, ...params }: Partial<P>) => {
    const { force } = params;
    if (typeof force === "number") {
      const voiceString = `${voice}`;
      const voiceIndex =
        force > 0
          ? voiceAllocator.activate(voiceString)
          : voiceAllocator.release(voiceString, 1000);

      // if (force > 0) {
      //   const t0 = performance.now();
      //   constructNode(audioContext, dspNode.voice).then((newNode) => {
      //     const t1 = performance.now();
      //     console.log("compile took:", t1 - t0, "ms");
      //     newNode.connect(gainNode);
      //     voiceNodes.push(newNode);
      //     console.log("connect took:", t1 - t0, "ms");
      //     newNode.set(params as Partial<P>);
      //   });
      // }

      voiceNodes[voiceIndex].set(params as Partial<P>);
    } else {
      voiceNodes.forEach((node) => node?.set(params as Partial<P>));
    }
  };

  return gainNode;
}
