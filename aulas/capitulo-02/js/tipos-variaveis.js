/* 
    Aula sobre tipos de variáveis
*/

var inteiro = 6;
var decimal = 10.50;
var stringAspasDuplas = "Texto de teste aspas duplas."
var stringAspasSimples = 'Texto de teste aspas simples.'
var booleanoVerdadeiro = true; 
var booleanoFalso = false; 
var variavelNaoDefinida;
var variavelNula = null;

// Tipo inteiro
console.log(inteiro);
// Tipo decimal
console.log(decimal);
// Tipo string 
console.log(stringAspasDuplas);
// Tipo string
console.log(stringAspasSimples);
// Tipo booleano
console.log(booleanoVerdadeiro);
// Tipo booleano
console.log(booleanoFalso);
// Tipo undefined
console.log(variavelNaoDefinida);
// Tipo null
console.log(variavelNula);

var mudancaTipo = 1;
console.log(mudancaTipo)
mudancaTipo = "Troquei de número para texto";
console.log(mudancaTipo)

// Validando o tipo das variáveis com o typeof
console.log(typeof(inteiro))
console.log(typeof(decimal));
console.log(typeof(stringAspasDuplas));
console.log(typeof(stringAspasSimples));
console.log(typeof(booleanoVerdadeiro));
console.log(typeof(booleanoFalso));
console.log(typeof(variavelNaoDefinida));
console.log(typeof(variavelNula));

