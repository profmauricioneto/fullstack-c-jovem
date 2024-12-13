function adicionarPedido() {
    const pedido = document.getElementById('item').value;
    let lista = document.querySelector('#carrinho');
    
    let novoPedido = document.createElement('li');
    novoPedido.textContent = pedido;
    novoPedido.classList.add('item-lista');

    // criando o botao de remover e gerar a acao
    let itemRemover = document.createElement('button');
    itemRemover.textContent = "Remover";
    itemRemover.classList.add('remover');
    novoPedido.appendChild(itemRemover);
    itemRemover.onclick = function() {
        novoPedido.remove();
    }

    // adiciono o novo item a lista e limpo o input
    lista.appendChild(novoPedido);
    document.querySelector('#item').value = '';
}