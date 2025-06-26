import React from 'react';

function TodoForm() {
  return (
    <div className="add-todo">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="add-btn" id="add-todo-btn">
        Add Task
      </button>
    </div>
  );
}

export default TodoForm;
