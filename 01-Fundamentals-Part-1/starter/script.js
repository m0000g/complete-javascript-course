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
/*
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

 */

// Strings and Templates Literals

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// Entering Template Literals.
// Note: we need to use back ticks
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// You can use back ticks to all strings.
console.log(`Just a regular string...`);

// Multiline strings.
// BEFORE
console.log('String with\n\
multiple \n\
lines');

console.log(`String
multiple
lines`); */

// Taking Decisions: if / else Statements

/* const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Yes, it's old enough 😀`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Is not old enoght 😔, she needs to wait another ${yearsLeft} years`);
}

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century); */

// TYPE CONVERSION

/* const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`)); // NaN Not - a valid Number
console.log(typeof NaN);

console.log(String(23), 23);

//  TYPE COERCION - Two values that have different types
// Behind the scenes JS convert one of the values so the operation can be executed.

console.log(`I'm ` + 23 + ` years old.`); // I'm 23 years old.
console.log(`23` - `10` - 3); // 10
console.log(`23` + `10` + 3); // 23103

console.log(`40` / `2`); // 20
console.log(`23` * `2`); // 46

let n = `1` + 1; // 11
n = n - 1; // 10
console.log(n);
 */

// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN -> becoome false after trying to convert them to boolean
// Anything else is truthy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({})); //empty
console.log(Boolean(``)); //empty

const money = 0;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`Yey! Height is defined`);

}
else {
    console.log(`Heigh is UNDEFINED`);
} */

// EQUALITY OPPERATORS == VS ===
/*
const age = '18';

if (age === 18) console.log(`You just became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);

// Getting a value from any web page

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { //'23' == 23
    console.log(`Cool! 23 ius an amazing number!`);

} else if (favorite === 7) {
    console.log(`7 is also a cool number`);
}
else {
    console.log(`Number is not 23 or 7`);
}

if (favorite !== 23) {
    console.log(`Why didn't you choose 23?`);
}

 */

// BASIC BOOLEAN LOGIC: AND, OR & NOT OPERATORS
// Sarah has a driver's license AND good vision
/* 
const age = 16 // 21 are the new 16!
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense); // false

if (hasDriverLicense && hasGoodVision) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive...`);
}

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log(`Someone else should drive...`);
}

 */



