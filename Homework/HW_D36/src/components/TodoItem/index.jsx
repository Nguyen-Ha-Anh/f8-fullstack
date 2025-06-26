import React from 'react';

function TodoItem({ text, completed }) {
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={completed} />
      <div className={`todo-content ${completed ? 'completed' : ''}`}>
        {text}
      </div>
      <button className="edit-btn fa-solid fa-pen-to-square"></button>
      <button className="del-btn fa-solid fa-trash"></button>
    </div>
  );
}

export default TodoItem;
