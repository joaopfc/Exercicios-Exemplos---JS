// function Carro(marcaAtribuida,precoAtribuido,ano){
//   this.marca = marcaAtribuida
//   this.preco = precoAtribuido
//   this.ano = ano
// }

// const honda = new Carro('Honda',3000)
// const fiat = new Carro('Fiat',4000,1997)



// function Carro2(marca,precoInicial){
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa
//   this.marca = marca
//   this.preco = precoFinal
// }

// const BMW = new Carro2('BMW', 5000)

// const Dom = {
//   selector:'li',
//   element(){
//     return document.querySelector(this.selector)
//   },
//   ativar(){
//     this.element().classList.add('ativar')
//   }
// }

// Exericios
// 1

function Pessoa(nome,idade) {
  this.nome = nome;
  this.idade= idade;

  this.andar = function(){
    console.log(this.nome + ' Andou')
  }
}

const joao = new Pessoa('João',20)
const maria = new Pessoa('Maria',25)
const bruno = new Pessoa('Bruno',15)


function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.add(classe)
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element)=>{
      element.classList.remove(classe)
  })
 }
}

const listaItens = new Dom('li');
const ul = new Dom('ul')

// listaItens.addClass('ativar')
// ul.addClass('ativar-ul')