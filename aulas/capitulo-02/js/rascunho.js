// Declarar uma função simples e executar
function mult (n1, n2) {
  return n1 * n2
}
// Função chamada diretamente dentro do console.log
console.log(mult(2, 3)) 
// Função é inserida em uma variável e posteriormente executada no console.log
// var resultado = mult (2, 3)
// console.log(resultado)

// Função que não tem return
function saudacao (nome) {
  console.log('Olá, ' + nome + '. Seja bem vindo!')
}
saudacao ('Vinícius André')

// Função sem parâmetro
function funcaoSemParametro () {
  var a = 2;
  var b = 3;
  console.log(a + b)
}
funcaoSemParametro();


