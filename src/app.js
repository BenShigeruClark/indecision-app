// import './utils.js';
// import { square, add } from './utils.js';

// console.log('app.js is running you fool!');
// console.log(square(4));
// console.log(add(100, 23));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console 
import './person.js';
import { isAdult, canDrink } from './person.js';


console.log(isAdult(18));
console.log(isAdult(15));
console.log(canDrink(3));
console.log(canDrink(21));