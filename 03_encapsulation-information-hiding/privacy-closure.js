function TheatreSeats() {
  // private member
  const seats = []
  // public member
  this.maxSize = 10
  // private member
  function getPrivateSeats() {
    return seats
  }
  // privileged member
  this.getPrivilegedSeats = function() {
    return getPrivateSeats()
  }
  // privileged member
  this.placePerson = function(person) {
    seats.push(person)
  }
  // privileged member
  this.countOccupiedSeats = function() {
    return seats.length
  }
}
// public member
TheatreSeats.prototype.getPublicSeats = function() {
  return this.getPrivilegedSeats()
}
// public member
TheatreSeats.prototype.isSoldOut = function() {
  return this.countOccupiedSeats() >= this.maxSize
}
// public member
TheatreSeats.prototype.countFreeSets = function() {
  return this.maxSize - this.countOccupiedSeats()
}

const theatreSeats = new TheatreSeats()

theatreSeats.placePerson({
  name: 'John',
  surname: 'Smith'
})

theatreSeats.placePerson({
  name: 'Kate',
  surname: 'Smith'
})

console.log(theatreSeats.seats)
console.log(theatreSeats.isSoldOut())
console.log(theatreSeats.countFreeSets())

// console.log(theatreSeats.getPrivateSeats()) // throw error
console.log(theatreSeats.getPrivilegedSeats())
console.log(theatreSeats.getPublicSeats())
