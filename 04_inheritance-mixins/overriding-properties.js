function Person(name, surname) {
  this.name = name
  this.surname = surname
}

Object.defineProperty(
  Person.prototype,
  'fullName',
  {
    get: function() {
      return `${this.name} ${this.surname}`
    }
  }
)

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments)
  this.knownLanguage = knownLanguage
}

Developer.prototype = new Person()
Developer.prototype.constructor = Developer

Object.defineProperty(
  Developer.prototype,
  'fullName',
  {
    get: function() {
      return `Dev ${this.name} ${this.surname}`
    }
  }
)

const john = new Person('John', 'Smith')
const maria = new Developer('Maria', 'Silva', 'JavaScript')

console.log(john.fullName)
console.log(maria.fullName)
