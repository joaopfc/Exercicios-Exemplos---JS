// Crie uma função que verifique

function verificaDado(dado){
    return Object.prototype.toString.call(dado)
  }
  // corretamente o tipo de dado
  // Crie um objeto quadrado com
  // a propriedade lados e torne
  // ela imutável

const quadrado = {
    Object.defineProperties(quadrado, {
        lados: {
            value:4,
            enumerable: true,
        }
    })
}

console.log(quadrado)
  // Previna qualquer mudança
  // no objeto abaixo
  const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
    }
    // Liste o nome de todas
    // as propriedades do
    // protótipo de String e Array