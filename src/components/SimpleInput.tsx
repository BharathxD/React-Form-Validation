import { FormEvent, useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";

const SimpleInput: React.FC = () => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    error: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    resetFunction: resetNameHandler,
  } = useFormValidation((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    error: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetFunction: resetEmailHandler,
  } = useFormValidation((value) => value.trim().includes("@"));

  let formIsValid: boolean = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (enteredNameValid && enteredEmailValid) {
      console.log("VALID");
      resetNameHandler();
      resetEmailHandler();
    } else return;
  };

  const nameInputClass: string =
    nameInputHasError && emailInputHasError
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
      <div>
        <input
          type="text"
          id="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          className={nameInputClass}
        />
        <p className="error-text">
          {emailInputHasError && "Email enter a valid email"}
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
