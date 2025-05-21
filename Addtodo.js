import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={e => setTask(e.target.value)} placeholder="New task" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
