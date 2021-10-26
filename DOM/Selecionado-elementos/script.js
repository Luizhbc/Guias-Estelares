//--------------------- getElementById() //

// document.getElementById('dom-title')
// console.log(document.getElementById('dom-title'))

// const element = document.getElementById('dom-title')
// console.log(element)

//-------------- getElementByClassName() //

// const element = document.getElementsByClassName('one')
// console.log(element)

//----------------- getElementByTagName() //

// const element = document.getElementsByTagName('head')
// console.log(element)

// const element = document.getElementsByTagName('body')
// console.log(element)

// const element = document.getElementsByTagName('h1')
// console.log(element)

//------------------- querySelector() //

// const element = document.querySelector('.one') //class
// console.log(element)

// const element = document.querySelector('#one') //id
// console.log(element)
// const element = document.querySelector('meta') //pega o primeiro
// console.log(element)
// const element = document.querySelector('[src]') //source
// console.log(element)

//------------------- querySelectorAll() //

const elements = document.querySelectorAll('.one')
elements.forEach(el => console.log(el))
