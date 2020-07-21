/*
Aula sobre estruturas de repetição
*/

// Estrutura de repetição for
for (var i = 0; i < 10; i++) {
    console.log('Número: ' + i)
};

// Estrutura for com arrays
var carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Sandero']

// Do começo para o final
for (var i = 0; i < carros.length; i++) {
    console.log(carros[i])
}

// Do fim para o início
for (var i = carros.length - 1; i >= 0; i--) {
    console.log(carros[i])
}

// Estrutura de repetição while
var i = 0;
while (i < carros.length) {
    console.log(carros[i])
    i++;
}

// Exemplo do break
var cidades = ['Uberaba', 'Uberlândia', 'Araxá', 'Sacramento', 'Campo Florido']

var j = 0;
while (j < cidades.length) {
    console.log(cidades[j])
    if (cidades[j] === 'Sacramento') {
        console.log('Encontrei o palio')
        break
    }
    j++;
}

// Exemplo do continue
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var k = 0;
while (k < numeros.length) {
    var n = numeros[k];
    k++;
    
    if (n % 2 === 0) {
        console.log(n + ' é par');
        continue
    }
    
    console.log(n + ' é ímpar')
}

// Estrutura do while
var l = 0;
do {
    l++;
    console.log(l)
} while (l < 10)

// Estrutura for of
var cars = ['Gol', 'Palio', 'Uno', 'Celta', 'Sandero']

for (var car of cars) {
    console.log()
}

