import logo from './logo.svg';
import './App.css';


// src/App.js

// src/App.js

import React, { useState } from 'react';
import Task from './Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]);

  const addTask = () => {
    const text = prompt('Enter task:');
    if (text) {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Task Manager</h1>
      <button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
        Add Task
      </button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
      ))}
    </div>
  );
};

export default App;



