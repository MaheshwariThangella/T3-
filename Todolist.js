import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(todo._id, todo.completed)}
          >
            {todo.task}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
