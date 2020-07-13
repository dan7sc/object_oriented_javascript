const person = {
  name: 'John',
  surname: 'Smith',
  address: {
    street: '13 K. Street',
    city: 'London',
    country: 'United Kingdom'
  },
  showFullName() {
    return `${this.name} ${this.surname}`
  }
}

console.log(person)
console.log(person.showFullName())
