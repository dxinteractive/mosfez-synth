import { DspNode } from "../dsp-node";
import {
  DspNodeSerialized,
  DspNodeFaust,
  DspNodeFaustSerialized,
  DspNodePoly,
  DspNodePolySerialized,
} from "../dsp-node";

// deps
import { compile } from "../../bundled-deps/mosfez-faust/faust";
import { VoiceController } from "./voice-controller";

export function deserializeInIframe(serialized: DspNodeSerialized): DspNode {
  if (DspNode.isFaustDspNodeSerialized(serialized)) {
    return deserializeFaust(serialized);
  }
  if (DspNode.isPolyDspNodeSerialized(serialized)) {
    return deserializePoly(serialized);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  throw new Error(`serialized has invalid type "${serialized.type}"`);
}

function deserializeFaust(serialized: DspNodeFaustSerialized): DspNodeFaust {
  const { dsp, inputs, paramDefs } = serialized;

  return new DspNodeFaust({
    dsp,
    inputs: inputs.map((input) => deserializeInIframe(input)),
    paramDefs,
    dependencies: {
      compile,
    },
  });
}

function deserializePoly(serialized: DspNodePolySerialized): DspNodePoly {
  const { input, ...rest } = serialized;

  return new DspNodePoly({
    input: deserializeInIframe(input),
    ...rest,
    dependencies: {
      VoiceController,
    },
  });
}
