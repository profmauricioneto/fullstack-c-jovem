import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
`;

const Title = styled.h1`
    text-align: center;
    margin: 25px auto;
`;

const Button = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }
`;

const UserPage = ({ user, onLogout }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async() => {
            try {
                const response = await axios.get(`http://localhost:3001/user/${user.id}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error('error to load tasks', error);
            }
        };
        loadTasks();
    }, [user.id]);

    const handleCreateTask = (newTask) => {
        setTasks((previousTasks)  => [...previousTasks, newTask]);
    };


    return (
        <Main>
            <Header>
                <Title>Welcome, {user.name}</Title>
                <Button onClick={onLogout}>Logout</Button>
            </Header>
           <TaskForm userId={user.id} onTaskCreated={handleCreateTask}/>
           <TaskList userId={user.id} tasks={tasks} />
        </Main>
    );
};

export default UserPage;