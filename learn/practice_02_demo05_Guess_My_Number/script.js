'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.guess').textContent);
// console.log(document.querySelector('.highScore').textContent);
const toNumber = 100;
document.querySelector('.between').textContent = `(Between 1 and ${toNumber})`;
let scoreNumber = toNumber / 4;
document.querySelector('.score').textContent = scoreNumber;
const pushMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 100) + 1;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    pushMessage('🚏 Not a number.');
  } else if (guessNumber == secretNumber) {
    pushMessage('🥇 You are Win.');
    if (scoreNumber > document.querySelector('.highScore').textContent) {
      document.querySelector('.highScore').textContent = scoreNumber;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30REM';
  } else if (guessNumber != secretNumber) {
    scoreNumber--;
    if (scoreNumber > 0) {
      pushMessage(guessNumber > secretNumber ? '📈 Too high.' : '📉 Too low.');
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      pushMessage('🛑 You lost a game.');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#d2691e';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  scoreNumber = toNumber / 4;
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  pushMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15REM';
});
