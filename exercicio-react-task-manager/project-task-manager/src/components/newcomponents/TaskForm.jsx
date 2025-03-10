import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskForm = ({ userId, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('PENDING');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/users/${userId}/tasks`, { title, description, status });
      onTaskCreated(response.data);
      setTitle('');
      setDescription('');
      setStatus('PENDING');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">
        Título:
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Label>
      <Label htmlFor="description">
        Descrição:
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Label>
      <Label htmlFor="status">
        Status:
        <Select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="PENDING">Pendente</option>
          <option value="IN_PROGRESS">Em Progresso</option>
          <option value="COMPLETED">Concluída</option>
        </Select>
      </Label>
      <Button type="submit">Adicionar Tarefa</Button>
    </Form>
  );
};

export default TaskForm;