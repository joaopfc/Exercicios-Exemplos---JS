    function escopo(){

        const formulario = document.querySelector('.formulario')
        const input = document.querySelector('.input-Adicionar')
        const botao = document.querySelector('.adicionar')

        function eventos(){

            botao.addEventListener('click', pegaValorInput)

        }
        eventos()
        
        function pegaValorInput(event){
            event.preventDefault()
            let valorDigitado = input.value
            if(!valorDigitado) return

            mostraInputTela(valorDigitado)
            limpaInput()
            criaBotoes()
        }

        function mostraInputTela(digitado){
            let criaNovoInput = document.createElement('input')
            criaNovoInput.disabled = true
            criaNovoInput.value = digitado
            formulario.appendChild(criaNovoInput)

            
        }

        function limpaInput(){
            input.value = '';
            input.focus();
        }

        function criaBotoes(){

            let botaoRemover = document.createElement('button')
            botaoRemover.setAttribute('class','remover')
            botaoRemover.innerText = 'Remover';
            formulario.appendChild(botaoRemover)
        }


    }
    escopo()