'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// ENHANCED OBJECT LITERALS sample -> Compute name
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ startedIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngridient, ...otherIngridient) {
    console.log(mainIngridient);
    console.log(otherIngridient);
  },
};

// Strings part 3

console.log('This+String+to+array'.split('+'));
console.log('Gabriela Pérez'.split(' '));
const firstName = 'Gabriela';
const lastName = 'Pérez';
const newName = ['Mrs.', firstName, lastName].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper);
};
const passanger = 'jessica ann smith davis';
capitalizeName(passanger);

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*'));
};
maskCreditCard(5555555555554444);
maskCreditCard('5105105105105100');

// Repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(6));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

// String Methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/* 
// Strings
const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log('B737'.length);

console.log(airplane.indexOf('r'));
console.log(airplane.lastIndexOf('r'));
console.log(airplane.indexOf('Portugal'));
console.log(airplane.indexOf('portugal'));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));

console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle sit');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('22C');
checkMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());
const passangerName = 'jOnas';

const capitalize = function (string) {
  const tempstring = string.toLowerCase();
  console.log(tempstring[0].toUpperCase() + tempstring.slice(1));
};

capitalize(passangerName);

// Comparing emails.
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.io  \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',  ', ',');
console.log(priceUS);

const announcement = 'All passangers come boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boing'));
if (plane2.startsWith('Airb') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

const checkBagage = function (items) {
  const bagage = items.toLowerCase();
  if (bagage.includes('knife') || bagage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBagage('I have a laptop, some food and a pocket knife');
checkBagage('Socks and camera');
checkBagage('Got some snacks and a gun for protection'); */

// More maps
/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);

console.log(question);

// Convert Objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Anser ${key}: ${value}`);
}
const answer = prompt('Your answer');
console.log(answer);

console.log(question.get(Number(answer) === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]); */

// Maps
/* const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Fiorenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear(); // Removes all elements from map.

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size); */

// Sets
// A collection of unique values can't hae any duplicates
/* const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza')); //true
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
for (const order of orderSet) console.log(order); */

//orderSet.clear(); // Clear all elements in the Set
// Sets are commonly used to remove duplicated values from an array.
// Sample
/* const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffNew = [...new Set(staff)];
console.log(staffNew); */

// LOOPING OBJECTS - OBJECTS KEYS, VALUES AND ENTRIES

/* const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); */

// Properties values
/* const values = Object.values(openingHours);
console.log(values);
 */
// Entiere Object
/* const entries = Object.entries(openingHours); */
//console.log(entries);
// [key, value]
/* for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

// OPTIONAL CHAINING
/* // Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // Prevent bugs

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Metods - We can check if the method exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional chaining with arrays
const users = [{ name: 'Jonas', email: 'jonas@io' }];
console.log(users[0]?.name ?? 'User array empty'); */

// LOOPING ARRAYS - THE FOR-OF-LOOP

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); //old way
}

for (const [i, el] of menu.entries()) {
  // Destructuring
  console.log(`${i + 1}: ${el}`);
} */

// LOGICAL ASSIGMENT OPERATORS
/* 
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nulish assigment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2); */

// NULISH COALESING OPERATOR ??

/* restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10; // 10 because 0 is falsy
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // Fixing the problem! */

// SHORT CIRCUITING
// 1. Use any data type
// 2. Return any data type
// 3. Short Circuiting
/* console.log('------ OR ------');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 3); // Hello

// restaurant.numGuest = 23; // will not work with 0, it's a falsy value.
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('----AND---');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

// REST PATTERN AND PARAMETERS
/* 
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); */

// SPREAD OPERATOR
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // Shallow copy of this array.

// Join two arrays or more.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// You can use the spread operator with iterables: arrays, maps, sets, strings (not objects)
const str = "Jonas";
const letters = [...str, "", 5];
console.log(letters);
console.log(...str); // Not posible with a template literal.

// const ingredients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt("Ingridient 2?"),
//   prompt("Ingridient 3?"),
// ];

// restaurant.orderPasta(...ingredients); 

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// DESTRUCTURING OBJECTS.

/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,  
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // destructuring assigment between parenthesis
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Assign different vaiables
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

restaurant.orderDelivery({ address: 'Via del Sole, 21' }); */

/* 
// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Easier with destructiring.
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Received 2 return values from a function.
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// Nested destructuring in a nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// Destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// Used when we get data from an API.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

// More maps
/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);

console.log(question);

// Convert Objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Anser ${key}: ${value}`);
}
const answer = prompt('Your answer');
console.log(answer);

console.log(question.get(Number(answer) === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]); */

// Maps
/* const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Fiorenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear(); // Removes all elements from map.

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size); */

// Sets
// A collection of unique values can't hae any duplicates
/* const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza')); //true
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
for (const order of orderSet) console.log(order); */

//orderSet.clear(); // Clear all elements in the Set
// Sets are commonly used to remove duplicated values from an array.
// Sample
/* const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffNew = [...new Set(staff)];
console.log(staffNew); */

// LOOPING OBJECTS - OBJECTS KEYS, VALUES AND ENTRIES

/* const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); */

// Properties values
/* const values = Object.values(openingHours);
console.log(values);
 */
// Entiere Object
/* const entries = Object.entries(openingHours); */
//console.log(entries);
// [key, value]
/* for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */

// OPTIONAL CHAINING
/* // Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // Prevent bugs

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Metods - We can check if the method exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional chaining with arrays
const users = [{ name: 'Jonas', email: 'jonas@io' }];
console.log(users[0]?.name ?? 'User array empty'); */

// LOOPING ARRAYS - THE FOR-OF-LOOP

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); //old way
}

for (const [i, el] of menu.entries()) {
  // Destructuring
  console.log(`${i + 1}: ${el}`);
} */

// LOGICAL ASSIGMENT OPERATORS
/* 
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assigment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nulish assigment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2); */

// NULISH COALESING OPERATOR ??

/* restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10; // 10 because 0 is falsy
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // Fixing the problem! */

// SHORT CIRCUITING
// 1. Use any data type
// 2. Return any data type
// 3. Short Circuiting
/* console.log('------ OR ------');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 3); // Hello

// restaurant.numGuest = 23; // will not work with 0, it's a falsy value.
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('----AND---');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

// REST PATTERN AND PARAMETERS
/* 
// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); */

// SPREAD OPERATOR
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // Shallow copy of this array.

// Join two arrays or more.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// You can use the spread operator with iterables: arrays, maps, sets, strings (not objects)
const str = "Jonas";
const letters = [...str, "", 5];
console.log(letters);
console.log(...str); // Not posible with a template literal.

// const ingredients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt("Ingridient 2?"),
//   prompt("Ingridient 3?"),
// ];

// restaurant.orderPasta(...ingredients); 

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name); */

// DESTRUCTURING OBJECTS.

/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,  
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // destructuring assigment between parenthesis
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Assign different vaiables
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

restaurant.orderDelivery({ address: 'Via del Sole, 21' }); */

/* 
// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Easier with destructiring.
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Received 2 return values from a function.
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// Nested destructuring in a nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// Destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// Used when we get data from an API.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */
