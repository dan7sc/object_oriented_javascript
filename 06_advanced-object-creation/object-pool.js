const ObjectPool = (function() {
  let instance
  let objConstructor
  const objPool = []

  return class {
    constructor(objConstr) {
      if (!instance) {
        objConstructor = objConstr
        instance = this
      }

      return instance
    }

    get() {
      let obj

      if (objPool.length === 0) {
        obj = new objConstructor()
      } else {
        obj = objPool.pop()
      }

      return obj
    }

    recycle(obj) {
      objPool.push(obj)
    }
  }
})()

class Trainer {
  explain() {
    console.log('explaining...')
  }

  show() {
    console.log('showing...')
  }

  exercise() {
    console.log('doing exercise...')
  }
}

const trainerPool = new ObjectPool(Trainer)

const trainer1 = trainerPool.get()
const trainer2 = trainerPool.get()

trainerPool.recycle(trainer1)

const trainer3 = trainerPool.get()

console.log(trainer1 === trainer2)
console.log(trainer1 === trainer3)
