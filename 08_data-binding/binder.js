function Person(name, surname) {
  this.name = name
  this.surname = surname
}

function Binder() {}

Binder.prototype.bindTo = function(
  dataSourceObj, dataSourceProperty,
  dataTargetObj, dataTargetProperty
) {
  Object.defineProperty(dataSourceObj, dataSourceProperty, {
    get: function() {
      return dataTargetObj[dataTargetProperty]
    }
  })
}

Binder.prototype.bindTwoWay = function(
  dataSourceObj, dataSourceProperty,
  dataTargetObj, dataTargetProperty
) {
  Object.defineProperty(dataSourceObj, dataSourceProperty, {
    get: function() {
      return dataTargetObj[dataTargetProperty]
    },
    set: function(newValue) {
      dataTargetObj[dataTargetProperty] = newValue
    }
  })
}

function init() {
  const person = new Person('John', 'Smith')
  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')
  const btnSave = document.getElementById('btnSave')

  const binder = new Binder()

  txtName.value = person.name
  txtSurname.value = person.surname

  binder.bindTo(person, 'name', txtName, 'value')
  binder.bindTo(person, 'surname', txtSurname, 'value')

  // binder.bindTwoWay(person, 'name', txtName, 'value')
  // binder.bindTwoWay(person, 'surname', txtSurname, 'value')

  btnSave.onclick = function() {
    console.log('Source:', person.name, person.surname)
    console.log('Target:', txtName.value, txtSurname.value)
  }
}

window.onload = function() {
  init()
}
