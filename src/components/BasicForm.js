import useSimpleInput from "../hooks/sinput-hook";

const BasicForm = (props) => {
  const {
    inputValue: firstName,
    inputHasError: firstNameInputHasError,
    inputValueIsValid: firstNameIsValid,
    inputValueChangeHandler: firstNameChangeHandler,
    inputIsTouchedBlurHandler: fnIsTouchedBlurHandler,
    reset,
  } = useSimpleInput((name) => name.length >= 6);

  const submitHandler = (event) => {
    event.preventDefault();

    reset();
  };

  let formIsValid = firstNameIsValid;

  const firstNameInputClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={fnIsTouchedBlurHandler}
            value={firstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">First Name is required</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
