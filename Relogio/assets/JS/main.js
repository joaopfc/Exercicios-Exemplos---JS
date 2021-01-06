function escopo(){
    
    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let milesegundos = 0

    let cronometro

    const relogioTela = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')


    function eventoClick(){

        iniciar.onclick = () => start(removeEstilo());
        pausar.onclick = () => pausa(adicionaEstilo());
        zerar.onclick = () => zera()
    }
    
    function start(){
        pausa()
        cronometro =  setInterval(() => {
            tempo()
        }, 10)
    }

    function pausa(){
        clearInterval(cronometro)
    }

    function zera(){
        clearInterval(cronometro)
        hora = 0;
        minuto = 0;
        segundo = 0;

        return relogioTela.innerText = `${adicionaZero(hora)}:${adicionaZero(minuto)}:${adicionaZero(segundo)}`
    }

    function adicionaEstilo(){relogioTela.classList.add('pausado')}

    function removeEstilo() {relogioTela.classList.remove('pausado')}


    function tempo(){

        if ((milesegundos += 10) == 1000) {
            milesegundos = 0;
            segundo++;
        }if (segundo == 60){
            segundo = 0
            minuto++; 
        }if (minuto == 60){
            minuto = 0
            hora++; 
        }
        return relogioTela.innerText = `${adicionaZero(hora)}:${adicionaZero(minuto)}:${adicionaZero(segundo)}`
    }

    function adicionaZero(valor){
        return valor >= 10 ? valor : `0${valor}`
    }

    eventoClick()
}
escopo()