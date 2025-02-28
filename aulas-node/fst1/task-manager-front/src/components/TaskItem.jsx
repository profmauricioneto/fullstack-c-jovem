import React, { useState } from 'react';

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
        <li>
            {
                isEditing ? (
                    <div>
                        <input 
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}    
                        />
                        <select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value="PEDING">Pendente</option>
                            <option value="INPROGRESS">Em Andamento</option>
                            <option value="COMPLETED">Concluído</option>
                        </select>
                        <button onClick={handleUpdate}>Atualizar</button>
                    </div>
                ) : (
                    <div>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{task.status}</p>
                        <button onClick={()=>setEditing(true)}>Edição</button>
                        <button onClick={()=>deleteTask(task.id)}>Deletar</button>
                    </div>
                )}
        </li>
    );
};


export default TaskItem;