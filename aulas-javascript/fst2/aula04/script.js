// let divs = document.getElementsByTagName("div");
// console.log(divs);

let divs = document.getElementsByClassName("quadrado");
console.log(divs)

for(let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "lightblue";
    if (i % 2 === 0) {
        divs[i].style.backgroundColor = "orange";
        // divs[i].style.display = "none";
    }
}

let cabecalho = document.querySelector("#cabecalho");
console.log(cabecalho);

cabecalho.style.backgroundColor = "lightblue";
cabecalho.style.padding = "30px";

let quadrados = document.querySelectorAll(".quadrado");
console.log(quadrados);