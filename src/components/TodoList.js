import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, status, setStatus, setFilteredTodos }) => {
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClear = () =>
    //BUG- clearing while uncompleted is selected
    setFilteredTodos(
      todos.filter((todo) => {
        if (todo.completed === true) {
          todo.completed = "";
          setTodos(todos.filter((item) => item !== todo)); //delete the completed todo
          return todo; //clear the completed state
        }
        return todo;
      })
    );

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
            status={status}
          ></Todo>
        ))}

        <div className="todo filter-todo">
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
