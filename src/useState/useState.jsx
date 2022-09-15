import { useState } from "react";
function useState() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <>
      <button
        style={{
          width: "50px",
          height: "50px",
          fontSize: "3rem",
          textAlign: "center",
        }}
        onClick={decrementCount}
      >
        -
      </button>
      <span style={{ margin: "10px", fontSize: "2.5rem" }}>{count}</span>
      <span style={{ margin: "10px", fontSize: "2.5rem" }}>{theme}</span>
      <button
        style={{
          width: "50px",
          height: "50px",
          fontSize: "3rem",
          textAlign: "center",
        }}
        onClick={incrementCount}
      >
        +
      </button>
    </>
  );
}

export default useState;
