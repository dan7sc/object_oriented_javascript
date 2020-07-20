const Person = (function() {
  let protectedMembers

  function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  }

  function PersonConstructor(name, surname, protected) {
    protectedMembers = protected || {}
    protectedMembers.capitalize = capitalize

    this.name = capitalize(name)
    this.surname = capitalize(surname)
  }

  return PersonConstructor
})()

function Developer(name, surname, knownLanguage) {
  const parentProtected = {}
  Person.call(this, name, surname, parentProtected)

  this.knownLanguage = parentProtected.capitalize(knownLanguage)
}

const john = new Person('john', 'smith')
console.log(john.name)

const maria = new Developer('maria', 'silva', 'javascript')
console.log(maria.name)
console.log(maria.surname)
console.log(maria.knownLanguage)
