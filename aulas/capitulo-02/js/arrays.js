/*
    Aula sobre arrays
*/

var carros = ['Gol', 'Palio', 'Uno'];
console.log(carros)

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log('Primeira posição: ' + primeiroCarro)
console.log('Segunda posição: ' + segundoCarro)
console.log('Terceira posição: ' + terceiroCarro)

// Substituindo o carro na 3° posição
carros[2] = 'Argo';
console.log(carros[2])

// Mostrando o carro na 3° posição após a substituição
console.log(terceiroCarro)

// Tamanho do array
console.log('Tamanho do array: ' + carros.length)

// Posição do último array
console.log('Último elemento do array: ' + carros[carros.length - 1])

carros[3] = 'Sandero';
console.log('Último elemento do array: ' + carros[carros.length - 1])

carros[carros.length] = 'Fit';
console.log('Último elemento do array: ' + carros[carros.length - 1])

// Inserindo um elemento no array
carros.push('Polo');
console.log(carros)