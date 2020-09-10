class Model {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

class View {
  constructor(presenter) {
    const self = this
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.presenter = presenter

    btnSave.onclick = () => self.save()

    btnReset.onclick = () => self.clear()
  }

  clear() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const divMessage = document.getElementById('divMessage')

    txtName.value = ''
    txtSurname.value = ''
    divMessage.innerHTML = ''
  }

  set message(message) {
    const divMessage = document.getElementById('divMessage')
    divMessage.innerHTML = message
  }

  set name(value) {
    const txtName = document.getElementById('txtName')
    txtName.value = value
  }

  set surname(value) {
    const txtSurname = document.getElementById('txtSurname')
    txtSurname.value = value
  }

  save() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')

    const data = {
      name: txtName.value,
      surname: txtSurname.value
    }

    this.presenter.save(data)
  }
}

class Presenter {
  initialize(model, view) {
    this.model = model
    this.view = view

    this.view.name = this.model.name
    this.view.surname = this.model.surname
  }

  save(data) {
    if (data.name && data.surname) {
      this.model.name = data.name
      this.model.surname = data.surname

      this.view.message = 'Saved'
    } else {
      this.view.message = 'Please, enter name and surname'
    }
  }
}

window.onload = function() {
  const model = new Model('John', 'Smith')
  const presenter = new Presenter()
  const view = new View(presenter)

  presenter.initialize(model, view)
}
