function createPerson(name , surname) {
  let _name = name
  let _surname = surname
  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')

  txtName.value = _name
  txtSurname.value = _surname

  return {
    name: (value) => {
      if(value) {
        _name = value
        txtName.value = _name
      }
      return _name
    },
    surname: (value) => {
      if(value) {
        _surname = value
        txtSurname.value = _surname
      }
      return _surname
    },
  }
}

function Person(name, surname) {
  let _name = name
  let _surname = surname
  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')

  txtName.value = _name
  txtSurname.value = _surname

  Object.defineProperty(this, 'name', {
    get: function() {
      return _name
    },
    set: function(value) {
      _name = value
      txtName.value = _name
    }
  })

  Object.defineProperty(this, 'surname', {
    get: function() {
      return _surname
    },
    set: function(value) {
      _surname = value
      txtSurname.value = _surname
    }
  })
}

function initFactory() {
  const person = createPerson('John', 'Smith')
  console.log(person.name(), person.surname())

  setTimeout(() => {
    person.name('Mary')
    person.surname('Poppies')
    console.log(person.name(), person.surname())
  }, 3000)
}

function initFactoryLegacy() {
  const person = new Person('John', 'Smith')
  console.log(person.name, person.surname)

  setTimeout(() => {
    person.name = 'Mary'
    person.surname = 'Poppies'
    console.log(person.name, person.surname)
  }, 3000)
}

window.onload = function() {
  initFactory()
  // initFactoryLegacy()
}
