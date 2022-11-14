import type { DspNodeFaust, DspNodeFaustSerialized } from "./faust";
import type { DspNodePoly, DspNodePolySerialized } from "./poly";

export type ParamDefinition = number | string;

export type ParamDefinitionObject = Record<string, ParamDefinition>;

export type DspNodeType = "faust" | "poly";

export type DspNodeSerialized = DspNodeFaustSerialized | DspNodePolySerialized;

export type DspNodeConfig = {
  type: DspNodeType;
};

export class DspNode {
  type: DspNodeType;

  constructor(config: DspNodeConfig) {
    this.type = config.type;
  }

  static isFaustDspNode(DspNode: DspNode): DspNode is DspNodeFaust {
    return DspNode.type === "faust";
  }

  static isPolyDspNode(DspNode: DspNode): DspNode is DspNodePoly {
    return DspNode.type === "poly";
  }

  serialize(): DspNodeSerialized {
    throw new Error(".serialize() can only be called on subclasses");
  }
}
