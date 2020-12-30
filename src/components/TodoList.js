import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setStatus }) => {
  const handleStatus = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <div className="todo-container container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          ></Todo>
        ))}
        <div className="todo filter-todo">
          <button
            className="filter-btn"
            onClick={handleStatus}
            type="button"
            value="all"
          >
            All
          </button>
          <button
            className="filter-btn"
            onClick={handleStatus}
            type="button"
            value="completed"
          >
            Completed
          </button>
          <button
            className="filter-btn"
            onClick={handleStatus}
            type="button"
            value="uncompleted"
          >
            Uncompleted
          </button>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
