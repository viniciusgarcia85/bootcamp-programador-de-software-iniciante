/*
    Aula sobre estruturas de decisão
*/

var a = 10;
var b = 5;

// Comparações de if / else
if (a > b) {
    // Condiçao caso for verdadeiro
    console.log('a é maior que b')
} else if (a < b) {
    // Condição caso for falso
    console.log('b é maior que a')
} else {
    console.log('a e b são iguais.')
}

if (a > b) {
    console.log('Executar se somente a > b')
}
console.log('Sempre executar')

var c = 30;
var d = 20;

if (c >= d) {
    console.log('c é maior ou igual a d')
}

if (d <= c) {
    console.log('d é menor ou igual a c')
}

var e = 10;
var f = 10;

if (e === f) {
    console.log('e é igual a f')
}

var g = 20;
var h = 25;

if (g !== h) {
    console.log('g é diferente de h')
}

var i = 4;
var j = 3;
var k = 5;
var l = 7;

// Operador and (&&)
if ((i > j) && (l > k)) {
    console.log('i é maior que j')
}

// Operador or (||)

if ((i === j) || (k === l)) {
    console.log('Um dos dois eram válidos')
} 

// Operador not (!)
console.log(!(1 < 2))
if (!(1 < 2)) {
    console.log('Execute')
}

var fruta = 'abacaxi';
var valor = 0;

if (fruta === 'banana') {
    valor = 1;
} else if (fruta === 'maça') {
    valor = 2;
} else if (fruta === 'abacaxi') {
    valor = 3;
} else if (fruta === 'melão') {
    valor = 4;
} else if (fruta === 'mamão') {
    valor = 5;
} else {
    valor = 10;
}

console.log('Valor: ' + valor)

// Operador Switch
switch (fruta) {
        case 'banana':
            valor = 1;
            break
        case 'maça':
            valor = 2;
            break
        case 'abacaxi':
            valor = 3;
            break
        case 'melão':
            valor = 4;
            break
        case 'mamão':
            valor = 5;
            break
        default:
            valor = 10;
    }
                        
    console.log('Valor: ' + valor)

    // Operador ternário
    var x = 7;
    var y = 2;

    var resultado = '';
    resultado = x > y ? "x maior que y" : "x menor que y";
    console.log(resultado)