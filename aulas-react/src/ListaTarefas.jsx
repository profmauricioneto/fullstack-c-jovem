import React, { useState, useEffect } from "react";

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]); 
  const [carregando, setCarregando] = useState(true); 
  const [contador, setContador] = useState(1); 

  // Simulação de busca de tarefas na "API"
  useEffect(() => {
    setTimeout(() => {
      const tarefasIniciais = [
        { id: 1, titulo: "Estudar React" },
        { id: 2, titulo: "Praticar JavaScript" },
        { id: 3, titulo: "Pratiar React" },
        { id: 4, titulo: "Praticar useEffect" },
      ];
      setTarefas(tarefasIniciais);
      setCarregando(false); // Finaliza o carregamento
    }, 2000); // Simula um delay de 2 segundos
  }, []);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = () => {
    const novaTarefa = { id: contador + 1, titulo: `Nova Tarefa ${contador}` };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>{tarefa.titulo}</li>
          ))}
        </ul>
      )}
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}

export default ListaDeTarefas;
