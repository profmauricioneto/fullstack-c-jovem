import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="PEDING">Pendente</option>
        <option value="INPROGRESS">Em Andamento</option>
        <option value="COMPLETED">Concluído</option>
      </select>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
