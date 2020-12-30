/* eslint-disable default-case */
import React from "react";

const Form = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  status,
  setStatus,
  filteredTodos,
  setFilteredTodos,
}) => {
  const handleInputText = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  //   TODO install id generating package

  return (
    <form className="form container" onSubmit={handleSubmit}>
      <div className="input">
        <input
          onChange={handleInputText}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
