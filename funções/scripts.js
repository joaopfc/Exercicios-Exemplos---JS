function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto de azul";
  } else if (cor === "verde") {
    return "Eu gosto de Verde";
  } else {
    return "Odeio cores";
  }
}

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe em numeros";
  }
  if (idade >= 60) {
    return "Idoso";
  } else {
    return "E jovem";
  }
}

function faltaVisitar(jaFui) {
  var TotalPais = 193;
  return `Falta visitar ${TotalPais - jaFui} paises`;
}
