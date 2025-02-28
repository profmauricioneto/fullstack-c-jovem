import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        carregarTasks();
    }, []);

    const carregarTasks = async() => {
        try {
            const response = await axios.get('http://localhost:3000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao carregar os dados', error);
        }
    };

    const adicionarTask = async() => {
        try {
            const response = await axios.post('http://localhost:3000/tasks');
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Erro ao enviar os dados para o backend', error);
        }
    };

    const atualizarTask = async(id, updatedTask) => {
        try {
            const response = await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
            setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error('Erro ao atualizar o dado', error);
        }
    };

    const apagarTask = async(id) => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${id}`);
            setTasks(tasks.filter((task)=> task.id !== id));
        } catch (error) {
            console.error('Erro ao apagar o dado', error);
        }
    };

    return(
        <React.Fragment>
            <h2>Gerenciamento de Tarefas</h2>
            <TaskForm addTask={adicionarTask}/>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} updateTask={atualizarTask} deleteTask={apagarTask}/>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default TaskList;