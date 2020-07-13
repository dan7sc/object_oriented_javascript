function Person() {
  this.name = 'John'
  this.surname = 'Smith'
}

function Programmer() {
  this.knownlanguage = 'JavaScript'
}

Programmer.prototype = new Person()

const programmer = new Programmer()

console.log(programmer)
console.log(programmer.__proto__)
console.log(programmer.name)
console.log(programmer.surname)
