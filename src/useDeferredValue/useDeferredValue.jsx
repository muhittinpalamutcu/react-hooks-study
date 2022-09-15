import React, { useMemo, useState, useTransition } from "react";
import List from "./useDeferredValue/List";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}

export default App;
