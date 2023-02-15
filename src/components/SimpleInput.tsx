import { FormEvent, useRef, useState } from "react";

const SimpleInput: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [Name, setName] = useState<string>();
  const inputChangeHandler = (event: FormEvent) => {
    console.log((event.target as HTMLInputElement).value);
  };
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredValue = nameInputRef.current!.value;
    console.log(enteredValue);
    // nameInputRef.current!.value = "";
    setName("");
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
          value={Name}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
