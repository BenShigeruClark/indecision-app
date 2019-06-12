'use strict';

// arguments objecgt - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 2, 445));

// this keyword - no longer bound

var user = {
  name: 'Benjamin',
  cities: ['Huntington Beach', 'California', 'Long Beach'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  // numbers - array of numbers
  numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
  // multiplyBy - single number
  multiplyBy: 5,
  // multiply - return a new array where the numbers have been multiplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return _this2.multiplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
