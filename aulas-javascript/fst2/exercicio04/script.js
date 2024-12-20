let carrinho = [];

function adicionarAoCarrinho(id, descricao, preco) {
    // busca no carrinho se o elemento existe ou nao
    const existeNoCarrinho = carrinho.find((item) => item.id === id);

    // se existe adiciona +1 na quantidade, senao existe, adiciona-se o elemento ao carrinho
    if (existeNoCarrinho) {
        existeNoCarrinho.quantidade++;
    } else {
        carrinho.push({id, descricao, preco, quantidade: 1});
    }

    let corpoDoCarrinho = document.querySelector('#corpo-tabela');
    corpoDoCarrinho.innerHTML = '';

    carrinho.forEach((item) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${item.descricao}</td>
            <td>${item.quantidade}</td>
            <td>${item.preco * item.quantidade}</td>
        `;
        corpoDoCarrinho.appendChild(linha);
    });

    console.log(carrinho);
}