import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 20px;
    background-color: #bbb;
    list-style-type: none;

    &:hover {
        background-color: #a1a1a1;
    }
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
    width: 100px;
    margin: 0 10px;

    &:hover {
        background-color: #555;
    }
`;


const TaskItem = ({task, updateTask, deleteTask}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const [editing, setEditing] = useState(false);

    const handleUpdate = () => {
        updateTask(task.id, {title, description, status});
        setEditing(false);
    };

    return(
        <ListItem>
            {
                editing ? (
                    <div>
                        <Input 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        <Input 
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="PENDING">Pendente</option>
                            <option value="INPROGRESS">Em Andamento</option>
                            <option value="COMPLETED">Concluído</option>
                        </Select>
                        <Button onClick={handleUpdate}>Salvar</Button>
                    </div>
                ) : (
                    <div>
                        <Title>{task.title}</Title>
                        <Description>{task.description}</Description>
                        <Status>{task.status}</Status>
                        <Button onClick={() => setEditing(true)}>Edição</Button>
                        <Button onClick={() => deleteTask(task.id)}>Excluir</Button>
                    </div>
                )}
        </ListItem>
    );
};

export default TaskItem;