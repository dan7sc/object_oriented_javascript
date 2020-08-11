const Model = (function() {
  function Model(name, surname) {
    this.name = name
    this.surname = surname
  }

  return Model
})()

const View = (function() {
  function View(presenter) {
    const self = this
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.presenter = presenter

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

    this.presenter.save(data)
  }

  Object.defineProperty(View.prototype, 'message', {
    set: message => {
      const divMessage = document.getElementById('divMessage')
      divMessage.innerHTML = message
    },
    enumerable: true,
    configurable: true
  })

  Object.defineProperty(View.prototype, 'name', {
    set: value => {
      const txtName = document.getElementById('txtName')
      txtName.value = value
    },
    enumerable: true,
    configurable: true
  })

  Object.defineProperty(View.prototype, 'surname', {
    set: value => {
      const txtSurname = document.getElementById('txtSurname')
      txtSurname.value = value
    },
    enumerable: true,
    configurable: true
  })

  return View
})()

const Presenter = (function() {
  function Presenter() {}

  Presenter.prototype.initialize = function(model, view) {
    this.model = model
    this.view = view
    this.view.name = this.model.name
    this.view.surname = this.model.surname
  }

  Presenter.prototype.save = function(data) {
    if (data.name && data.surname) {
      this.model.name = data.name
      this.model.surname = data.surname

      this.view.message = 'Saved'
    } else {
      this.view.message = 'Please, enter name and surname'
    }
  }

  return Presenter
})()

window.onload = function() {
  const model = new Model('John', 'Smith')
  const presenter = new Presenter()
  const view = new View(presenter)

  presenter.initialize(model, view)
}
