import React from "react";

const Todo = ({ text, todo, todos, status, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <li className={`todo todo-item ${todo.completed ? "completed" : ""}`}>
      {/* custom checkbox */}
      <label className="checkbox" htmlFor={text}>
        <input
          onClick={handleComplete}
          type="checkbox"
          className="complete-btn"
        ></input>{" "}
        <span className="checkbox__control">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </span>
      </label>
      {/* todo text */}
      {text}
      {/* delete btn */}
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
