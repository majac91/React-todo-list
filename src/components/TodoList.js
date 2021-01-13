import React from "react";
import Todo from "./Todo.js";
import ListFilter from "./ListFilter.js";

const TodoList = ({
  todos,
  setTodos,
  setStatus,
  setFilteredTodos,
  listIsRendered,
  setlistIsRendered,
}) => {
  if (todos.length > 0) {
    setlistIsRendered(true);
  }

  if (!listIsRendered) {
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
        <ListFilter
          todos={todos}
          setStatus={setStatus}
          setFilteredTodos={setFilteredTodos}
          setTodos={setTodos}
        />
      </ul>
    );
  }
};

export default TodoList;
