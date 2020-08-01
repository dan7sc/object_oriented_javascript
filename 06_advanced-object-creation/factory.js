class SofwareHouse {
  constructor() {
    this.employees = []
  }

  hire(employee) {
    this.employees.push(employee)
  }
}

class Developer {
  constructor(skills, benefits) {
    this.skills = ['programming'].concat(skills)
    this.salary = 40000
    this.benefits = ['computer'].concat(benefits)
  }
}

class Salesman {
  constructor(skills, benefits) {
    this.skills = ['selling'].concat(skills)
    this.salary = 50000
    this.benefits = ['computer'].concat(benefits)
  }
}

class BusinessAnalyst {
  constructor(skills, benefits) {
    this.skills = ['analyzing'].concat(skills)
    this.salary = 60000
    this.benefits = ['computer'].concat(benefits)
  }
}

class RecruitmentAgency {
  constructor() {
    this.objConstructors = {}
  }

  register(role, constructor) {
    this.objConstructors[role] = constructor
  }

  getStaffMember(role, skills, benefits) {
    let objConstructor = this.objConstructors[role]
    let member

    if (objConstructor) {
      member = new objConstructor(skills, benefits)
    }

    return member
  }
}

const agency = new RecruitmentAgency()

agency.register('dev', Developer)
agency.register('ba', BusinessAnalyst)
agency.register('sale', Salesman)

const newDevStaffMember = agency.getStaffMember('dev', ['C++', 'C#'], ['tablet'])
const newBaStaffMember = agency.getStaffMember('ba', [], [])
const newSaleStaffMember = agency.getStaffMember('sale', [], [])


const sh = new SofwareHouse()
sh.hire(newDevStaffMember)
sh.hire(newBaStaffMember)
sh.hire(newSaleStaffMember)

console.log(agency)
console.log(sh.employees)
