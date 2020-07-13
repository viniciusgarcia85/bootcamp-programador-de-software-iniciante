/* 
    Aula sobre operadores
*/

var soma = 3 + 2;
var subtracao = 5 - 2;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;
var resto = 20 % 3;

console.log('Soma: ' + soma);
console.log('Subtração: ' + subtracao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Resto: ' + resto);

var n1 = 10;
var n2 = 50;
var resultado = (n1 + n2) / (8 + 2);

console.log("Precedência: " + resultado);

var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log('Incremento: ' + incremento);

var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log('Decremento: ' + decremento);

var atribuicaoComAdicao = 5;
atribuicaoComAdicao += 6; // O mesmo que atribuicaoComAdicao = atribuicaoComAdicao + 6
console.log('Atribuição com adição: ' + atribuicaoComAdicao);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao -= 4; // O mesmo que atribuicaoComSubtracao = atribuicaoComSubtracao - 4
console.log('Atribuição com subtração: ' + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 3;
atribuicaoComMultiplicacao *= 2; // O mesmo que atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 4
console.log('Atribuição com multiplicação: ' + atribuicaoComMultiplicacao);

var atribuicaoComDivisao = 15;
atribuicaoComDivisao /= 5; // O mesmo que atribuicaoComDivisao = atribuicaoComDivisao / 4
console.log('Atribuição com divisão: ' + atribuicaoComMultiplicacao);

// variáveis adição
var a = 4;
var b = 3;

// adição (incremento)
var adicaoIncrementoPosterior = a + b++;
console.log('Incremento posterior: ' + adicaoIncrementoPosterior)

var adicaoIncrementoAnterior = a + ++b;
console.log('Incremento anterior: ' + adicaoIncrementoAnterior)

// variáveis subtração
var c = 8;
var d = 7;

// subtração (decremento)
var subtracaoDecrementoPosterior = c + d--;
console.log('Decremento posterior: ' + subtracaoDecrementoPosterior)

var subtracaoDecrementoAnterior = c + --d;
console.log('Decremento anterior: ' + subtracaoDecrementoAnterior)

