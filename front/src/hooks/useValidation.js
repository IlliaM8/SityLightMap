import { useCallback, useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  // const [minlengthError, setMinlengthError] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [IsError, setError] = useState("");
  const [inputValid, setInputValid] = useState("");

  const setErrors = (error, marker, errorText) => {
    error(marker);
    setError(errorText);
  };

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        // case "minLength":
        //   value.length < validations[validation]
        //     ? setMinlengthError(true)
        //     : setMinlengthError(false);
        //   break;

        case "isEmpty":
          value
            ? setErrors(setEmpty, false, ``)
            : setErrors(setEmpty, true, `Поле не може бути пустим`);
          break;

        case "isEmail":
          const re = new RegExp(
            // eslint-disable-next-line no-control-regex
            "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
          );
          re.test(String(value).toLowerCase())
            ? setErrors(setEmailError, false, ``)
            : setErrors(setEmailError, true, `Не дійсна пошта`);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || emailError) {
      setInputValid(false);
    } else setInputValid(true);
  }, [isEmpty, emailError]);

  return { isEmpty, emailError, inputValid, IsError };
};
