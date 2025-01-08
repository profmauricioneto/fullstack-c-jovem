let idades = [23, 45, 12, 3, 56, 39, 18, 16, 21];

let adultos = idades.filter((item) => {
    return item >= 18;
});

console.log(idades);
console.log(adultos);


let valoresDuplicados = idades.map((item) => item * 2);
console.log(valoresDuplicados );

let valores = [1, 2, 3, 4, 5];
let produtorio = valores.reduce((prod, current) => prod * current, 1)
console.log(produtorio);


let resultado = idades.filter((item)=> item % 2 !== 0).reduce((somario, atual) => somario + atual);
console.log(resultado);