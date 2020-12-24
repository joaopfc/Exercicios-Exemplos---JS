function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const Pessoa = []

    function novoObjeto(){
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        Pessoa.push({
            nome:nome,
            sobrenome:sobrenome,
            peso:peso,
            altura:altura
        })

        console.log(Pessoa)
        
        resultado.innerHTML += `<p>Nome: ${nome}, Sobrenome: ${sobrenome}</p>` + 
                               ` <p>Peso: ${peso}, Altura: ${altura}</p>`
    }
    
    
    function previneSubmit(evento){
        evento.preventDefault();
        novoObjeto();
    }
    
    
    form.addEventListener('submit', previneSubmit)
}

meuEscopo();