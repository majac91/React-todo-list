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

  return (
    <div className="todo__container container">
      <ul className="todo__list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          ></Todo>
        ))}

        <div className="todo__item filter-todo">
          <div className="items-left">
            {`${
              todos.filter((todo) => todo.completed === false).length
            } items left`}
          </div>
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
          <button onClick={handleClear}>Clear completed</button>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
