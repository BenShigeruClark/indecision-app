
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

const me = new Person('Benjamin Clark', 46);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());