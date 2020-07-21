/*
  Aula sobre Manipulação de Arrays
*/

var materialEscolar = ['lápis', 'caneta', 'borracha', 'cola']

// Método pop - Remove o último elemento do array
materialEscolar.pop();
console.log(materialEscolar)

// Método push - Insere um elemento no final do array
materialEscolar.push('Régua')
console.log(materialEscolar)

// Método shift - Remove o primeiro elemento do array e retorna ele
materialEscolar.shift()
console.log(materialEscolar)

// Método unshift - Insere o elemento no início do array e atualiza os outros índices
materialEscolar.unshift('cola')
console.log(materialEscolar)

// Atualiza o elemento no índice indicado 
materialEscolar[2] = 'Adesivo';
console.log(materialEscolar)

// Deleta o elemento no índice indicado deixando o 'undefined' no lugar, ou seja, elemento não definido
// delete materialEscolar[3]
// console.log(materialEscolar)

// Método splice
/*
  primeiro parâmetro: posição inicial;
  segundo parâmetro (opcional): quantos elementos serão removidos a partir da posição inicial;
  terceiro e demais parâmetros: elementos que serão inseridos a partir da posição inicial.
*/
materialEscolar.splice(2, 1, "caderno", "folhas")
console.log(materialEscolar)

// Método concat - concatena uma array em outro e retorna o novo array criado
nomesAlunos = ['Vinícius', 'Victor', 'Bruna', 'Bruno', 'Gabriel']
var donos = materialEscolar.concat(nomesAlunos);

console.log(donos)

// Método slice - cria um novo array sem alterar o array original
var novoMaterial = materialEscolar.slice(3)
console.log(novoMaterial)