import { useState } from "react";

export const useInput = (defaultvalue = "") => {
  const [value, setValue] = useState(defaultvalue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
  };

  return {
    inputProps: { value, onChange },
    clearInput,
    setValue,
  };
};
