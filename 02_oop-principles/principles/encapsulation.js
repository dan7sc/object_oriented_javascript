const company = {
  name: 'Kfk Inc.',
  employees: [],
  sortEmployeesByName: function() {
    return employees.sort()
  }
}

function Company(name) {
  const employees = []

  this.name = name

  this.getEmployees = function() {
    return employees
  }

  this.addEmployees = function() {
    employees.push(employee)
  }

  this.sortEmployeesByName = function() {
    return employees.sort()
  }
}

const acCompany = new Company('AC Inc.')

console.log(acCompany)
console.log(acCompany.getEmployees())
