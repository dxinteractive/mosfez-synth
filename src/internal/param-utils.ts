import {
  ParamDefinition,
  ParamDefinitionObject,
  ParamValueObject,
} from "../types";

export function validateParamDefinition(
  name: string,
  value: ParamDefinition
): ParamDefinition {
  if (!isConstant(value) && !isVariable(value)) {
    throw new Error(
      `param "${name}" must be a constant number or a string referring to a param name, but got ${value}`
    );
  }
  return value;
}

export function validateParamDefinitionObject(
  params: ParamDefinitionObject
): ParamDefinitionObject {
  for (const name in params) {
    validateParamDefinition(name, params[name] as ParamDefinition);
  }
  return params;
}

export function isConstant(value: ParamDefinition): value is number {
  return typeof value === "number";
}

export function isVariable(value: ParamDefinition): value is string {
  return typeof value === "string";
}

export function resolveParam(
  params: Partial<ParamValueObject>,
  value: ParamDefinition
): number {
  if (isConstant(value)) {
    return value;
  }
  return params[value] as number;
}
