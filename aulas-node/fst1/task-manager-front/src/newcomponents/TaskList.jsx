/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f9f9f9;
`;


const Title = styled.h3`
    margin: 0;
    font-size: 1.1em;
`;

const Description = styled.p`
    margin: 5px 0;
`;

const Status = styled.p`
    margin: 5px 0;
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

const TaskList = ({ userId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []); 

    const fetchTasks = async() => {
        try {
            const response = await axios.get(`http://localhost:3001/user/${userId}`);            
            setTasks(response.data.tasks);
        } catch(error) {
            console.error('Error to load the tasks', error);
        }
    };

    const deleteTask = async(id) => {
        try {
            await axios.delete(`http://localhost:3001/user/${userId}/tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Erro ao apagar a task', error);
        }
    };

    return (
        <div>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <Title>{task.title}</Title>
                        <Description>{task.description}</Description>
                        <Status>{task.status}</Status>
                        <Button onClick={()=>deleteTask(task.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );

};

export default TaskList;