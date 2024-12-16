function soma(...argumentos) {
    let total = 0;
    for (let i = 0; i < argumentos.length; i++) {
        total += argumentos[i];
    }
    return total;
}

console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1, 2, 3));

let ola = () => {
    console.log('Hello World');
}

ola();

let age = 19;
let isValid = (age > 18) ? true : false;
console.log(isValid);
