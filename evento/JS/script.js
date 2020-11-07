// // //const img = document.querySelector('img');

// // function callback(event){
// //     //console.log(event)
// // }

// // img.addEventListener('click', callback)

// //console.log(img)


// //

// const imgLista = document.querySelector('.animais-lista')

// function callbackLista (event){
//     console.log(event.type)
// }

// imgLista.addEventListener('click', callbackLista)

// //
// const linkExterno = document.querySelector('a[href^="http"]')

// function handlelinkExterno (event){
//     event.preventDefault();
//     //console.log(this)
// }

// linkExterno.addEventListener('click', handlelinkExterno)

// //

// const eventos = document.querySelector('h1')

// function handleEventos(event){
//     console.log(event.type, event)
// }

// eventos.addEventListener('click',handleEventos)
// eventos.addEventListener('mouseenter',handleEventos)
// eventos.addEventListener('mousemove',handleEventos)

// window.addEventListener('scroll', handleEventos)
// window.addEventListener('resize', handleEventos)

// function handleKey(event){
//     if(event.key === 'a'){
//         document.body.classList.toggle('azul')
//     }
// }

// window.addEventListener('keydown', handleKey)

//

// const imgs = document.querySelectorAll('img');

// function handleImg(event){
//     console.log(event.target.getAttribute('src'))
// }

// imgs.forEach((imgs) => {
//     imgs.addEventListener('click', handleImg);
// })


// Exercicios

const LinkInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault()
    LinkInternos.forEach((link) => {
        link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo');
}

LinkInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})

//2

const todosElementos = document.querySelectorAll(' body *')

function handleElement(event){
    //console.log(event.currentTarget)

    //3
    //event.currentTarget.remove()
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElement)
})

//console.log(todosElementos)

//

function handleClick (event){
    console.log(event.key)
    if(event.key === 't') {
        document.documentElement.classList.toggle('texto-maior')
    }
}

window.addEventListener('keydown', handleClick)