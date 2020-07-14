const TheatreSeats = (function() {
  // static local variable
  // const seats = []

  // static local variables shared among all object instancesf
  const priv = {}
  let id = 0

  function TheatreSeatsConstructor() {
    // public member
    this.id = id++
    this.maxSize = 10

    priv[this.id] = {}
    priv[this.id].seats = []
  }

  TheatreSeatsConstructor.prototype.placePerson = function(person) {
    priv[this.id].seats.push(person)
  }

  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
    return priv[this.id].seats.length
  }

  TheatreSeatsConstructor.prototype.isSoldOut = function() {
    return priv[this.id].seats.length >= this.maxSize
  }

  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
    return this.maxSize - priv[this.id].seats.length
  }

  return TheatreSeatsConstructor
})()

const t1 = new TheatreSeats()
const t2 = new TheatreSeats()

t1.placePerson({ name: 'John', surname: 'Smith' })
t1.placePerson({ name: 'Kate', surname: 'Smith' })
t2.placePerson({ name: 'Mike', surname: 'Smith' })

console.log(t1.countFreeSeats())
console.log(t2.countFreeSeats())
