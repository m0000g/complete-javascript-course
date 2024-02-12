'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

// Array Methods
/* // SLICE = Do not change the array

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.slice(2);
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // Really 2 and 3
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // To assign an array, the whole array.
console.log([...arr]); // Also by using the spread operator. To create a shallow copy.


// SPLICE = Mutates the array

//console.log(arr.splice(2)); // Use to remove elements from an array
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT: Concatenate two arrays
let letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Same with the spread operator

// JOIN
console.log(letters.join('-')); // Join all the strings in an array with that separator
 */

// AT

/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element.
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

// Also works with strings
console.log('jonas'.at(0));
console.log('jonas'.at(-1)); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
// The order always should be current element, current index and the entired array
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});
 */

// forEach with maps
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
});
 */

// Maps

/*
const eurToUSD = 1.1;
const movementsUSD = account1.movements.map(function (mov) {
  return mov * eurToUSD;
}); */

/* const eurToUSD = 1.1;
const movementsUSD = account1.movements.map(mov => mov * eurToUSD);

console.log(account1.movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of account1.movements) movementsUSDfor.push(mov * eurToUSD);
console.log(movementsUSDfor);

const movementDescriptions = account1.movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'wirthdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions); */

// Map vs forEach sample

/* const user = 'Steven Thomas Williams'; //stw initials in lowercase

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts); */

// FILTER

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Showing only the withdrawals
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Reduce, accumulator is like a Snowball
// acc accumulator
// cur current value
/* const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Uteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); */

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
