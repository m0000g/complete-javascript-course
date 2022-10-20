'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startedIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngridient, ...otherIngridient) {
    console.log(mainIngridient);
    console.log(otherIngridient);
  },
};

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
