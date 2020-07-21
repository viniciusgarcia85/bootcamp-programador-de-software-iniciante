/*
  Trabalho Prático - Módulo 01
*/

var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var primeNumbers = []
rl.question('Write a number: ', function(number) {
  // Turning a number into an integer
  number = parseInt(number);
  
  for (let i = 2; i <= number; i++) {
    let ePrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        ePrimo = false;
        break
      }
    }
    if (ePrimo) {
      primeNumbers.push(i);
    }
  }
  console.log(primeNumbers)
});