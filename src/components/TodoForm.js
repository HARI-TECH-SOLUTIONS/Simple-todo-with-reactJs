import React, { useState } from "react";

function TodoForm(props) {
  const initialValue = "Add Task";
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={initialValue}
        value={input}
        className="todo-input"
        onChange={handleChange}
      />
      <button className="toto-button>" type="submit">
        Add todo
      </button>
      <button className="toto-button>" type="reset">
        Remove todo
      </button>
    </form>
  );
}

export default TodoForm;
