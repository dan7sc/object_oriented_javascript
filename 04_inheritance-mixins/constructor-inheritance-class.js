class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }
}

class Developer extends Person {
  constructor(name, surname, knownLanguage) {
    super(name, surname)
    this.knownLanguage = knownLanguage
  }

  displayCompetency() {
    console.log(`${super.getFullName()} knows ${this.knownLanguage}`)
  }
}

const john = new Developer('John', 'Smith', 'JavaScript')

console.log(john)
console.log(john.getFullName())
john.displayCompetency()

console.log(john instanceof Developer)
console.log(john instanceof Person)
