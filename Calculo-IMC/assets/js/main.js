function escopo(){
  
  const form = document.querySelector('#formulario')
  const botao = document.querySelector('button')
  const resultado = document.querySelector('#resultado')
  let valor1 = document.querySelector('#peso');
  let valor2 = document.querySelector('#altura');
  
  function calculoIMC(peso,altura,IMC,resposta){
    
    peso = valor1.value;
    altura = valor2.value;
    peso = parseFloat(peso)
    altura = parseFloat(altura)
    IMC = peso / (altura * altura)
    IMC = IMC.toFixed(2) 
    
    if(+IMC < 18.5) return resposta = `Seu IMC é ${IMC} (Abaixo do peso)`;
    else if(IMC >= 18.5 && IMC <= 24.9) return resposta =  `Seu IMC é ${IMC} (Peso normal)` ;
    else if (IMC >= 25 && IMC <= 29.9) return resposta =  `Seu IMC é ${IMC} (Sobrepeso)` ;
    else if (IMC >= 30 && IMC <= 34.9) return resposta =  `Seu IMC é ${IMC} (Obesidade grau 1)` ;
    else if (IMC >= 35 && IMC <= 39.9) return resposta =  `Seu IMC é ${IMC} (Obesidade grau 2)` ;
    else if(IMC > 40) return resposta = `Seu IMC é ${IMC} (Obesidade grau 3)`;
    
  }
  
  function criarElemento(elemento){

    let imcFinal = document.createElement('p')
    imcFinal.classList.add('paragrafo-resultado')
    imcFinal.innerHTML = elemento
    resultado.appendChild(imcFinal)

    if(valor1.value === '' || isNaN(valor1.value)){
      imcFinal.classList.add('bad');
      imcFinal.innerHTML = 'Peso inválida'
      resultado.appendChild(imcFinal)
    }else if(valor2.value === '' || isNaN(valor2.value)){
      imcFinal.classList.add('bad');
      imcFinal.innerHTML = 'Altura inválida'
      resultado.appendChild(imcFinal)

    }
  }

  function removeElemento(){
    const remove = resultado.querySelector('.paragrafo-resultado')
    resultado.removeChild(remove);
  }


  function eventoButao(event){
    event.preventDefault();

    criarElemento(calculoIMC())
    botao.addEventListener('click',removeElemento);
  }
  
  form.addEventListener('submit', eventoButao);
}

escopo();
