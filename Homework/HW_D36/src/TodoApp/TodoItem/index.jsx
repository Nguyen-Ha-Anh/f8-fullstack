import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input 
      type="checkbox" 
      onChange={() => onToggle(todo.id)}
      checked={todo.completed}
      />
      <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
        {todo.title}
      </div>
      <button className="edit-btn fa-solid fa-pen-to-square"></button>
      <button className="del-btn fa-solid fa-trash" onClick={() => onDelete(todo.id)}></button>
    </div>
  );
}

export default TodoItem;
