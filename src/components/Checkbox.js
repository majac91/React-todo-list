import React from "react";

function Checkbox({ todo, text, todos, setTodos }) {
  const handleComplete = () => {
    if (!todos) {
      return;
    }
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
    <label className="checkbox">
      <span className="checkbox__container">
        <input
          onChange={handleComplete}
          type="checkbox"
          className="checkbox__input"
          name="checkbox"
        ></input>
        <span className="checkbox__control">
          <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
          </svg>
        </span>
      </span>
      <span className="checkbox__label ">{text}</span>
    </label>
  );
}

export default Checkbox;
