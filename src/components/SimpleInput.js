import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onBlurHandler = () => {
    setEnteredNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  const nameInputClass =
    !nameIsValid && enteredNameIsTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={inputChangeHandler}
          onBlur={onBlurHandler}
        />
        {!nameIsValid && enteredNameIsTouched && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
