const IdGenerator = (function() {
  let instance
  let counter = 0

  let Constructor = function() {
    if (!instance) {
      instance = this
    }

    return instance
  }

  Constructor.prototype.newId = function() {
    return ++counter
  }

  return Constructor
})()

const idGen = new IdGenerator()

console.log(idGen.newId())
console.log(idGen.newId())

const id2Gen = new IdGenerator()

console.log(id2Gen.newId())
