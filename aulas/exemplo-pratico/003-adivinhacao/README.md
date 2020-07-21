## 003 - Exemplo prático - Adivinhação

Enunciado

Criar um jogo no qual o jogador tenha que adivinhar um número.

O jogo deve gerar um número aleatório entre 1 e 100, e depois desafiar o jogador a descobrir qual o número em no máximo 10 tentativas.

A cada tentativa, caso o jogador não tenha acertado o número, o jogo deve informar se o número informado é maior ou menor que o sorteado.

O jogo termina se o jogador acertar o número ou acabarem o número de tentativas.

Passos para resolução

1. Gerar um número aleatório entre 1 e 100;
2. Inicializar o número de tentativas como 10;
3. Solicitar para o jogador tentar adivinhar o número;
4. Decrementar o número de tentativas;
5. Verificar se a tentativas está correta;
  Se estiver correta:
    Informar que acertou o número;
    Encerrar o jogo.
  Se estiver incorreta e acabaram as tentativas:
    Informar que ele não venceu;
    Encerrar o jogo.
  Se estiver incorreta e ainda existirem as tentativas:
    Informar se a tentativa é maior ou menor que o número sorteado;
    Pedir outra tentativa para o jogador.