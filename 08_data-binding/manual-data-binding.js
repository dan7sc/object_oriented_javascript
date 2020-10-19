window.onload = function() {
  function Person(name , surname) {
    this.name = name
    this.surname = surname
  }

  const person = new Person('John', 'Smith')

  const txtName = document.getElementById('txtName')
  const txtSurname = document.getElementById('txtSurname')

  txtName.value = person.name
  txtSurname.value = person.surname

  const btnSave = document.getElementById('btnSave')

  btnSave.onclick = function() {
    person.name = txtName.value
    person.surname = txtSurname.value
    console.log(person)
  }
}
