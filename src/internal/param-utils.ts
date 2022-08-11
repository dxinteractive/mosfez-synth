import {
  ParamDefinition,
  ParamDefinitionObject,
  ParamValueObject,
} from "../types";

export function validateParamDefinition(
  name: string,
  paramDef: ParamDefinition
): ParamDefinition {
  if (!isConstant(paramDef) && !isVariable(paramDef)) {
    throw new Error(
      `param "${name}" must be a constant number or a string referring to a param name, but got ${paramDef}`
    );
  }
  return paramDef;
}

export function validateParamDefinitionObject(
  paramDefs: ParamDefinitionObject
): ParamDefinitionObject {
  for (const name in paramDefs) {
    validateParamDefinition(name, paramDefs[name] as ParamDefinition);
  }
  return paramDefs;
}

export function isConstant(paramDef: ParamDefinition): paramDef is number {
  return typeof paramDef === "number";
}

export function isVariable(paramDef: ParamDefinition): paramDef is string {
  return typeof paramDef === "string";
}

export function resolveParam(
  params: Partial<ParamValueObject>,
  paramDef: ParamDefinition
): number | undefined {
  if (isConstant(paramDef)) {
    return paramDef;
  } else if (isVariable(paramDef)) {
    return params[paramDef] as number;
  }
  return undefined;
}
