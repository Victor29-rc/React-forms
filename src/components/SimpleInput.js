import useInput from "../hooks/input-hook";

const SimpleInput = () => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: inputNameHasError,
    valueHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetInputName,
  } = useInput((name) => name !== "");

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: inputEmailHasError,
    valueHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetInputEmail,
  } = useInput((email) => email.includes("@") && email.trim().length > 6);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }

    resetInputName();
    resetInputEmail();
  };

  const nameInputClass = inputNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = inputEmailHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {inputNameHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {inputEmailHasError && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
