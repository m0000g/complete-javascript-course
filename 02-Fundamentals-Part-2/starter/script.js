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