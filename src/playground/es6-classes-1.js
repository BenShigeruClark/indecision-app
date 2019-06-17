
// Setup constructor to take name and age (default to 0)
// getDescription - Benjamin Clark is 46 year(s) old.


class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${ this.name }!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Benjamin Clark. I'm visiting from Huntington Beach.
// 2. Hi. A am Benjamin Clark.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Benjamin Clark', 46,'Huntington Beach');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());