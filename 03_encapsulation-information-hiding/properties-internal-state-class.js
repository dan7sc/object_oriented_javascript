const Person = (function() {
  'use strict'

  const priv = new WeakMap()
  const _ = function(instance) {
    return priv.get(instance)
  }

  class PersonClass {
    constructor() {
      const privateMembers = {
        emais: ''
      }
      priv.set(this, privateMembers)
      this.name = ''
      this.surname = ''
    }

    get fullName() {
      return `${this.name} ${this.surname}`
    }


    set fullName(value) {
      const parts = value.toString().split(' ')
      this.name = parts[0] || ''
      this.surname = parts[1] || ''
    }

    get email() {
      return _(this).email
    }

    set email(value) {
      const emailRegExp = /\w+@\w+\.\w{2,4}/i
      if (emailRegExp.test(value)) {
        _(this).email = value
      } else {
        throw new Error('Invalid email address')
      }
    }
  }

  return PersonClass
})()

const john = new Person('John', 'Smith')
console.log(john)

john.fullName = 'John Smith'
john.email = 'john@email.com'

console.log(john.name)
console.log(john.surname)
console.log(john.fullName)
console.log(john.email)
