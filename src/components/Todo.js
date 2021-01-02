import React from "react";
import Checkbox from "./Checkbox";

const Todo = (props) => {
  const { text, todo, todos, setTodos } = props;
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <li className={`todo__item ${todo.completed ? "completed" : ""}`}>
      <Checkbox todo={todo} text={text} todos={todos} setTodos={setTodos} />
      {text}
      <button onClick={handleDelete} className="delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>{" "}
      </button>
    </li>
  );
};

export default Todo;
