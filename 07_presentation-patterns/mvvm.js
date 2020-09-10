class Model {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

class View {
  constructor(modelView) {
    const self = this
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.modelView = modelView

    txtName.value = modelView.name
    txtSurname.value = modelView.surname

    btnSave.onclick = function() {
      self.save()
    }

    btnReset.onclick = function() {
      self.clear()
    }
  }

  clear() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const divMessage = document.getElementById('divMessage')

    txtName.value = ''
    txtSurname.value = ''
    divMessage.innerHTML = ''
  }

  setMessage(message) {
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

    this.modelView.save(data, this.setMessage)
  }
}

class ViewModel {
  constructor(model) {
    this.model = model
  }

  get name() {
    return this.model.name
  }

  get surname() {
    return this.model.surname
  }

  save(data, callback) {
    if(data.name && data.surname) {
      this.model.name = data.name
      this.model.surname = data.surname

      if(callback) {
        callback('Saved!')
      }
    } else {
      if(callback) {
        callback('Please, enter name and surname')
      }
    }
  }
}

window.onload = function() {
  const model = new Model('John', 'Smith')
  const viewModel = new ViewModel(model)
  const view = new View(viewModel)
}
