import type { ParamValueObject } from "./params";

export type SequencerEvent = {
  time: number;
  params: Partial<ParamValueObject>;
};
