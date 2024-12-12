// let paragrafos = document.getElementsByTagName("p");
// console.log(paragrafos);

// for (let i = 0; i < paragrafos.length; i++) {
//     paragrafos[i].style.backgroundColor = "cyan";
//     console.log(paragrafos[i].textContent);
// }

// let squares = document.getElementsByClassName("exemplo");
let squares = document.querySelectorAll(".exemplo");
console.log(squares);

for (let i = 0; i < squares.length; i++) {
    if (i % 2 === 0) {
        squares[i].style.backgroundColor = "blue";
    } else {
        console.log("valor impar");
        squares[i].style.display = "none";
    }
}

for (let i = 0; i < squares.length; i++) {
    if (squares[i].style.display == "none") {
        console.log("encontrou");
    }
}

// PESQUISAR DEPOIS
// let displayNone = document.querySelectorAll('.exemplo');
// console.log(displayNone);
// displayNone[0].style.display = "block";

let firstSquare = document.querySelector(".exemplo");
console.log(firstSquare);

let header = document.querySelector("#cabecalho");
console.log(header);
