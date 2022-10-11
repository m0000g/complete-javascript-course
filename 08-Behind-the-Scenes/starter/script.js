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