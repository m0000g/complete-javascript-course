'use strict';

// SCOPING PRACTICE

/* function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating a new variable with the same name as the outer scoe's ariable
      output = 'NEW OUTPUT';
      const firstName = 'Steven';
      const str = `Oh, and you are a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.str();
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calAge(1991);

functionDeclaration();
function functionDeclaration() {
  console.log(`This is a Function Declaration`);
}
// You can call them before they are "Defined" thanks to hoisting

// functionExpression();
const functionExpression = function () {
  console.log(`This is a Function Expression`);
};
functionExpression();
// You can't call them before defining the variable, not being hoisted.
 */

// TEMPORAL DEAD ZONE, LET AND CONST

/* 
const myName = `Jonas`;
if (myName == `Jonas`) {
  // TEMPORAL DEAD ZONE FOR job VARIABLE
  console.log(`Jonas is a ${job}`); // ReferenceError: Cannot access 'job' before intialization
  const age = 2037 - 1989;
  console.log(age);
  // TEMPORAL DEAD ZONE FOR job VARIABLE

  const job = `teacher`;
  console.log(x); // ReferenceError: x is not defined.
}
 */

/* console.log(me);
console.log(job); // Error
console.log(year); // Error

var me = `Jonas`;
let job = `teacher`;
const year = 1991;
 */

// FUNCTIONS

/* console.log(addDecl(2, 3));
console.log(addExpr(2, 3)); // Error, can't access lexical declaration before initialization
console.log(addArrow(2, 3)); // Error

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
 */
/* console.log(addExpr(2, 3)); // Error, is not a function.
console.log(addArrow(2, 3)); // Error, is not a function.

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; */

// EXAMPLE
/* console.log(numProducts);
if (!numProducts) {
  dleteShoppingCart();
}
// Products get deleted even if numProducts is 10
// Because the value is initially undefined.

var numProducts = 10;

function dleteShoppingCart() {
  console.log(`All products deleted!`);
}
 */

// EXAMPLE 2
/* 
var x = 1;
let y = 2;
const z = 3;

// Variable x inside window object because we use var to declare it.

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
 */

// THIS Keyword
/* 
const jonas = {
  name: `Jonas`,
  year: 1989,
  calcAge: function () {
    return 2037 - this.year;
  },
};
console.log(jonas.calcAge()); // 48
 */

// SAMPLE THIS KEYWORD

/* console.log(this); // Window Object

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991); // Undifined in strict mode, and window object in sloppy

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrow(1980); // Arrow function uses the lexical this keyword, meaning the parent scope.

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calAge(); // Jonas object.

// Is the object, calling the method.
// it doesn't mean that it has to be inside the method.

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge; // Method borrowing.
matilda.calAge();

const f = jonas.calAge;
f(); // Can't read year - undefined, it's a function, not an object.
 */

// REGULAR FUNCTIONS VS ARROW FUNCTIONS

// var firstName = 'Matilda';
// do not use var, this will add a
// firstName to the window object
/* 
const jonas = {
  firstName: `Jonas`,
  year: 1989,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // selft of that
    // const isMillenian = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996); does not work
    // };
    // isMillenian();

    // Solution 2
    const isMillenian2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenian2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey! ${this.firstName}`);
  },
  greet2: function () {
    console.log(this);
    console.log(`Hey! ${this.firstName}`);
  },
};

jonas.greet(); // Hey! undefined =>
// An arrow funcion will not get its own keyword.
// Uses the This keyword of its sorroundings.
// The parent of greet method is the global scope.
// That is an object literal.

console.log(this.firstName);
// In the window object there is no firstName method.
// Hence, undefined.

jonas.greet2(); // Works

jonas.calcAge();
// Uses a solution to use this inside isMillenian2
// Arrow function uses "This" keyword from parent function.
// In the parent scope the this keyword is "Jonas" */

// ARGUMENTS KEYWORD
/* const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 6, 6); // you can add more arguments!

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5); // arguments are not available in arrow functions
 */

// PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
// Primitives are numbers, strings, booleans.

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
