'use strict';

// Functions High-order function vs Call back function

const oneWord = function (str) {
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

['Hugo', 'Paco', 'Luis'].forEach(high5);

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
