import { useFormValidation } from "../../hooks/useFormValidation";

interface IInputProps {
    type: string,
    name: string
}

export const Input: React.FC<IInputProps> = (props) => {
  const {
    value: input,
    isValid: inputValid,
    error: inputInputHasError,
    valueChangeHandler: inputChangeHandler,
    valueBlurHandler: inputBlurHandler,
    resetFunction: resetInputHandler,
  } = useFormValidation((value) => value.trim() !== "");
  return (
    <div>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.name}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        value={input}
      />
      <p className="error-text">
        {!inputValid && inputInputHasError && `${props.name} must not be empty`}
      </p>
    </div>
  );
};
