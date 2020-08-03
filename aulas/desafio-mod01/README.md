## Desafio - Módulo 01

### Objetivos

Exercitar os conceitos trabalhados no módulo para a criação de um programa que receba uma entrada, realize alguns processamentos e devolva os resultados esperados.

### Enunciado 

Desenvolver funções em JavaScript que encontre algumas informações utilizando uma lista de funcionários.

### Atividades

O desafio consiste em desenvolver funções em JavaScript para realizar alguns processamentos em cima de uma lista de funcionários de uma empresa.

Cada funcionário é representado pelas seguintes informações:

- Nome: nome do funcionário
- Salário: salário do funcionário
- Setor: setor da empresa que o funcionário trabalha

A lista de funcionários será fornecida em um arquivo chamado funcionarios.json, juntamente com o enunciado deste trabalho.

Segue abaixo um exemplo da estrutura deste arquivo:

''' 
{
  "funcionarios": [
    {
      "nome": "João Silva",
      "salario": 1000,
      "setor": "Administrativo"
    },

    {
      "nome": "Maria Aparecida",
      "salario": 2000,
      "setor": "Produção"
    }
  ]
}
'''

O aluno poderá ler o arquivo pelo programa a ser desenvolvido, ou senão criar uma variável dentro do programa já com os dados fornecidos, não sendo então obrigatório o processo de leitura do arquivo.

Segue abaixo a descrição das funções a serem desenvolvidas:

1. Função que retorna o nome do funcionário que tem o maior salário da empresa.
2. Função que retorna o nome do funcionário que tem o menor salário da empresa.
3. Função que retorna a média salarial da empresa.
4. Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do setor informado.
5. Função que recebe um setor como parâmetro e retorna o funcionário de menor salário do setor informado.
6. Função que recebe um setor como parâmetro e retorna a média salarial do setor informado.
