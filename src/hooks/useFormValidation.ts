import { useState } from "react";

type UseFormValidationType = (enteredValue: string) => boolean;

export const useFormValidation = (validateValue: UseFormValidationType) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] =
    useState<boolean>(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueIsTouched;

  const valueChangeHandler = (e: React.FormEvent) => {
    setEnteredValue((e.target as HTMLInputElement).value);
  };

  const valueBlurHandler = (): void => {
    setEnteredValueIsTouched(true);
  };

  const resetFunction = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    error: hasError,
    valueChangeHandler,
    valueBlurHandler,
    resetFunction
  };
};
