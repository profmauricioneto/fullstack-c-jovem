let carrinho = [];

function adicionarAoCarrinho(id, nome, preco) {
  // Verifica se o produto já está no carrinho
  const produtoExistente = carrinho.find(item => item.id === id);

  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    carrinho.push({ id, nome, preco, quantidade: 1 });
  }

  // Atualiza a tabela do carrinho
  const carrinhoCorpo = document.getElementById('carrinho-corpo');
  carrinhoCorpo.innerHTML = ''; // Limpa a tabela antes de preencher

  carrinho.forEach(item => {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.quantidade}</td>
      <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
    `;
    carrinhoCorpo.appendChild(novaLinha);
  });

  // Calcula e exibe o total
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total = carrinho[i].preco * carrinho[i].quantidade;
  }
  //const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}