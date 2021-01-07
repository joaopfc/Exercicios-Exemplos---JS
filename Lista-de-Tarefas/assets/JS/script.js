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
            const valorDigitado = input.value
            if(!valorDigitado) return
            console.log(valorDigitado)
            mostraInputTela(valorDigitado)
        }

        function mostraInputTela(digitado){
            let criaNovoInput = document.createElement('input')
            criaNovoInput.disabled
            criaNovoInput.innerHTML = digitado
            formulario.appendChild(criaNovoInput)
        }

    }
    escopo()