class Model {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

class View {
  constructor(model, controller) {
    const self = this
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.controller = controller
    txtName.value = model.name
    txtSurname.value = model.surname

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

  save() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')

    const data = {
      name: txtName.value,
      surname: txtSurname.value
    }

    this.controller.save(data)
  }
}

class Controller {
  initialize(model, view) {
    this.model = model
    this.view = view
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
  const controller = new Controller()
  const view = new View(model, controller)

  controller.initialize(model, view)
}
