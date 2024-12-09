function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    const novoItem = document.createElement('li');
  
    // Cria um botão para remover a tarefa
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function() {
      novoItem.remove();
    };
  
    // Adiciona o texto da tarefa e o botão ao elemento li
    novoItem.appendChild(document.createTextNode(novaTarefa));
    novoItem.appendChild(botaoRemover);
  
    // Adiciona o novo item à lista
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.appendChild(novoItem);
  
    // Limpa o campo de input
    document.getElementById('novaTarefa').value = '';
  }