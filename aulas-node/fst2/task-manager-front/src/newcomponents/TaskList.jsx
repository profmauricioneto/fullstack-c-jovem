import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UnsortList = styled.ul`
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
    font-size: 1.2em;
    text-transform: uppercase;
`;

const Description = styled.p`
    margin: 10px 0;
    text-transform: capitalize;
    font-size: 1.1em;
`;

const Status = styled.p`
    margin: 10px 0;
    font-weight: bold;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    width: 100px;
    margin: 0 10px;

    &:hover {
        background-color: #555;
    }
`;

const TaskList = ({ userId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        carregarTasks();
    }, []);

    const carregarTasks = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/user/${userId}/tasks`);
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao carregar os dados', error);
        }
    };

    const apagarTask = async(id) => {
        try {
            await axios.delete(`http://localhost:3000/user/${userId}/tasks/${id}`);
            setTasks(tasks.filter((task)=> task.id !== id));
        } catch (error) {
            console.error('Erro ao apagar o dado', error);
        }
    };

    return(
        <UnsortList>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <Title>{task.title}</Title>
                    <Description>{task.description}</Description>
                    <Status>{task.status}</Status>
                    <Button onClick={()=> apagarTask(task.id)}>Delete</Button>
                </ListItem>
            ))}
        </UnsortList>
    );
};

export default TaskList;