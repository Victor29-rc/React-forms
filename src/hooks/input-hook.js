import { useState } from "react";

const useInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  let hasError = !validate(inputValue) && inputIsTouched;
  let valueIsValid = validate(inputValue);

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    hasError,
    valueHandler: inputValueChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
    valueIsValid,
  };
};

export default useInput;
