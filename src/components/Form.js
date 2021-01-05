/* eslint-disable default-case */
import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {
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

  //   TODO install id generating package

  return (
    <form className="form container" onSubmit={handleSubmit}>
      <input
        placeholder="Add a task"
        onChange={handleInputText}
        value={inputText}
        type="text"
        className="form__input list-field"
      />
    </form>
  );
};

export default Form;
