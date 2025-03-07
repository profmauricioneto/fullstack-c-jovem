import React, { useState } from 'react';
import styled from 'styled-components';

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
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    width: 200px;
    align-self: center;

    &:hover {
        background-color: #bbb;
    }
`;

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('PENDING');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask({ title, description, status });
        setTitle('');
        setDescription('');
        setStatus('PENDING');
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