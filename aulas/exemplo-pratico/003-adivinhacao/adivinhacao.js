/*
  Exercício prático - Adivinhação
*/
var readline = require('readline')
// Entrada de dados
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Math.random() - Gera um número aleatório entre 0 e 1
// Math.round() - Faz o arredondamento dos valores
var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
  numeroAleatorio = 1;
}

var numeroDeTentativas = 10;

pergunta();

function pergunta() {
  rl.question('Digite um número: ', function(numero) {
    numero = parseInt(numero)
    console.log(numero);
    numeroDeTentativas--;
    if (numero === numeroAleatorio) {
      console.log('Parabéns, você acertou o número.');
      rl.close();
    } else if (numeroDeTentativas === 0) {
      console.log('Que pena, você não descobriu o número em 10 tentativas.');
      rl.close();
    } else if (numero > numeroAleatorio) {
      console.log('Número errado! Você ainda tem ' + numeroDeTentativas + ' tentativas. ' +
                  'O número digitado é maior que o número sorteado.');
      pergunta();
    } else {
      console.log('Número errado! Você ainda tem ' + numeroDeTentativas + ' tentativas. ' +
                  'O número digitado é menor que o número sorteado.');
      pergunta();
    }
  });
}


/*
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
  numeroAleatorio = 1
}
var numeroTentativas = 10;

rl.question('Digite um número: ', function(numero) {
  numero = parseInt(numero);
  numeroTentativas--;
  if (numero === numeroAleatorio) {
    console.log('Parabéns, você acertou o número.');
    rl.close();
  } else if (numeroTentativas === 0) {
    console.log('Que pena, você não descobriu o número em 10 tentativas.');
    rl.close();
  }
});

*/