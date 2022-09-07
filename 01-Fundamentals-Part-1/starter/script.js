/*

// Values and Variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let years = 3;
let $function = 27;
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
 */

// Data Types

/* let javascriptIsFun = true;
console.log("javascriptIsFun value: " + javascriptIsFun);
console.log("javascriptIsFun typeof: " + typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!'; // changing the value, do not use let
console.log("javascriptIsFun value: " + javascriptIsFun);
console.log("javascriptIsFun typeof: " + typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// bug - error in JS, not corrected for legacy reasons.
console.log(typeof null) */

// Declaring variables

/* let age = 30;
age = 31; //mutated the variable.

const birthDay = 1998;
birthDay = 1990;

// const job; //Uncaught SyntaxError: Missing initializer in const declaration
var job = 'programmer';
job = 'teacher'; */

// Operator

/* // Mathematical operations
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2 / 10, 2 ** 3);
// 2 ** 3 means two to the power of 3 -> 2 * 2 * 2

// Concatenation of strings
const firstName = 'Jonas';
const lastName = 'Schmedtman';
console.log(firstName + ' ' + lastName);

// Assigment operator
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operator
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */


// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); // left to right, the resulting in 10
let x, y // Two empty values
x = y = 25 - 10 - 5; // substraction first, left to right then the assigment.
console.log(x, y);

// Average age
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

