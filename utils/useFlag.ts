import {useState} from "react";

export const useFlag = (initialValue: boolean = false) => {
  const [flag, setFlag] = useState(initialValue);
  const setTrue = () => setFlag(true);
  const setFalse = () => setFlag(false);
  const toggle = () => setFlag(!flag);

  return [flag, setTrue, setFalse, toggle];
}