function Person(name, surname) {
  this.name = name
  this.surname = surname
}

const handler = {
  get(target, propertyName) {
    console.log(`Getting property ${propertyName}`)
    return target[propertyName]
  },
  set(target, propertyName, value) {
    console.log(`Assigning value ${value} to property ${propertyName}`)
    target[propertyName] = value
  }
}

function init() {
  const person = new Person('John', 'Smith')
  const proxiedPerson = new Proxy(person, handler)

  txtName.value = proxiedPerson.name
  txtSurname.value = proxiedPerson.surname

  proxiedPerson.name = 'unknown_name'
  proxiedPerson.surname = 'unknown_surname'

  setTimeout(() => {
    txtName.value = proxiedPerson.name
    txtSurname.value = proxiedPerson.surname
  }, 2000)
}

window.onload = function() {
  init()
}
