function adicionarAoCarrinho() {
    let item = prompt('Digite o nome do item que deseja adicionar ao carrinho:');
    const carrinho = document.getElementById('carrinho');
  
    const novoItem = document.createElement('p');
    novoItem.textContent = item;
  
    carrinho.appendChild(novoItem);
  }