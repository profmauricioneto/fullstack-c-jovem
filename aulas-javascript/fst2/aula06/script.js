let somarValores = function(a, b) {
    return a + b;
}

console.log(somarValores(3, 4));

function somar(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(somar(1));
console.log(somar(1, 2));
console.log(somar(1, 2, 3));

let hello = () => {
    console.log('Hello World');
}
hello();

let humano = {};
console.log(humano);

humano.nome = "Mauricio";
console.log(humano);

humano.idade = 34;
console.log(humano);

humano.notas = [1, 2, 3];
console.log(humano);

for (let attr in humano) {
    console.log(`${attr} = ${humano[attr]}`);
}

let myArray = [];
myArray[0] = "dog";
myArray[1] = "cat";
myArray[2] = "horse";
myArray.push("rhino");
console.log(myArray.length);

for(let item of myArray) {
    console.log(item);
}

myArray.forEach((item) => {
    let message = `Hello, I am ${item}`;
    console.log(message);
});

