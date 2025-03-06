import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        carregarTasks();
    }, []); 

    const carregarTasks = async() => {
        try {
            const response = await axios.get('http://localhost:3001/tasks');
            setTasks(response.data);
        } catch(error) {
            console.error('Erro ao carregar as tasks', error);
        }
    };

    const adicionarTask = async(newTask) => {
        try {
            const response = await axios.post('http://localhost:3001/tasks', newTask);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Erro ao adicionar a task', error);
        }
    };

    const apagarTask = async(id) => {
        try {
            await axios.delete(`http://localhost:3001/tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Erro ao apagar a task', error);
        }
    };

    const atualizarTask = async(id, updateTask) => {
        try {
            const response = await axios.put(`http://localhost:3001/tasks/${id}`, updateTask);
            setTasks(tasks.map(task => (task.id === id ? response.data : task)))
        } catch (error) {
          console.error('Erro ao atualizar a task', error);
            
        };
    }

    return (
        <div>
            <HeaderComponent />
            <TaskForm addTask={adicionarTask}/>
            <List>
                {
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} deleteTask={apagarTask} updateTask={atualizarTask} />
                ))}
            </List>
            <FooterComponent />
        </div>
    );

};

export default TaskList;