//Criando e adicionando elementos

//createElement
// const div = document.createElement('div')
// div.innerText = 'Yo!'

// //append - abaixo     prepend - Acima
// const body = document.querySelector('body')

// body.append(div)

//------------------------------------//

//adicionando elementos

const div = document.createElement('div')
div.innerText = 'YO'

//insertBefore

// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)

//insertAfter
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script.nextElementSibling)
