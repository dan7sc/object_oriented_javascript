const TheatreSeats = (function() {
  const priv = new WeakMap()
  const _ = function(instance) {
    return priv.get(instance)
  }

  function TheatreSeatsConstructor() {
    const privateMembers = { seats: [] }

    priv.set(this, privateMembers)
    this.maxSize = 10
  }

  TheatreSeatsConstructor.prototype.placePerson = function(person) {
    _(this).seats.push(person)
  }

  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
    return _(this).seats.length
  }

  TheatreSeatsConstructor.prototype.isSoldOut = function() {
    return _(this).seats.length >= this.maxSize
  }

  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
    return this.maxSize - _(this).seats.length
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
