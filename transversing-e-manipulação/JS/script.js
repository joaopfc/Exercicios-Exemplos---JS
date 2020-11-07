const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.cachorros-descricao');

//h1.innerHTML = '<p>Novo Título<\p>'

//console.log(animaisLista.innerHTML)

//

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const CloneMenu = menu.cloneNode(true)

copy.appendChild(CloneMenu)

//2

const faq = document.querySelector('.faq')
const PrimeiroDT = faq.querySelector('dt')
const ProximoDD = PrimeiroDT.nextElementSibling;
//3
console.log(ProximoDD)

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML;
