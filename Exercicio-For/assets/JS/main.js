console.log('Não Desista')

function escopo(){

    const container = document.querySelector('.container')
    const div = document.createElement('div')
    

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ]


    for(let i = 0; i < elementos.length; i++){
        const {tag, texto} = elementos[i]

        const tagCriada = document.createElement(tag)

        // tagCriada.innerText = texto Jeito antigo
        const criaTexto = document.createTextNode(texto)

        tagCriada.appendChild(criaTexto)

        div.appendChild(tagCriada)
    }

    container.appendChild(div)
    
}

escopo()