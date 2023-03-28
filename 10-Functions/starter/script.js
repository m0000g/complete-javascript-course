'use strict';

const bookings = [];

const createBooking = function (
  flightName,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // Old way to default
  /* numPassangers = numPassangers || 1;
  price = price || 199; */

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
