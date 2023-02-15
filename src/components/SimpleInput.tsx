import { FormEvent, useRef, useState } from "react";

const SimpleInput: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [Name, setName] = useState<{ value: string }>({ value: "" });
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)

  const inputChangeHandler = (event: FormEvent) => {
    setName({ value: (event.target as HTMLInputElement).value });
  };
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
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
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          placeholder="Your Name"
          onChange={inputChangeHandler}
          value={Name.value}
        />
        <p className="error-text">{!enteredNameIsValid && "Name must not be empty"}</p>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
