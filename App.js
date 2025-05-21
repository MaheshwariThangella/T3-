import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (task) => {
    const res = await axios.post('http://localhost:5000/api/todos', { task });
    setTodos([...todos, res.data]);
  };

  const toggleComplete = async (id, completed) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
