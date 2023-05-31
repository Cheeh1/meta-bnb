import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [toggleState, setToggleState] = useState(initialState);

  const toggle = () => {
    setToggleState(prevState => !prevState);
  };

  return [toggleState, toggle];
};
