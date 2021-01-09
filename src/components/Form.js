import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {
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
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        value={inputText}
        type="text"
        className="form__input list-field"
      />
    </form>
  );
};

export default Form;
