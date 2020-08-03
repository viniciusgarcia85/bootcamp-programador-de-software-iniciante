var fs = require("fs"); // fs - abreviação de file system
var funcionarios = null;
fs.readFile("funcionarios.json", "utf-8", function (err, data) {
  if (err) {
    console.log(err)
  } else {
    funcionarios = JSON.parse(data).funcionarios;
    console.log('Maior salário: ' + JSON.stringify(maiorMenorSalario(null, true)));
    console.log('Maior salário comercial: ' + JSON.stringify(maiorMenorSalario('Comercial', true)));
    console.log('Maior salário produção: ' + JSON.stringify(maiorMenorSalario('Produção', true)));
    console.log('Maior salário administrativo: ' + JSON.stringify(maiorMenorSalario('Administrativo', true)));
    
    console.log('Menor salário: ' + JSON.stringify(maiorMenorSalario()));
    console.log('Menor salário comercial: ' + JSON.stringify(maiorMenorSalario('Comercial', false)));
    console.log('Menor salário produção: ' + JSON.stringify(maiorMenorSalario('Produção', false)));
    console.log('Menor salário administrativo: ' + JSON.stringify(maiorMenorSalario('Administrativo', false)));

    console.log('Média salarial da empresa: ' + media());
    console.log('Média salarial comercial: ' + media('Comercial'));
    console.log('Média salarial produção: ' + media('Produção'));
    console.log('Média salarial administrativo: ' + media('Administrativo'));
  }
});

// Função para retornar o maior salário
function maiorMenorSalario (setor, maior) {
  var func = null;
  for (var i = 0; i < funcionarios.length; i++) {
    if (setor && (funcionarios[i].setor !== setor)) {
        continue
    }
    if (func === null) {
      func = funcionarios[i];
        continue
    }

    if (maior && (funcionarios[i].salario > func.salario)) {
      func = funcionarios[i];
    } else if (!maior && (funcionarios[i].salario < func.salario)) {
      func = funcionarios[i]
      }
    }
    return func;
}

function media (setor) {
  var total = 0;
  var qtd = 0;
  for (var i = 0; i < funcionarios.length; i++) {
    if (setor && (funcionarios[i].setor !== setor)) {
      continue
    }
    qtd++;
    total += funcionarios[i].salario;
  }
  var media = total / qtd;
  return media
}