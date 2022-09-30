'use strict';

// DOM MANIPULATION

/* console.log(document.querySelector('.message').textContent);
document.querySelector(`.message`).textContent = 'Corect number 💃';
console.log(document.querySelector('.message').textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 20;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
 */

// EVENT LISTENER

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
// document.querySelector('.score').textContent = score;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No imput
    document.querySelector('.message').textContent = '🙊 No number!';
  } else if (guess === secretNumber) {
    // Player wings
    document.querySelector('.message').textContent = '🎉 Corect Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess >= secretNumber) {
    // Guess too high
    if (score > 1) {
      document.querySelector('.message').textContent = '😮 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess <= secretNumber) {
    // Guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '🥱 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// TODO: Score 0 means you can't play again.
