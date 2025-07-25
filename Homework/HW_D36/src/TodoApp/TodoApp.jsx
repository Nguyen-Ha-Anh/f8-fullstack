import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { getTodos, createTodo, deleteTodo, updateTodo } from '../api';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const addTodo = async (text) => {
    const newTodo = { title: text, completed: false };
    const savedTodo = await createTodo(newTodo);
    setTodos([savedTodo, ...todos]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id);
    const updated = await updateTodo(id, { completed: !todo.completed });
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: updated.completed } : t))
    );
  };

  const deleteTodoItem = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Get Things Done!</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodoItem} />
    </div>
  );
}

export default TodoApp;
