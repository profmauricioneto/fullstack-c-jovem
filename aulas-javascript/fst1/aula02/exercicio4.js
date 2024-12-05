let valorTabuada = parseInt(prompt("Numero da Tabuado: "));

for(let i = 1; i <= 10; i++) {
    let resultado = i * valorTabuada;
    console.log(i + " * " + valorTabuada + " = " + resultado);
}

let j = 1;
while(j <= 10) {
    let resultado = j * valorTabuada;
    console.log(j + " * " + valorTabuada + " = " + resultado);
    j++;
}

let k = 1;
do {
    let resultado = k * valorTabuada;
    console.log(k + " * " + valorTabuada + " = " + resultado);
    k++;
} while(k <= 10)