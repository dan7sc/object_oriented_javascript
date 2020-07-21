function Person(name, surname) {
  this.name = name
  this.surname = surname
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments)
  this.knownLanguage = knownLanguage
}

function Student(name, surname, subjectOfStudy) {
  Person.apply(this, arguments)
  this.subjectOfStudy = subjectOfStudy
}

function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
  Developer.call(this, name, surname, knownLanguage)
  Student.call(this, name, surname, subjectOfStudy)
}

const john = new DevStudent('John', 'Smith', 'Javascript', 'Haskell')
console.log(john.knownLanguage)
console.log(john.subjectOfStudy)
