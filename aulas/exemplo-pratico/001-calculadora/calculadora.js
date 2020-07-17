/*
    Calculadora com if / else
*/

var operacao = process.argv[2];
var n1 = parseInt(process.argv[3]);
var n2 = parseInt(process.argv[4]);
var resultado = 0;
 
if (operacao === "soma") {
    resultado = n1 + n2;
} else if (operacao === "subtracao") {
    resultado = n1 - n2;
} else if (operacao === "multiplicacao") {
    resultado = n1 * n2;
} else if (operacao === "divisao") {
    resultado = n1 / n2;
} else if (operacao === "resto") {
    resultado = n1 % n2;
} else if(operacao === "porcentagem") {
    resultado = (n1 * n1) / 100; 
}
console.log('A porcentagem será ' + resultado + '%')


