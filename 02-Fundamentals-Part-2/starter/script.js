'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`); */

// FUNCTIONS
/*
function logger() {
    console.log(`My name is Jonas`);
}
// calling / running / invoking function
logger(23); // arguments is not being used.

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

// FUNCTION DECLARATIONS VS EXPRESSIONS

/* // function declaration
const age1 = calAge1(1991); // introduce the argument.
function calAge1(birthYear) { // inside the parentheses goes the prameter
    return 2037 - birthYear;
}

// function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1991);

console.log(age1, age2);
 */

// ARROW FUNCTION (ES6)
// It is really a function expression, faster to write.
/* const calAge3 = birthYear => 2037 - birthYear;
console.log(calAge3(1979));

const yearsUntilRetirement = (birthYear, retirmentAge) => {
    const age = 2037 - birthYear;
    const retiriment = retirmentAge - age;
    return console.log(`You will be retired in about ${retiriment} years.`);
}
console.log(yearsUntilRetirement(1979, 65));
console.log(yearsUntilRetirement(1983, 65));

 */

// FUNCTIONS CALLING OTHER FUNCTIONS
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePices = cutFruitPieces(oranges);

    const juice = `Juce with ${applePieces} pieces of apple and ${orangePices} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
 */

// REVIEW
/* const calcAge = function (yearFuture, birthYear) {
    return yearFuture - birthYear;
}

const yearsUntilRetirement = function (yearFuture, birthYear, firstName) {
    const age = calcAge(yearFuture, birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} hast already retired 🎉`);
        return -1;
    }


}

console.log(yearsUntilRetirement(2037, 1991, `Jones`));
console.log(yearsUntilRetirement(2037, 1950, `Mike`));

 */


// ARRAYS
/*
const friends = [`Michael`, `Steven`, `Peter`]; // Literal syntax
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

friends[2] = `Jay`;
console.log(friends);
// firneds = [`Bob`, `Alice`]; // Not valid

const firstName = `Jonas`;
const jonas = [firstName, `Schedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[2]);
const age4 = calAge(years[3]);
const age5 = calAge(years[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2]), calAge(years[3]), calAge(years[4])];
console.log(ages);

 */

// Arrays Operations / Methods
/* 
const friends = [`Michael`, `Steven`, `Peter`];
const newLenght = friends.push(`Jay`); // Returns the length of the new array.

console.log(friends);
console.log(newLenght);

friends.unshift(`John`);
console.log(friends);

// Remove elements from the array, last elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Removes first element of the array
friends.shift();
console.log(friends);

// Returns the position of the element.
console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

// includes, returns true if the element exist, false if is doesn't
friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven`);
}
 */

