import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('PENDING');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask({title, description, status});
        setTitle('');
        setDescription('');
        setStatus('PENDING');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Título da Tarefa'
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                />
            
            <input 
                type="text" 
                placeholder='Descrição da tarefa'
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                />
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="PENDING">Pendente</option>
                <option value="INPROGRESS">Em Andamento</option>
                <option value="COMPLETED">Concluído</option>
            </select>
            <button type='submit'>Adicionar</button>
        </form>
    );
};

export default TaskForm;