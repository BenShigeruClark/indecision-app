// arguments objecgt - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 2, 445));


// this keyword - no longer bound

const user = {
  name: 'Benjamin',
  cities: ['Huntington Beach', 'California', 'Long Beach'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of numbers
  numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
  // multiplyBy - single number
  multiplyBy: 5,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());