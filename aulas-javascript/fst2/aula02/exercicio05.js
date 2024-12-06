let valor = parseInt(prompt("Digite o numero para a tabuada: "));

console.log(" -------- com for ------------- ");
for(let i = 1; i <= 10; i++) {
    console.log(valor + " * " + i + " = " + (valor * i));
}

console.log(" -------- com while ------------- ");

let j = 1;
while(j <= 10) {
    console.log(valor + " * " + j + " = " + (valor * j));
    j++;
}

console.log(" -------- com do-while ------------- ");
let k = 1;
do {
    console.log(valor + " * " + k + " = " + (valor * k));
    k++;
} while(k <= 10);