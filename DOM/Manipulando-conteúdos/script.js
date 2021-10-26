//Manipulando conteúdo
//textContent

// const element = document.querySelector('h1')
// element.textContent = 'SUP!' // tag h1 modificada

// const element = document.querySelector('h1')
// element.innerText = 'SUP2'

// const element = document.querySelector('h1')

// element.innerHTML = 'yoyoyo <small>yoyoyo</small> <strong> yoyoyoyo</strong>' //adicionar HTML diretamente ao elemento

// const element = document.querySelector('input')
// console.log(element.value)
// element.value = 'outro'

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

console.log(headerID.getAttribute('class'))
header.removeAttribute('id')

header.setAttribute('class', 'bg header')
