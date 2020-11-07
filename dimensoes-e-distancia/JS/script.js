// const listaAnimais = document.querySelector('.animais-lista')

// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop
// console.log(animaisTop)

// const primeiroh2 = document.querySelector('h2')
// const h2left = primeiroh2.offsetLeft

// console.log(h2left)

const distancia = document.querySelector('.animais-lista li')
console.log(distancia.offsetTop);

//

function somaImage(){
const img = document.querySelectorAll('img')
let soma = 0
img.forEach((img)=>{
    soma += img.offsetWidth;
})
console.log(soma)
}

window.onload = function(){
    somaImage();
}

//

const link = document.querySelectorAll('a');
link.forEach((link)=>{
    const linkW = link.offsetWidth;
    const linkH = link.offsetHeight;
    if(linkW >= 48 && linkH >= 48){
        console.log(link,'Possui acessibilidade')
    }else {
        console.log(link,'Não possui boa acessibilidade')
    }
})

// 

const browserSmall = window.matchMedia('(max-widh:720px)').matches

if(browserSmall){
    const menu=document.querySelector('.menu');
    menu.classList.add('menu-mobile')
}