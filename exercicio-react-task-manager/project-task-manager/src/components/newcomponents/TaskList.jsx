import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

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

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
          <Status>{task.status}</Status>
          <Button onClick={() => deleteTask(task.id)}>Deletar</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;