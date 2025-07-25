import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css'

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      }
      setTodos([newTodo, ...todos])
    }

    const toggleTodo = (id) => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
      )
    }

    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <div className="container">
      <h1>Get Things Done!</h1>
      <form className="todo-form">
        <TodoForm onAdd={addTodo} />
        <TodoList 
        todos={todos} 
        onToggle={toggleTodo}
        onDelete={deleteTodo} />
      </form>
    </div>
  );
}

export default TodoApp;
