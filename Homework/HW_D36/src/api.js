const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async () => {
  const res = await fetch(`${API_URL}?_limit=10`); 
  return res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return res.json();
};

export const updateTodo = async (id, updates) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  });
  const data = await res.json();
  return data;
};


export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
