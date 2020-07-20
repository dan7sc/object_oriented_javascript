const person = {
  name: 'John',
  surname: 'Smith'
}

Object.preventExtensions(person)

person.age = 30
console.log(person.age)

if (Object.isExtensible(person)) {
  person.height = 170
}
console.log(person.height)

function Person(name, surname) {
  this.name = name
  this.surname = surname

  Object.preventExtensions(this)
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments)
  this.knownLanguage = knownLanguage
}

const dev = new Developer('Maria', 'Silva', 'JavaScript')
console.log(dev.knownLanguage)
delete dev.surname
console.log(dev.surname)

function PersonV2(name, surname) {
  this.name = name
  this.surname = surname

  Object.seal(this)
}

const other = new PersonV2('Paul', 'Pauling')
other.age = 54
console.log(other.age)
delete other.name
console.log(other.name)

if (!Object.isSealed(other)) {
  delete other.surname
}
console.log(other.surname)

other.surname = 'Smith'
console.log(other.surname)

const otherPerson = new Person('Mint', 'Smouth')
Object.freeze(otherPerson)

otherPerson.age = 32
console.log(otherPerson.age)
otherPerson.name = 'John'
console.log(otherPerson.name)
delete otherPerson.name
console.log(otherPerson.name)

// throw error
// Object.defineProperty(
//   otherPerson,
//   'name',
//   {
//     get: function() {
//       return 'Ann'
//     }
//   }
// )

if (!Object.isFrozen(otherPerson)) {
  otherPerson.surname = 'Naming'
}
console.log(otherPerson.surname)
