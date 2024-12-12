function adicionarPrato() {
    const novoPrato = document.getElementById("nomePrato").value;
    let novoLi = document.createElement("li");
    const listaPratos = document.querySelector("#listaPratos");

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = function () {
        novoLi.remove();
    }

    novoLi.textContent = novoPrato;
    novoLi.classList.add("prato");
    novoLi.appendChild(btnRemover);

    listaPratos.appendChild(novoLi);
    document.getElementById("nomePrato").value = '';
}