function TheatreSeats() {
  this._seats = []
}

TheatreSeats.prototype.placePerson = function(person) {
  this._seats.push(person)
}

const theatreSeats = new TheatreSeats()

theatreSeats.placePerson({
  name: 'John',
  surname: 'Smith'
})

console.log(theatreSeats._seats)
