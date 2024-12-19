let carrinho = [];

function adicionarProduto(id, nome, preco) {
    // verifica se o produto ja existe no carrinho
    const produtoExistente = carrinho.find((item) => item.id === id);

    // caso exista, some mais um a quantidade, caso nao, adicione o produto no carrinho
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push({id, nome, preco, quantidade: 1})
    }

    let tabelaCorpo = document.querySelector('#corpo-carrinho');
    tabelaCorpo.innerHTML = '';

    carrinho.forEach((item) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `<td>${item.nome}</td>
        <td>${item.quantidade}</td>
        <td>${item.preco * item.quantidade}</td>`;
        tabelaCorpo.appendChild(linha);
    });

}