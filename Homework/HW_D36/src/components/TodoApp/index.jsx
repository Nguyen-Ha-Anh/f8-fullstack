import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = async () => {
        // try {
        //     const res = await axios.get('')
        // }

  return (
    <div className="container">
      <h1>Get Things Done!</h1>
      <form className="todo-form">
        <TodoForm />
        <TodoList />
      </form>
    </div>
  );
    }
}

export default TodoApp;
