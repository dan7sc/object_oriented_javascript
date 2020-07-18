function Person(name, surname) {
  this.name = name
  this.surname = surname
}

const person = new Person('John', 'Smith')

console.log(person)
console.log(person.toString())

console.log(person.constructor.name)
console.log(person instanceof Object)

const prototypeOfpersonV1 = person.constructor.prototype
console.log(prototypeOfpersonV1)

const prototypeOfpersonV2 = Object.getPrototypeOf(person)
console.log(prototypeOfpersonV2)

const p = prototypeOfpersonV2
console.log(p.isPrototypeOf(person))
console.log(person.isPrototypeOf(p))

const myObject = Object.create(null)
console.log(Object.getPrototypeOf(myObject))

const myPerson = {
  name: '',
  surname: ''
}
const developer = Object.create(
  person,
  {
    knownLanguage: {
      writable: true,
      configurable: true
    }
  }
)
console.log(myPerson)
console.log(developer)

const person1 = {
  name: 'John',
  surname: 'Smith'
}
const developer1 = {
  knownLanguage: 'JavaScript'
}
console.log(Object.getPrototypeOf(developer1))
Object.setPrototypeOf(developer1, person1)
console.log(Object.getPrototypeOf(developer1))
console.log(person1)
console.log(developer1)
