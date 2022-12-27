import { useState } from "react";
import { useValidation } from "./useValidation";

export function useInput(initialValue, validation) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(initialValue);
  const valid = useValidation(value, validation);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setDirty(true);
  };
  return { value, onChange, setValue, onBlur, isDirty, setDirty, ...valid };
}
