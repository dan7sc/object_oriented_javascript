const Model = (function() {
  function Model(name, surname) {
    this.name = name
    this.surname = surname
  }

  return Model
})()

const View = (function() {
  function View(model, controller) {
    const self = this
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.controller = controller
    txtName.value = model.name
    txtSurname.value = model.surname

    btnSave.onclick = function() {
      self.save()
    }

    btnReset.onclick = function() {
      self.clear()
    }
  }

  View.prototype.clear = function() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const divMessage = document.getElementById('divMessage')

    txtName.value = ''
    txtSurname.value = ''
    divMessage.innerHTML = ''
  }

  View.prototype.save = function() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')

    const data = {
      name: txtName.value,
      surname: txtSurname.value
    }

    this.controller.save(data)
  }

  Object.defineProperty(View.prototype, 'message', {
    set: message => {
      const divMessage = document.getElementById('divMessage')
      divMessage.innerHTML = message
    },
    enumerable: true,
    configurable: true
  })

  return View
})()

const Controller = (function() {
  function Controller() {}

  Controller.prototype.initialize = function(model, view) {
    this.model = model
    this.view = view
  }

  Controller.prototype.save = function(data) {
    if (data.name && data.surname) {
      this.model.name = data.name
      this.model.surname = data.surname

      this.view.message = 'Saved'
    } else {
      this.view.message = 'Please, enter name and surname'
    }
  }

  return Controller
})()

window.onload = function() {
  const model = new Model('John', 'Smith')
  const controller = new Controller()
  const view = new View(model, controller)

  controller.initialize(model, view)
}
