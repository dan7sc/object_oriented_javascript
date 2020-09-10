const Model = (function() {
  function Model(name, surname) {
    this.name = name
    this.surname = surname
  }

  return Model
})()

const View = (function() {
  function View(modelView) {
    const self = this
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const btnSave = document.getElementById('btnSave')
    const btnReset = document.getElementById('btnReset')

    self.modelView = modelView
    txtName.value = modelView.name
    txtSurname.value = modelView.surname

    btnSave.onclick = () => {
      self.save()
    }

    btnReset.onclick = () => {
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

  View.prototype.setMessage = function(message) {
    const divMessage = document.getElementById('divMessage')
    divMessage.innerHTML = message
  }

  View.prototype.save = function() {
    const txtName = document.getElementById('txtName')
    const txtSurname = document.getElementById('txtSurname')
    const data = {
      name: txtName.value,
      surname: txtSurname.value
    }

    this.modelView.save(data, this.setMessage)
  }

  return View
}())

const ViewModel = (function() {
  function ViewModel(model) {
    this.model = model
  }

  Object.defineProperty(ViewModel.prototype, 'name', {
    get: function() {
      return this.model.name
    }
  })

  Object.defineProperty(ViewModel.prototype, 'surname', {
    get: function() {
      return this.model.surname
    }
  })

  ViewModel.prototype.save = function(data, callback) {
    if(data.name && data.surname) {
      this.model.name = data.name
      this.model.surname = data.surname

      if(callback) {
        callback('Saved!')
      }
    }
    else {
      if(callback) {
        callback('Please, enter name and surname')
      }
    }
  }

  return ViewModel
}())

window.onload = function() {
  const model = new Model('John', 'Smith')
  const viewModel = new ViewModel(model)
  const view = new View(viewModel)
}
