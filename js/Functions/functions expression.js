// function expression
//funcion anonymous

const sum = function (n1, n2) {
  let total = n1 + n2
  // Sempre declarar a variavel
  return total
}
let num1 = 10
let num2 = 20

const soma = sum(num1, num2) //arguments

console.log(`O primeiro número é: ${num1}`)
console.log(`O segundo número é: ${num2}`)
console.log(`A soma de ${num1} + ${num2} é: ${soma}`)

function FazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}
// const FazerSuco = function (fruta1, fruta2) {
//   return fruta1 + fruta2
// }

const copo = FazerSuco('uva', 'banana')

console.log(copo)
