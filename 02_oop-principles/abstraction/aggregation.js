const Person = require('./association')

const company = {
  name: 'Kfk Inc.',
  employees: []
}

const john = new Person('John', 'Smith')
const fred = new Person('Fred', 'Smith')

company.employees.push(john)
company.employees.push(fred)

console.log(company)
