import { FormEvent, useRef, useState } from "react";

const SimpleInput: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [Name, setName] = useState<{ value: string }>({ value: "" });
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const inputChangeHandler = (event: FormEvent) => {
    setName({ value: (event.target as HTMLInputElement).value });
  };
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    const enteredValue = nameInputRef.current!.value;
    if (Name.value?.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true)
    console.log(enteredValue);
    // nameInputRef.current!.value = "";
    setName({ value: "" });
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          placeholder="Your Name"
          onChange={inputChangeHandler}
          value={Name.value}
          className={nameInputClass}
        />
        <p className="error-text">{nameInputIsInvalid && "Name must not be empty"}</p>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
