const Interface = require('./interfaces')

const ITeamLeadership = new Interface('ITeamLeadership', ['delegateTo', 'motivate'], ['team'])

const IHireable = new Interface('IHireable', ['writeCode'], ['name'])

class SoftwareHouse {
  constructor() {
    this.employees = []
  }

  hire(dev) {
    IHireable.isImplementedBy(dev)
    ITeamLeadership.isImplementedBy(dev)
    this.employees.push(dev)
  }
}

const john = {
  name: 'John',
  surname: 'Smith',
  writeCode: () => console.log('writing code...'),
  delegateTo: () => console.log('delegating to...'),
  motivate: () => console.log('motivating...'),
  team: []
}

const softHouse = new SoftwareHouse()
softHouse.hire(john)

console.log(softHouse.employees)
console.log(softHouse.employees.indexOf(john))
