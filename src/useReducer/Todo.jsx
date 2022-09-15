import React from "react";
import { ACTIONS } from "../App";

const Todo = ({ todo, dispatch }) => {
  const toggleTodo = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  };
  const deleteTodo = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  };

  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={toggleTodo}>Toggle</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;
