// window.alert("Ola Mundo vindo do JavaScript.");

var a = 10;
console.log(typeof a);
console.log(typeof 20.99);
var b = true;
console.log(typeof b);
console.log(typeof "mauricio");
var c;
console.log(typeof c);
b = 'ola'
console.log(typeof b);
console.log(typeof []);

let x = 10;
{
   // escopo local
   let nome = "mauricio";
   nome = "joao"
   console.log(nome);
   
}

const PI = 3.1415;
console.log(PI);

// console.log(nome);

for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("i = " + i);

a += 1; // a = a + 1
a *= 1; // a = a * 1
// ...
a++ // a = a + 1
a-- // a = a - 1

// if aninhado
if (condicao1) {
    // instrucao a
    if (condicao2) {
        // instrucao b
    }
} else {
    // instrucao c
}

// if alinhado
if (condicao1) {
    // instrucao a
}
if (condicao2) {
    // instrucao b
}
//...