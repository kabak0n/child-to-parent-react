import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [value, setValue] = useState("Placeholder");
  const getChildValue = (e) => {
    console.log("here", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{value}</h1>
      <Child getChildValue={getChildValue} />
    </>
  );
};
