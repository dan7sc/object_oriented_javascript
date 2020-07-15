const person = {}

Object.defineProperty(
  person,
  'name',
  {
    value: 'John',
    writable: false, // true => can be change its value
    configurable: false, // true => can be redefined and deleted
    enumerable: false // true => can be enumerable
  }
)

console.log(person)
console.log(person.name)
person.name = 'Ted'
console.log(person.name)
delete person.name
console.log(person.name)
for (let k in person) console.log(k)

console.log('********')



const Person = (function() {
  const priv = new WeakMap()
  const _ = function(instance) {
    return priv.get(instance)
  }

  function PersonConstructor() {
    const privateMembers = {
      email: ''
    }
    priv.set(this, privateMembers)
    this.name = ''
    this.surname = ''
  }

  Object.defineProperty(
    PersonConstructor.prototype,
    'fullName',
    {
      get: function() {
        return `${this.name} ${this.surname}`
      },
      set: function(value) {
        const parts = value.toString().split(' ')
        this.name = parts[0] || ''
        this.surname = parts[1] || ''
      }
    }
  )

  Object.defineProperty(
    PersonConstructor.prototype,
    'email',
    {
      get: function() {
        return _(this).email
      },
      set: function(value) {
        const emailRegExp = /\w+@\w+\.\w{2,4}/i
        if (emailRegExp.test(value)) {
          _(this).email = value
        } else {
          throw new Error('Invalid email address')
        }
      }
    }
  )

  return PersonConstructor
})()


const john = new Person()
console.log(john)

john.fullName = 'John Smith'
john.email = 'john@email.com'

console.log(john.name)
console.log(john.surname)
console.log(john.fullName)
console.log(john.email)
