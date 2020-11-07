// Execicios

// 1

var eu = {
  nome: "João Paulo",
  sobrenome: "Faria",
};

//2

eu.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

//3

var carro = {
  preço: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preço = 3000;

//4

var cachorro = {
  raça: "labrador",
  cor: "preto",
  idade: 10,

  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
