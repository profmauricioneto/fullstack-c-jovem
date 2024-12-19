let objeto = {};
console.log(objeto);

objeto.nome = "mauricio";
console.log(objeto);

objeto.idade = 33;
console.log(objeto);

objeto.notas = [1, 2, 3];
console.log(objeto);

for(let x in objeto) {
    console.log(x + '= ' + objeto[x]);
}

let myArray = [];
myArray[0] = "dog";
myArray[1] = "cat";
myArray[2] = "horse";
myArray.push("chicken");
console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for(let value of myArray) {
//     console.log(value);
// }

myArray.forEach((item)=> {
    let message = `The animal is a/an ${item.toUpperCase()}`
    console.log(message);
});