// callback function
function SayMyName(name) {
  console.log('antes da callback')
  name()
  console.log('depois da callback')
}
//SayMyName({ name: 'Joãozinho', idade: 20 })

SayMyName(() => {
  console.log('Callback')
})
//
SayMyName(() => {
  console.log('teste')
})
