// src/EditTask.js

import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditTask = ({ tasks, editTask }) => {
  const { id } = useParams();
  const history = useHistory();
  const task = tasks.find(task => task.id === id);

  const [text, setText] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);
  const [deadline, setDeadline] = useState(new Date(task.deadline));

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, { text, priority, deadline });
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Task name" />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
        <button type="submit">Save Task</button>
      </form>
    </div>
  );
};

export default EditTask;
