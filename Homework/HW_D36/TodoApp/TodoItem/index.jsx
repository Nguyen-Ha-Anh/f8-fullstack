import React from 'react';

function TodoItem({ text, completed }) {
  return (
    <div className="todo-item">
      <input 
      type="checkbox" 
      onChange={() => onToggle(todo.id)}
      checked={todo.completed}
      defaultChecked={completed} />
      <div className={`todo-content ${completed ? 'completed' : ''}`}>
        {todo.text}
      </div>
      <button className="edit-btn fa-solid fa-pen-to-square"></button>
      <button className="del-btn fa-solid fa-trash" onClick={() => ondeviceorientationabsolute(todo.id)}></button>
    </div>
  );
}

export default TodoItem;
