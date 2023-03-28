'use strict';

const flight = 'LH234';
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
console.log(jonas);

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
