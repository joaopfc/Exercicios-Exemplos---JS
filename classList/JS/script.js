const Adicionar = document.querySelectorAll('.menu a')

Adicionar.forEach((item) => {
    //item.classList.add('ativo')
    item.classList.remove('ativo');
    console.log()
})

Adicionar[0].classList.add('ativo') // adicionar somente ao primeiro

//

//

const img = document.querySelectorAll('img');

img.forEach((img) => {
    const possuiAtributo =img.hasAttribute('alt');
    //console.log(img,possuiAtributo)
})

;

const mud = document.querySelector('a[href^="https"]')

mud.setAttribute('href' , 'https://www.facebook.com')
