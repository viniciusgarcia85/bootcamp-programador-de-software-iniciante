/*
  Aula sobre arquivos JSON - JavaScript Object Notation
*/
var fs = require("fs");
var nomeArquivo = "carros.json";
var carros = ['Gol', 'Palio', 'Uno', 'Celta'];
var concessionaria = {
  nome: 'Concessionária Belga',
  carros
};

fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function(err) {
  if (err) {
    console.log(err)
  } else {
    fs.readFile(nomeArquivo, 'utf-8', function(err, data) {
      if (err) {
        console.log(err)
      } else {
        var obj = JSON.parse(data);
        obj.carros.push('FIAT 147');
        fs.writeFile(nomeArquivo, JSON.stringify(obj), function(err) {
          if (err) {
            console.log(err)
          }
        })
      }
    })
  }
})