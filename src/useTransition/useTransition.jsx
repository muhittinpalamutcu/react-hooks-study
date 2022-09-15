import React, { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 2000;

  function handleChange(e) {
    setInput(e.target.value); // by default this state has high priority
    startTransition(() => {
      //with putting all this block inside of startTransition we're saying to react that this block has low priority
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default App;
