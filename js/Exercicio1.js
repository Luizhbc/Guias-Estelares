// 1. Declare uma variável de nome weight

//let weight

// 2. Que tipo de dado é a variável acima?

//console.log(typeof weight)

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
    *name: string
    *age: number (integer)
    *stars: number (float)
    *isSubscribed: Boolean
*/

//let name = "João"
//let age = 33
//let stars = 4.7
//let isSubscribed = false

/*
    4. A variável student abaixo é de que tipo de dado?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
    4.2 Mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <weight> kg.
      Atenção,substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
  // console.log(typeof student)
  name: 'João',
  age: 33,
  weight: 64.7,
  isSubscribed: false
}

//console.log(`${student.name}, de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
*/

/*
    6.Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/
// {
//   const students = []
//   students[0] = student.name
//   students[1] = student.age

// ${student.name},
// ${students.age},
// '${students.weight}',
// '${students.isSubscribed}'

students = [student]
//console.log(students)
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])
//}

/*
   7. Coloque no console o valor da posição zero do array acima
*/

console.log(students[0])

/*
    8. Crie um no student e coloque na posição 1 do array students

*/

const jhon = {
  name: 'Jhon',
  age: 22,
  weight: 94.7,
  isSubscribed: true
}

students[1] = jhon
