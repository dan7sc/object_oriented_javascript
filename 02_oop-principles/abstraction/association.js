function Person(name, surname) {
  this.name = name
  this.surname = surname
  this.parent = null
}

const john = new Person('John', 'Smith')
const fred = new Person('Fred', 'Smith')

fred.parent = john

console.log(john)
console.log(fred)

module.exports = Person
