import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const renderCount = useRef(0);
  // equals to {current : 0}

  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "some value";
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <div>
        <input
          ref={inputRef}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <div>My surname is {surname}</div>
        <button onClick={focus}>Focus</button>
      </div>
    </>
  );
}

export default App;
