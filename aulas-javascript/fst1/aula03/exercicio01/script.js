function adicionarAoCarrinho() {
    let item = prompt('Nome do Item a ser Adicionado no Carrinho: ');
    // let carrinho = document.getElementById('carrinho-compras');
    let elementos = document.getElementById('elementos-carrinho');

    // const novoItem = document.createElement('p');
    // novoItem.textContent = item;

    const novoItem = document.createElement('li');
    novoItem.textContent = item;

    elementos.appendChild(novoItem);
    // carrinho.appendChild(novoItem);
}