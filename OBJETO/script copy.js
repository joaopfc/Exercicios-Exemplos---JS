var pessoa = {
  nome: "João Paulo",
  idade: 28,
  Faculdade: true,
};

console.log(pessoa.Faculdade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
