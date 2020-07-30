const IdGenerator = (function() {
  let instance
  let counter = 0

  return class {
    constructor() {
      if (!instance) {
        instance = this
      }

      return instance
    }

    newId() {
      return ++counter
    }
  }
})()

const idGen = new IdGenerator()

console.log(idGen.newId())
console.log(idGen.newId())

const id2Gen = new IdGenerator()

console.log(id2Gen.newId())
