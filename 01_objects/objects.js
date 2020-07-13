const person = {
  name: 'John',
  surname: 'Smith',
  address: {
    street: '13 K. Street',
    city: 'London',
    country: 'United Kingdom'
  },
  showFullName() {
    return `${this.name} ${this.surname}`
  }
}

console.log(person)
console.log(person.showFullName())

function Person(name, surname, address) {
  'use strict'

  this.name = name || ''
  this.surname = surname || ''
  this.address = address || {}

  this.displayFullName = function() {
    return `${this.name} ${this.surname}`
  }
}

Person.prototype.greets = function() {
  console.log(`Hello ${this.name} ${this.surname}!`)
}

const peter = new Person(
  'Peter',
  'Smith',
  {
    street: '4 Street',
    city: 'London',
    country: 'United Kingdom'
  }
)

console.log(peter)
console.log(peter.displayFullName())
peter.greets()

// const michael = Person('Michael', 'Smith') // throw error using 'use strict'

const obj = new Object()
obj.name = 'my new object'
obj.type = 'object'
console.log(obj)


class PersonClass {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  greets() {
    console.log(`Hello ${this.name} ${this.surname}!`)
  }
}

const classPerson = new PersonClass('Blue', 'Smith')
console.log(classPerson)
classPerson.greets()
