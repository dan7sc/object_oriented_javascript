function Person(name, surname) {
  this.name = name
  this.surname = surname
}

const myMixin = {
  getFullName: function() {
    return `${this.name} ${this.surname}`
  }
}

function extend(destination, source) {
  for (const methodName in source) {
    if (source.hasOwnProperty(methodName)) {
      destination[methodName] = source[methodName]
    }
  }
  return destination
}

extend(Person.prototype, myMixin)

const john = new Person('John', 'Smith')
console.log(john.getFullName())

const otherMixin = {
  getInvertedFullName: function() {
    return `${this.surname} ${this.name}`
  }
}

Object.assign(Person.prototype, otherMixin)

const luk = new Person('Luk', 'Smith')
console.log(john.getInvertedFullName())

function improvedExtend(destination, source, ...methodNames) {
  if (methodNames) {
    for (const methodName of methodNames) {
      if (source.hasOwnProperty(methodName)) {
        destination[methodName] = source[methodName]
      }
    }
  } else {
    for (const methodName in source) {
      if (source.hasOwnProperty(methodName)) {
        destination[methodName] = source[methodName]
      }
    }
  }
  return destination
}

const namingMixin = {
  getName: function() {
    return `${this.name}`
  },
  getSurname: function() {
    return `${this.surname}`
  },
  getFullName: function() {
    return `${this.name} ${this.surname}`
  }
}

const movingMixin = {
  goLeft: function() {
    return 'moving to left'
  },
  goRight: function() {
    return 'moving to right'
  },
  goReturn: function() {
    return 'returning'
  }
}

const studyingMixin = {
  readTopic: function() {
    return 'reading topic'
  },
  writeTopic: function() {
    return 'writing topic'
  },
  repeatTopic: function() {
    return 'repeating topic'
  },
  cleanTopic: function() {
    return 'cleaning topic'
  }
}

improvedExtend(Person.prototype, namingMixin, 'getFullName')
improvedExtend(Person.prototype, movingMixin, 'goLeft', 'goRight')
improvedExtend(Person.prototype, studyingMixin, 'readTopic', 'writeTopic', 'repeatTopic')

const mary = new Person('Mary', 'Smigal')
// console.log(mary.name()) // throw error
console.log(mary.getFullName())
console.log(mary.goLeft())
console.log(mary.goRight())
// console.log(mary.goReturn()) // throw error
console.log(mary.readTopic())
console.log(mary.writeTopic())
console.log(mary.repeatTopic())
// console.log(mary.cleanTopic()) // throw error
