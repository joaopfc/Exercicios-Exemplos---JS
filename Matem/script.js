let aleatorio = Math.floor(Math.random()* ( 2000 - 1050  + 1)) + 1050;

console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumeros = numeros.split(', ')
const numeroMaior = Math.max(...arrayNumeros)

console.log(numeroMaior)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230 ', 'r$ 200'];

function limpaPreco(preco){
    preco = +preco.toUpperCase().replace('R$','').trim().replace(',','.')
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0
listaPrecos.forEach((preco)=>{
    soma += limpaPreco(preco)
})

console.log(soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

limpaPreco(listaPrecos[0])