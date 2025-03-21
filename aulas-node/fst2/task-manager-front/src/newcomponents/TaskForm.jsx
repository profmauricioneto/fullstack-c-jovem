import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 20%;

    &:hover {
        background-color: #092c63;
        transform: scale(1.05);
    }
`;

const TaskForm = ({ userId, onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('PENDING');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/user/${userId}/tasks`, {title, description, status});
            onTaskCreated(response.data);
            setTitle('');
            setDescription('');
            setStatus('PENDING');
        } catch (error) {
            console.error('Error to create task', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder='Título da Tarefa'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            
            <Input 
                type="text" 
                placeholder='Descrição da tarefa'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="PENDING">Pendente</option>
                <option value="INPROGRESS">Em Andamento</option>
                <option value="COMPLETED">Concluído</option>
            </Select>
            <Button type='submit'>Adicionar</Button>
        </Form>
    );
};

export default TaskForm;