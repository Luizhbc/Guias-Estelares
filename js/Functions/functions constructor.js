/*
  Function() constructor

  *expressão new
  *criar um novo objeto
  *this keyword
  */

function Person(name) {
  this.name = name
  //this.walk = () => {
  this.Walk = function () {
    return this.name + ' está andando'
  }
  this.NoWalk = function () {
    return this.name + ' não está andando'
  }
}
//let date = new Date('2021-10-21')
const Name1 = new Person('Luiz')
const Name2 = new Person('John')
console.log(Name1.NoWalk())
console.log(Name2.Walk())
//console.log(date)
console.log(Name1)
console.log(typeof Name1)
