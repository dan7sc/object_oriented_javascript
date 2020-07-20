function Person(name, surname) {
  this.name = name
  this.surname = surname
}

Person.prototype.getFullName = function() {
  return `${this.name} ${this.surname}`
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments)
  this.knownLanguage = knownLanguage
}

Developer.prototype = new Person()
Developer.prototype.constructor = Developer
Developer.prototype.getFullName = function() {
  return `Dev ${Person.prototype.getFullName.call(this)}`
}

const john = new Person('John', 'Smith')
const maria = new Developer('Maria', 'Silva', 'JavaScript')

console.log(john.getFullName())
console.log(maria.getFullName())

class DeveloperClass extends Person {
  constructor(name, surname, knownLanguage) {
    super(name, surname)
    this.knownLanguage = knownLanguage
  }

  getFullName() {
    return `Dev ${Person.prototype.getFullName.call(this)}`
  }
}

const mario = new Developer('Mario', 'Silver', 'Ruby')
console.log(mario.getFullName())
