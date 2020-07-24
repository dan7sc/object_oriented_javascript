const SoftwareHouse = (function() {

  function implementsMethod(obj, method) {
    return !!(obj && obj[method] && obj[method] instanceof Function)
  }

  function implementsProperty(obj, property) {
    return !!(obj && obj[property] && !(obj[property] instanceof Function))
  }

  return class {
    constructor() {
      this.employees = []
    }

    hire(dev) {
      if (implementsMethod(dev, 'writeCode') && implementsProperty(dev, 'name')) {
        this.employees.push(dev)
      } else {
        throw new Error('The argument is not compatible with required interface')
      }
    }
  }
})()

const john = {
  name: 'John',
  surname: 'Smith'
}

const kate = {
  name: 'Kate',
  surname: 'Smith',
  writeCode: () => 'writing code...'
}

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
