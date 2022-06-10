import { Dendriform, useDendriform } from "dendriform";

type UseNumberToStringResult = [Dendriform<string>, Dendriform<boolean>];

export function useNumberToString(
  numberForm: Dendriform<number>
): UseNumberToStringResult {
  const stringForm = useDendriform(() => `${numberForm.value}`);
  const isStringValidForm = useDendriform(true);

  numberForm.useDerive((newValue) => {
    stringForm.set(`${newValue}`);
  });

  stringForm.useDerive((newValue) => {
    const number = Number(newValue);
    const isValid = !isNaN(number);
    isStringValidForm.set(isValid);

    if (isValid) {
      numberForm.set(number);
    }
  });

  return [stringForm, isStringValidForm];
}
