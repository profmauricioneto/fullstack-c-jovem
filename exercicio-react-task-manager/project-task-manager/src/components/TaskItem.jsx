import { useState } from 'react';
import styled from 'styled-components';

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
`;

const Description = styled.p`
  margin: 5px 0;
`;

const Status = styled.p`
  margin: 5px 0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    updateTask(task.id, { title, description, status });
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
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
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </Select>
          <Button onClick={handleUpdate}>Save</Button>
        </div>
      ) : (
        <div>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
          <Status>{task.status}</Status>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => deleteTask(task.id)}>Delete</Button>
        </div>
      )}
    </ListItem>
  );
};

export default TaskItem;