let subject = 'Ola'
function CreateThing(subject) {
  //subject é uma variavel de escopo local
  subject = 'study'
  // Se a variavel não for da função ela atribuira valor a variavel de fora.
  // Caso não for declarar a variavel.
  return subject
}

console.log(subject)
console.log(CreateThing(subject))
console.log(subject)
