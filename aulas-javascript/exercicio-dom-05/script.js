let tarefas = [];
const form = document.getElementById('form-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

form.addEventListener('submit', (event) => {
  // garante que o formulário não atualize
  event.preventDefault();
  
  // captura os elmentos do formulário
  const nomeTarefa = document.getElementById('nome-tarefa').value;
  const prioridade = document.getElementById('prioridade-valor').value;
  
  // cria um objeto de nova tarefa com os elementos do formulário e adiciona no array
  const novaTarefa = { nome: nomeTarefa, prioridade: prioridade};
  console.log(novaTarefa);

  tarefas.push(novaTarefa);

  // Ordenar as tarefas por prioridade (alta, média, baixa)
  tarefas.sort((a, b) => {
    const prioridades = { alta: 1, media: 2, baixa: 3 };
    return prioridades[a.prioridade] - prioridades[b.prioridade];
  });

  // Renderizar a lista de tarefas adicionando li com os elementos
  listaTarefas.innerHTML = '';
  tarefas.forEach((tarefa) => {
    const li = document.createElement('li');
    li.textContent = `${tarefa.nome} (${tarefa.prioridade})`;
    listaTarefas.appendChild(li);
  });
});