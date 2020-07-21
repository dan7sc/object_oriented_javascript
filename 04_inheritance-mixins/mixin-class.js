class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }
}

function mixNamingWith(superclass) {
  return class extends superclass {
    getFullName() {
      return `${this.name} ${this.surname}`
    }
  }
}

function mixMovingWith(superclass) {
  return class extends superclass {
    goLeft() {
      return 'moving to left'
    }
    goRight() {
      return 'moving to right'
    }
  }
}

function mixStudyingWith(superclass) {
  return class extends superclass {
    readTopic() {
      return 'reading topic'
    }
    writeTopic() {
      return 'writing topic'
    }
    repeatTopic() {
      return 'repeating topic'
    }
  }
}

class ExtendedPerson extends mixNamingWith(
  mixMovingWith(
    mixStudyingWith(
      Person
    )
  )
) {}

const john = new ExtendedPerson('John', 'Smith')
console.log(john)
console.log(john.getFullName())
console.log(john.goLeft())
console.log(john.goRight())
console.log(john.readTopic())
console.log(john.writeTopic())
console.log(john.repeatTopic())
