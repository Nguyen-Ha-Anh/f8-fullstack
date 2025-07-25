import React, { useState, useRef } from 'react';

function TodoForm({onAdd}) {
  const [text, setText] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === '') return 
    onAdd(text)
    setText('')
      inputRef.current.focus()
  }

  return (
    <div className="add-todo">
      <form className='todo-form' onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="add-btn" id="add-todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
