/*
      Type conversion (typecasting) vs Type coersion

      * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5)
// o número 5 sofre uma conversão para string e acontece um concat

console.log(Number('9') + 5)
// Forçamos a string mudar para número

console.log(Number('Alou') + 5)
// teste de curiosidade /\ NaN
