let divsQuadradas = document.querySelectorAll('.quadrado');

for (let i = 0; i < divsQuadradas.length; i++) {
    divsQuadradas[i].innerHTML = `div indice ${i}`;
}

let divMeio = document.querySelector('#meio');
divMeio.style.backgroundColor = 'orange';

let bodyElement = document.querySelector('body');
bodyElement.removeChild(divMeio);

let novaDiv = document.createElement('div');
novaDiv.classList.add('quadrado');

bodyElement.appendChild(novaDiv);

let novaDivOrange = document.createElement('div');
novaDivOrange.classList.add('quadrado');
novaDivOrange.style.backgroundColor = 'orange';

bodyElement.replaceChild(novaDivOrange, novaDiv);