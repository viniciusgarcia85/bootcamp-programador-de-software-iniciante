/*
    Calculadora com o switch
*/

var operacao = process.argv[2];
var n1 = parseInt(process.argv[3]);
var n2 = parseInt(process.argv[4]);

switch (operacao) {
  case "soma":
    resultado = n1 + n2;
    break
  case "subtracao":
    resultado = n1 - n2;
    break
  case "multiplicacao":
    resultado = n1 * n2;
    break
  case "divisao":
    resultado = n1 / n2;
    break
  case "resto":
    resultado = n1 % n2;
    break
  case "porcentagem":
    resultado = (n1 * n2) / 100;
    break
  default: resultado = 0
}

console.log(resultado)