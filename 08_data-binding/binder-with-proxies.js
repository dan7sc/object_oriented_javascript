class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

class Binder {
  bindTo(dataSourceObj, dataSourceProperties, dataTargetList) {
    const bindHandler = {
      set: (target, property, newValue) => {
        const index = dataSourceProperties.indexOf(property)
        if(index >= 0 && property === dataSourceProperties[index]) {
          target[dataSourceProperties[index]] = newValue
          dataTargetList[index].obj[dataTargetList[index].prop] = newValue
        }
      }
    }
    return new Proxy(dataSourceObj, bindHandler)
  }
}

function init() {
  const person = new Person('John', 'Smith')
  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')

  txtName.value = person.name
  txtSurname.value = person.surname

  const binder = new Binder()

  const proxiedPerson = binder.bindTo(
    person,
    ['name', 'surname'],
    [{
      obj: txtName,
      prop: 'value'
    },
     {
       obj: txtSurname,
       prop: 'value'
     }]
  )

  setTimeout(() => {
    proxiedPerson.name = 'unknown_name'
    proxiedPerson.surname = 'unknown_surname'
  }, 2000)
}

window.onload = function() {
  init()
}
