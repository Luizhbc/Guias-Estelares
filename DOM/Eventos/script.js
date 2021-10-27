//Events

//ON events

// function print() {
//   console.log('print')
// }

// onclick="print()" onmouseouver="print()"

//---------------------------------//

//Events keyboard

// const input = document.querySelector('input')
// input.onkeydown = function () {
//   console.log('rode1')
// }

//------------------------------------//
//adicionar eventos

// const h1 = document.querySelector('h1')
// h1.addEventListener('click', print)

// function print() {
//   console.log('print')
// }

// Adicionando outros eventos

// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)

// function print() {
//   console.log('print')
// }

// h1.addEventListener('click', function () {
//   console.log('outro evento')
// })

//Eventos
// Argumento event
const input = document.querySelector('input')
input.onkeypress = function (event) {
  console.log(event.key)
}

// pode ser usado para pegar valores do input
