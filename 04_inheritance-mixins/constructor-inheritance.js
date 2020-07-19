function Person(name, surname) {
  this.name = name
  this.surname = surname
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments)
  this.knownLanguage = knownLanguage
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

const john = new Developer('John', 'Smith', 'JavaScript')
console.log(john)
console.log(john.name)
console.log(john.surname)
console.log(john.knownLanguage)

// lines 11-12
console.log(john instanceof Developer)
console.log(john instanceof Person)
