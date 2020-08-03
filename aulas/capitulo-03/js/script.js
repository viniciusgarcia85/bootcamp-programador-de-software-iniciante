// Aula - Manipulação de HTML com JavaScript

function clickBotao1 () {
  document.getElementById('paragrafo1').innerHTML = "<strong>Texto 1 alterado com sucesso.</strong>"
}

function clickBotao2 () {
  for (var i = 0; i < document.getElementsByClassName('paragrafo').length; i++) {
    document.getElementsByClassName('paragrafo')[i].style.color = 'blue';
    document.getElementsByClassName('paragrafo')[i].style.fontWeight = 'bold';
  }
}
function clickBotao3 () {
  var botoes = document.getElementsByTagName('button');
  var i = 0;
  while (i < botoes.length) {
    botoes[i].style.fontSize = '20px';
    i++;
  }
}

setTimeout(function() {
  console.log('Passou 1 segundo')
}, 1000);

setTimeout(function() {
  console.log('Passou 2 segundos')
}, 2000);
  
function ligarLampada() {
  document.getElementById('lampada').src = "./imagens/acesa.jpg"
}
function desligarLampada() {
  document.getElementById('lampada').src = "./imagens/apagada.jpg"
}

var qtdElementos = 0;
function adicionarElemento () {
  var elemento = document.createElement('P')
  elemento.innerHTML = 'Elemento' + qtdElementos
  qtdElementos++
  document.getElementById('div-elementos').appendChild(elemento)
}

function removerElemento () {
  var filhos = document.getElementById('div-elementos').childNodes;
  var size = filhos.length
  for (var i = 0; i < size; i++) {
    document.getElementById('div-elementos').removeChild(filhos[0])
  }
}
