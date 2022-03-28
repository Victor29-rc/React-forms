import { useState } from "react";

const useSimpleInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputIsTouchedBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  let inputHasError = !validate(inputValue) && inputIsTouched;
  let inputValueIsValid = validate(inputValue);

  console.log(inputValueIsValid);

  return {
    inputValue,
    inputHasError,
    inputValueIsValid,
    inputValueChangeHandler,
    inputIsTouchedBlurHandler,
    reset,
  };
};

export default useSimpleInput;
