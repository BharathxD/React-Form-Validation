import { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";

const BasicForm: React.FC = () => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    error: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetFunction: resetFirstNameInput,
  } = useFormValidation((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    error: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetFunction: resetLastNameInput,
  } = useFormValidation((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    error: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetFunction: resetEmailInput,
  } = useFormValidation((value) => value.trim().includes("@"));

  let formIsValid: boolean = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHander = (e: React.FormEvent) => {
    e.preventDefault();
    if (formIsValid) {
      console.log("VALID");
    }
  }

  return (
    <form>
      <div className="control-group">
        <div>
          <input
            type="text"
            id="name"
            placeholder="First Name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          <p className="error-text">{!firstNameIsValid && firstNameHasError && "First Name must not be empty"}</p> 
        </div>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          <p className="error-text">{!lastNameIsValid && lastNameHasError && "Last Name must not be empty"}</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        <p className="error-text">{!emailIsValid && emailHasError && "Enter a valid email"}</p> 
      </div>
      <div>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
