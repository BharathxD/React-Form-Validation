import { FormEvent, useEffect, useState } from "react";

const SimpleInput: React.FC = () => {
  const [enteredName, setName] = useState<{ value: string }>({ value: "" });
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.value.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const inputChangeHandler = (e: FormEvent) => {
    setName({ value: (e.target as HTMLInputElement).value });
  };

  const nameInputBlurHandler = (e: FormEvent) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (enteredNameIsValid) {
      console.log("VALID");
      setName({ value: "" });
    } else return;
    setEnteredNameIsTouched(false);
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          onChange={inputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName.value}
          className={nameInputClass}
        />
        <p className="error-text">
          {nameInputIsInvalid && "Name must not be empty"}
        </p>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
