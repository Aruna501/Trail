import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     try {
  //       const parsedTodos = JSON.parse(storedTodos);
  //               if (Array.isArray(parsedTodos)) {
  //         setTodos(parsedTodos);
  //       } else {
  //         console.error("Invalid data format in local storage: 'todos' is not an array");
  //       }
  //     } catch (error) {
  //       console.error("Error parsing data from local storage:", error);
  //     }
  //   }
  // }, []);


  // Update local storage whenever TODOs change
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      localStorage.setItem('todos', JSON.stringify([...todos, task]));
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;