import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

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

    const adicionarTask = async() => {
        try {
            const response = await axios.post('http://localhost:3001/tasks');
            setTasks([...tasks, response.data]);
            console.log(response.data);
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
            const reponse = await axios.put(`http://localhost:3001/tasks/${id}`, updateTask);
            setTasks(tasks.map(task => (task.id === id ? reponse.data : task)))
        } catch (error) {
          console.error('Erro ao atualizar a task', error);
            
        };
    }

    return (
        <div>
            <h1>Gerenciador de Tarefas</h1>
            <TaskForm addTask={adicionarTask}/>
            <ul>
                {
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} deleteTask={apagarTask} updateTask={atualizarTask} />
                ))}
            </ul>
        </div>
    );

};

export default TaskList;