// src/Task.js

import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}</h3>
      <button onClick={() => onDelete(task.id)} className="delete-btn">X</button>
    </div>
  );
};

export default Task;