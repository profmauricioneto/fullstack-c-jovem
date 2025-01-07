let idades = [22, 44, 65, 12, 18, 15, 21];

function verificarAdulto(idade) {
    return idade >= 18;
}
let adultos = idades.filter(verificarAdulto)
console.log(adultos);

let adultos2 = idades.filter((idade) => idade >= 18);
console.log(adultos2);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiplicadosPorCinco = numeros.map((item) => item*5);
console.log(multiplicadosPorCinco);


let somatorio = numeros.reduce((acc, atual) => acc + atual, 0);
console.log(somatorio);

function verificarPar(item) {
    return item % 2 === 0;
}

let somaDosPares = numeros.filter(verificarPar).reduce((acc, atual) => acc + atual, 0);
console.log(somaDosPares);
