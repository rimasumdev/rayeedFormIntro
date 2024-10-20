import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value, onChange: (e) => setValue(e.target.value) };
};

export default useInputState;
