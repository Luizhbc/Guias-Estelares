// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 221.31413123124131231231
console.log(number.toFixed(2).replace('.', ','))
// O tofixed é uma função(método) atrelada ao objeto 'number', serve para limitar a quantidade de casas decimais após o .
//funções atreladas ao objeto tambem podem se chamar metodo
//Nota: "," é considerado string
//Posso atrelar quantos metodos quiser
