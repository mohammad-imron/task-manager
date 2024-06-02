import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <Link to={`/edit/${task.id}`}>{task.text}</Link>
            </li>
          ))}
        </ul>
        <Link to="/add">Add Task</Link>
      </div>
    );
  };
  

export default TaskList;
