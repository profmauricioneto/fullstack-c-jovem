import React, { useState } from "react";
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  color: white;
  cursor: pointer;
  width: 200px;

  &:hover{
    background-color: #bbb;
  }
`;


const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PEDING");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("PEDING");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="PEDING">Pendente</option>
        <option value="INPROGRESS">Em Andamento</option>
        <option value="COMPLETED">Concluído</option>
      </Select>
      <Button type="submit">Adicionar Tarefa</Button>
    </Form>
  );
};

export default TaskForm;
