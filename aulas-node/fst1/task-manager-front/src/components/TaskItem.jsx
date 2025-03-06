import React, { useState } from 'react';
import styled from 'styled-components';


const ListItem = styled.li`
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    background-color: #ddd;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.2em;
`;

const Description = styled.p`
    margin: 5px 0;
`;

const Status = styled.p`
    margin: 5px 0;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: white;
  cursor: pointer;
  width: 100px;

  &:hover{
    background-color: #bbb;
  }
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

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    const handleUpdate = () => {
        updateTask(task.id, {title, description, status});
        setEditing(false);
    };

    return (
        <ListItem>
            {
                isEditing ? (
                    <div>
                        <Input 
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                        />
                        <Input 
                            type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}    
                        />
                        <Select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="PEDING">Pendente</option>
                            <option value="INPROGRESS">Em Andamento</option>
                            <option value="COMPLETED">Concluído</option>
                        </Select>
                        <Button onClick={handleUpdate}>Atualizar</Button>
                    </div>
                ) : (
                    <div>
                        <Title>{task.title}</Title>
                        <Description>{task.description}</Description>
                        <Status>{task.status}</Status>
                        <Button onClick={()=>setEditing(true)}>Edição</Button>
                        <Button onClick={()=>deleteTask(task.id)}>Deletar</Button>
                    </div>
                )}
        </ListItem>
    );
};


export default TaskItem;