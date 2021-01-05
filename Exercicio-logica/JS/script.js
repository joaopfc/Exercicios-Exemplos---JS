//Escreva uma função que receba 2 numeros e retorne o maior.

const maior = (Numr1,Numr2) => Math.max(Numr1,Numr2)

console.log(maior(100,50))


//Ex2

/*
Escreva uma função chamado ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (Number).
Retorne True se a imagem estiver no modo paisagem.
*/

const ePaisagem = (Largura,Altura) => Largura > Altura ? true : false

console.log(ePaisagem(1500,100))