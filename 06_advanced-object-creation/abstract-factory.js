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

class RecruitmentAgencyAbstractFactory {
  constructor() {
    this.agencyFactories = {}
  }

  register(area, agencyFactory) {
    this.agencyFactories[area] = agencyFactory
  }

  getAgency(area) {
    return new this.agencyFactories[area]
  }
}

class DevAgency {
  getStaffMember(skills, benefits) {
    return new Developer(skills, benefits)
  }
}

class BusinessAnalystAgency {
  getStaffMember(skills, benefits) {
    return new BusinessAnalyst(skills, benefits)
  }
}

class SalesAgency {
  getStaffMember(skills, benefits) {
    return new Salesman(skills, benefits)
  }
}

const agencyFinder = new RecruitmentAgencyAbstractFactory()

agencyFinder.register('dev', DevAgency)
agencyFinder.register('ba', BusinessAnalystAgency)
agencyFinder.register('sales', SalesAgency)

const devAgency = agencyFinder.getAgency('dev')
const baAgency   = agencyFinder.getAgency('ba')
const salesAgency = agencyFinder.getAgency('sales')

const newDevMember = devAgency.getStaffMember(['C++', 'C#'], ['tablet'])
const newBaMember = baAgency.getStaffMember([], [])
const newSalesMember = salesAgency.getStaffMember([], [])


const sh = new SofwareHouse()
sh.hire(newDevMember)
sh.hire(newBaMember)
sh.hire(newSalesMember)

console.log(agencyFinder)
console.log(sh.employees)
