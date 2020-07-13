/***** overloading *****/
function sum(x = 0, y = 0, z = 1) {
  return x + y + z
}
console.log(sum())
console.log(sum(x = 1, y = 4))

/***** parametric polymorphism *****/
function Stack() {
  this.stack = []

  this.pop = function() {
    return this.stack.pop()
  }

  this.push = function(item) {
    return this.stack.push(item)
  }
}

const numberStack = new Stack()
numberStack.push(1)
numberStack.push(3)
numberStack.push(5)
numberStack.pop()
console.log(numberStack.stack)

const stringStack = new Stack()
stringStack.push('book')
stringStack.push('notebook')
stringStack.push('table')
stringStack.pop()
console.log(stringStack.stack)

/***** subtype polymorphism *****/
function Person() {
  this.name = ''
  this.surname = ''
}

function Programmer() {
  this.knowLanguage = ''
}
Programmer.prototype = new Person()

function writeFullName(p) {
  console.log(`${p.name} ${p.surname}`)
}

const a = new Person()
a.name = 'John'
a.surname = 'Smith'


const b = new Programmer()
b.name = 'Mario'
b.surname = 'Corleone'
b.knownLanguage = 'JavaScript'

writeFullName(a)
writeFullName(b)
