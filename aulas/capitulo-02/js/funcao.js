/*
  Aula sobre funções
*/

function multiplicacao(n1, n2) {
  return n1 * n2;
}
var resultado = multiplicacao(5 , 20);
console.log(resultado)

function saudacao(nome) {
  console.log('Olá ' + nome + ', seja bem vindo.')
}
saudacao('Guilherme');

function funcaoSemParametro() {
  var a = 1;
  var b = 2;
  console.log(a + b)
}

funcaoSemParametro();