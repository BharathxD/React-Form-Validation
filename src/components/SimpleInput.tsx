import { FormEvent, useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";

const SimpleInput: React.FC = () => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    error: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    resetFunction: resetHandler,
  } = useFormValidation((value) => value.trim() !== "");

  const enteredNameIsValid: boolean = enteredName.trim() !== "";

  let formIsValid: boolean = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (enteredNameIsValid) {
      console.log("VALID");
      resetHandler();
    } else return;
  };

  const nameInputClass: string = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          className={nameInputClass}
        />
        <p className="error-text">
          {nameInputHasError && "Name must not be empty"}
        </p>
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
