const Interface = require('../05_duck-typing/interfaces')

const IDevelopmentTeam = new Interface('IDevelopmentTeam', ['analyze', 'writeCode', 'test', 'deploy'])

class SoftwareHouse {
  constructor() {
    this.employees = []
  }

  createSoftware(specs) {
    const webSwBuilderTeam = new WebSwBuilderTeam()
    const projectManager = new ProjectManager(webSwBuilderTeam)
    return projectManager.buildSoftware(specs)
  }

  hire(dev) {
    this.employees.push(dev)
  }
}

class ProjectManager {
  constructor(builderTeam) {
    IDevelopmentTeam.isImplementedBy(builderTeam)
    this.builderTeam = builderTeam
  }

  buildSoftware(specs) {
    const detailedSpecs = this.builderTeam.analyze(specs)
    const code = this.builderTeam.writeCode(detailedSpecs)
    const testedCode = this.builderTeam.test(code)

    return this.builderTeam.deploy(testedCode)
  }
}

class WebSwBuilderTeam {
  analyze(specs) {
    console.log('analyzing specifications: ' + specs)
    return 'detailed specs'
  }

  writeCode(detailedSpecs) {
    console.log('writing code using ' + detailedSpecs)
    return 'code'
  }

  test(code) {
    console.log('testing code: ' + code)
    return 'tested code'
  }

  deploy(testedCode) {
    console.log('deploying code: ' + testedCode)
    return 'deployed code'
  }
}

const softHouse = new SoftwareHouse()
const sw = softHouse.createSoftware('project specifications')
console.log(sw)
