'use strict';

// Functions - Passing arguments value vs reference.

// Functions - Default parameter

/* const bookings = [];

const createBooking = function (
  flightName,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // Old way to default
  //numPassangers = numPassangers || 1;
  //price = price || 199;

  const booking = {
    flightName,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 4);
createBooking('Lh123', undefined, 1000);
 */

// Functions value vs reference

/* const flight = 'LH234';
const jonas = {
  name: 'Maria Perez',
  passport: 123123123343412,
};

const checkIn = function (flightNumber, passanger) {
  flightNumber = 'LH999';
  passanger.name = 'Mrs. ' + passanger.name;
  if (passanger.passport === 123123123343412) {
    console.log('Checkin');
  } else {
    console.log('Wrong passwport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas); */

// Return functions within functions
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Carol');

greet('Hello')('Jonas');

// Rewriting the functions above into arrow functions

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Que tal!')('Mae'); */

// Functions High-order function vs Call back function

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Hugo', 'Paco', 'Luis'].forEach(high5); */

// The Call and apply methods
const avianca = {
  airline: 'Avianca',
  iataCode: 'AV',
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.booking.push({
      flight: `${this.iataCode}${flightNumber}`,
      name: `${name}`,
    });
  },
};

avianca.book(354, 'Gabriela Pérez');
avianca.book(635, 'Gabriela Perozo');
console.log(avianca);

const eurowings = {
  airline: 'Eurowins',
  iataCode: 'EW',
  booking: [],
};

// Re-using a method, copy to a function then use call
// Call first value is this, then you can pass the rest
// book = (666, 'Sarah Connors'); Does not work

const book = avianca.book;
book.call(eurowings, 555, 'Pablito Pérez');
console.log(eurowings);
book.call(avianca, 666, 'Sarah Connor');
console.log(avianca.booking);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 999, 'Pablo Marmol');
console.log(swiss);

// Apply method
// First argument, the 'this' object, second argument an array of data

const flightData = [583, 'Bradly Copper'];
book.apply(swiss, flightData);
// book.call(swiss, ...flightData); Same!
console.log(swiss);

// Bind method
// Return a new function where the this keyword is bound

const bookEW = book.bind(eurowings);
const bookAV = book.bind(avianca);
const bookSW = book.bind(swiss);
bookEW(444, 'Jerry Lugocci');

// You can also bind a function with a default argument

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Maria Mercedes');
console.log(eurowings);

// With event listeners
avianca.planes = 300;
avianca.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', avianca.buyPlane.bind(avianca));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVTA = addTax.bind(null, 0.23); // First parameter null is for this, we do not care about this
// Same as addVTA = value => value + value *0.23;

console.log(addVTA(100));
console.log(addVTA(23));

/* const addTaxRate = function (rate) {
  return function (value) {
    const output = value + value * rate;
    console.log(output);
  };
}; */

const addTaxRate = rate => value => console.log(value + value * rate);

const addVTA2 = addTaxRate(0.23);

addVTA2(100);
addVTA2(23);
