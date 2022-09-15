import React from "react";
import { useNumber } from "./NumberContext";

const FunctionNumberContextComponent = () => {
  const { exNumber, incrementNumber } = useNumber();
  return (
    <>
      <div>{exNumber}</div>
      <button onClick={incrementNumber}>incrementNumber</button>
    </>
  );
};

export default FunctionNumberContextComponent;
