import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setStatus, setFilteredTodos }) => {
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClear = () =>
    //BUG- clearing while uncompleted is selected
    setFilteredTodos(
      todos.filter((todo) => {
        if (todo.completed === true) {
          todo.completed = ""; //clear the completed state
          setTodos(todos.filter((item) => item !== todo)); //delete the completed todo
          return todo;
        }
        return todo;
      })
    );

  if (todos.length === 0) {
    //BUG - doesn't work when
    return (
      <ul className="todo__list container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          ></Todo>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="todo__list container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          ></Todo>
        ))}
        <div className="todo__item todo__filter list-field">
          <div className="items-left">
            {`${
              todos.filter((todo) => todo.completed === false).length
            } items left`}
          </div>
          <div>
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

          <button className="filter-btn" onClick={handleClear}>
            Clear completed
          </button>
        </div>
      </ul>
    );
  }
};

export default TodoList;
