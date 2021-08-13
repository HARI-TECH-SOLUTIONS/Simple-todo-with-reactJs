import React from "react";

function Todo({ todos }) {
  return todos.map((todo) => (
    <div>
      <div>{todo.text}</div>
    </div>
  ));
}

export default Todo;
