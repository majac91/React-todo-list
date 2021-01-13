import React from "react";

export default function ListFilter({
  todos,
  setTodos,
  setStatus,
  setFilteredTodos,
}) {
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleClear = () => {
    let filtered;
    //🐛 doesn't clear completed while any other status is set
    //🐛  deletes only the last completed item
    setFilteredTodos(
      todos.filter((todo) => {
        if (todo.completed === true) {
          //   todo.completed = ""; //clear the completed state
          filtered = setTodos(todos.filter((item) => item !== todo)); //delete the completed todo
          console.log(filtered);
          return filtered;
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo__item todo__filter list-field">
      <div className="items-left">
        {`${
          todos.filter((todo) => todo.completed === false).length
        } items left`}
      </div>
      <div className="items-status">
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
  );
}
