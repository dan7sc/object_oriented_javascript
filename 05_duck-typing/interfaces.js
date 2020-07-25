class Interface {
  constructor(name, methods = [], properties = []) {
    this.name = name
    this.methods = []
    this.properties = []

    for (let i = 0; i < methods.length; i++) {
      if (typeof methods[i] !== 'string') {
        throw new Error('Interface constructor expects method names to be passed in as a string')
      }
      this.methods.push(methods[i])
    }

    for (let i = 0; i < properties.length; i++) {
      if (typeof methods[i] !== 'string') {
        throw new Error('Interface constructor expects property names to be passed in as a string')
      }
      this.properties.push(properties[i])
    }
  }

  isImplementedBy(obj) {
    let methodsLength = this.methods.length
    let propertiesLength = this.properties.length
    let currentMember

    if (obj) {
      for (let i = 0; i < methodsLength; i++) {
        currentMember = this.methods[i]
        if (!obj[currentMember] || typeof obj[currentMember] !== 'function') {
          throw new Error(
            `The object does not implement the interface ${this.name} . Method ${currentMember} not found`
          )
        }

        for (let i = 0; i < propertiesLength; i++) {
          currentMember = this.properties[i]
          if (!obj[currentMember] || typeof obj[currentMember] === 'function') {
            throw new Error(
              `The object does not implement the interface ${this.name} . Propertie ${currentMember} not found`
            )
          }
        }
      }
    }  else {
      throw new Error('No object to check')
    }
  }
}

const IHireable = new Interface('IHireable', ['writeCode'], ['name'])

const john = {
  name: 'John',
  surname: 'Smith',
  writeCode: () => 'writing code...'
}

class SofwareHouse {
  constructor() {
    this.employees = []
  }

  hire(dev) {
    IHireable.isImplementedBy(dev)
    this.employees.push(dev)
  }
}

const softHouse = new SofwareHouse()

softHouse.hire(john)
console.log(softHouse.employees)
