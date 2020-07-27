const Interface = require('./interfaces')

class Developer {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }
}

class Salesman {
  constructor(name, surname) {
    this.firstName = name
    this.secondName = surname
  }

  getFullName() {
    return `${this.firstName} ${this.secondName}`
  }
}

class BusinessAnalyst {
  constructor(fullName) {
    this.fullName = fullName
  }

  getFullName() {
    return `${this.fullName}`
  }
}

const IFullName = new Interface('IFullName', ['getFullName'])

class SoftwareHouse {
  constructor() {
    this.employees = []
  }

  hire(dev) {
    IFullName.isImplementedBy(dev)
    this.employees.push(dev)
  }

  listEmployees() {
    const employeesLength = this.employees.length
    let currentEmployee

    for (let i = 0; i < employeesLength; i++) {
      currentEmployee = this.employees[i]

      IFullName.isImplementedBy(currentEmployee)
      console.log(currentEmployee.getFullName())
    }
  }
}

const john = new Developer('John', 'Smith')
const kate = new Salesman('Kate', 'Smith')
const mary = new BusinessAnalyst('Mary Smith')

const softHouse = new SoftwareHouse()
softHouse.hire(john)
softHouse.hire(kate)
softHouse.hire(mary)

console.log(softHouse.employees)
softHouse.listEmployees()
