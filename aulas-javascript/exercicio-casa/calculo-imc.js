let peso = parseFloat(prompt('Digite o seu peso:'));
let altura = parseFloat(prompt('Digite a sua altura:'));

let imc = peso / (altura * altura);
console.log(`Seu IMC é ${imc.toFixed(2)}`);

let genero = prompt('Digite o seu gênero (M ou F):');
let pesoIdeal = 0;
switch (genero.toLowerCase()) {
    case 'masculino':
    case 'm':
        pesoIdeal = 72.7 * altura - 58;
        break;
    case 'feminino':
    case 'f':
        pesoIdeal = 62.1 * altura - 44.7;
        break;
    default:
        console.log('Gênero inválido');
}

if (pesoIdeal !== 0) {
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)}`);
    console.log(`Você está ${(peso - pesoIdeal).toFixed(2)} kg ${peso > pesoIdeal ? 'acima' : 'abaixo'} do peso ideal`);
}
