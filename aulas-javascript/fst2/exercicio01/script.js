function adicionarIngrediente() {
    let ingrediente = prompt("Digite um ingrediente: ");
    console.log(ingrediente);

    const lista = document.getElementById('ingredientes');
    console.log(lista);

    let listaItem = document.createElement('li');
    listaItem.textContent = ingrediente;
    console.log(listaItem);

    lista.appendChild(listaItem);
}