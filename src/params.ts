export type ParamValue = number | string;
// should just be number, but voice is part of the same object
// which must be a string and typescript currently cant do
// rest types that differ from explicit child types

export type ParamValueObject = Record<string, ParamValue>;
