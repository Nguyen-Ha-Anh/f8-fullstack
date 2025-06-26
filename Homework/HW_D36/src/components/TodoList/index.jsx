import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <div className="todo-list">
      <TodoItem text="Example Task" completed />
      <TodoItem text="Second Task" />
    </div>
  );
}

export default TodoList;
