class SoftwareHouse {
  constructor() {
    this.employees = []
  }

  hire(dev) {
    if (dev.implementsMethod('writeCode') && dev.implementsProperty('name')) {
      this.employees.push(dev)
    } else {
      throw new Error('The argument is not compatible with required interface')
    }
  }
}

Object.prototype.implementsMethod = function(method) {
  return !!(this[method] && this[method] instanceof Function)
}

Object.prototype.implementsProperty = function(property) {
  return !!(this[property] && !(this[property] instanceof Function))
}

const john = {
  name: 'John',
  surname: 'Smith'
}

const kate = {
  name: 'Kate',
  surname: 'Smith',
  writeCode: () => 'writing code...'
}

console.log(john.implementsProperty('name'))
console.log(john.implementsMethod('writeCode'))

console.log(kate.implementsProperty('name'))
console.log(kate.implementsMethod('writeCode'))

const softHouse = new SoftwareHouse()

try {
  softHouse.hire(john)
} catch(e) {
  console.log(e.message)
}

try {
  softHouse.hire(kate)
} catch(e) {
  console.log(e.message)
}

console.log(softHouse.employees)
