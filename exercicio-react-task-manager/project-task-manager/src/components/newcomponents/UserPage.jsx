import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const UserPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${user.id}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user.id]);

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h1>Bem-vindo, {user.name}</h1>
      <button onClick={onLogout}>Logout</button>
      <TaskForm userId={user.id} onTaskCreated={handleTaskCreated} />
      <TaskList userId={user.id} tasks={tasks} />
    </div>
  );
};

export default UserPage;