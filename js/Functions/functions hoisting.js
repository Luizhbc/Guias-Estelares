// Function hoisting
// Ela é elevada quando chamada.

// SayMyName()

// function SayMyName() {
//   console.log('Luiz')
// }

// Ela é elevada quando chamada.

SayMyName()

const SayMyName = function () {
  console.log('Luiz')
}

// função em forma de expressão não sofre hoisting
