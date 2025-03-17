import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const UserPage = ({ user, onLogout }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTask = async() => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${user.id}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error('error to load tasks', error);
            }
        };
        loadTask();
    }, [user.id]);

    const handleCreateTask = (newTask) => {
        setTasks((previousTasks)  => [...previousTasks, newTask]);
    };


    return (
        <div>
           <h1>Welcome, {user.name}</h1>
           <button onClick={onLogout}>Logout</button>
           <TaskForm userId={user.id} onTaskCreated={handleCreateTask}/>
           <TaskList userId={user.id} tasks={tasks} />
        </div>
    );
};

export default UserPage;