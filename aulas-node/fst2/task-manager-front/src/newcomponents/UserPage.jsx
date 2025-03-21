import React, { useEffect, useState } from "react";
import axios from 'axios';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import styled from "styled-components";

const GlobalDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const Element = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
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
        background-color: #092c63;
        transform: scale(1.05);
    }
`;

const UserPage = ({user, onLogout}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async() => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${user.id}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error('Error to fetching data from user', error);
            }
        }
        fetchTasks();
    }, [user.id]);

    const handleTaskCreated = (newTask) => {
        setTasks((previousTasks) => [...previousTasks, newTask]);
    }

    return (
        <GlobalDiv>
            <Element>
                <h1>Welcome! {user.name}</h1>
                <Button onClick={onLogout}>Logout</Button>
            </Element>
            <TaskForm userId={user.id} onTaskCreated={handleTaskCreated} />
            <TaskList userId={user.id} tasks={tasks}/>
        </GlobalDiv>
    );   
}

export default UserPage;