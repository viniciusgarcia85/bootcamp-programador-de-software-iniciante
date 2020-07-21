/*
  Aula sobre Object JSON
*/

var pessoa = {
  nome: "Vinícius André Garcia Soares",
  idade: 34,
  telefone: "(34) - 9-8424-8290",
  temCarro: true,
  animaisDeEstimacao: [
    "Cachorro", "Gato", "Tartaruga"
  ],
  mae: {
    nome: "Andréa",
    idade: 58
  }
}

// JSON inteiro
console.log(pessoa)
// No Object JSON pega a propriedade nome
console.log(pessoa.nome)
// No Object JSON pega a propriedade nome
console.log(pessoa.mae.nome)
// Manipulando o JSON 
// push - Adiciona ao array
pessoa.animaisDeEstimacao.push("Billy")
console.log(pessoa.animaisDeEstimacao)

// Mudando o nome
pessoa.nome = pessoa.nome + " Da Silva";
console.log(pessoa.nome) 

salvarDadosPessoa(pessoa);
function salvarDadosPessoa(pessoa) {
  console.log(pessoa.nome)
}
// Convertendo um objeto JSON em string
console.log(JSON.stringify(pessoa))
