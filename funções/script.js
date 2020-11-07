//Exercicio

//1

function verdade(valor) {
  return !!valor;
}

//2

function perimetro(valor) {
  return valor * 4;
}

//3

function name(nome, sobrenome) {
  return `My name is ${nome} ${sobrenome}`;
}

//4

function parImpar(number) {
  if (number % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

//5

function tipo(dados) {
  return typeof dados;
}

//6

addEventListener("click", function () {
  console.log("João Paulo");
});
