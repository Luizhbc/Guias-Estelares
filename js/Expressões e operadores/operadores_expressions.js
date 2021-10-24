/* Expressões e operadores

  -Expressions
  -Operators
      Binary
      Unary
      Ternary
*/

//expressões é qualquer linha de código que resolva algo
// let number

// ; é opcional salvo excessão a funções auto executaveis

/*
  let number = 1
  (function() {
      console.log('alo')
  })()
*/
// nesse caso colocar ; depois do 1

//operador binario
let number = 1
console.log(number + 1)

//operador unary
console.log(++number) //number + number
console.log(--number) //numer - number

//operador ternary unico caso
console.log(true ? 'alo' : 'nada')
