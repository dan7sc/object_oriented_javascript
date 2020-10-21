function Person(name, surname) {
  this.name = name
  this.surname = surname
}

function observable(value) {
  const subscribers = []

  const notify = newValue => {
    for(let i = 0; i < subscribers.length; i++) {
      subscribers[i](newValue)
    }
  }

  function accessor(newValue) {
    if(arguments.length && newValue !== value) {
      value = newValue
      notify(newValue)
    }
    return value
  }

  accessor.subscribe = function(subscriber) {
    subscribers.push(subscriber)
  }

  return accessor
}

function init() {
  const john = observable('John')
  const smith = observable('Smith')
  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')

  const person = new Person(john, smith)

  txtName.value = person.name()
  txtSurname.value = person.surname()

  person.name.subscribe(value => txtName.value = value)
  person.surname.subscribe(value => txtSurname.value = value)

  setTimeout(() => {
    person.name('unknown name')
    person.surname('unknown surname')
  }, 2000)
}

window.onload = function() {
  init()
}
