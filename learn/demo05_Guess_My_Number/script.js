'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.between').textContent);
//label-score, score
console.log(document.querySelector('.label-score').textContent);
console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.label-highScore').textContent);
console.log(document.querySelector('.highScore').textContent);
*/
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🧧 You correct number!';
console.log(document.querySelector('.message').textContent);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let gameScore = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  //When input is not number
  if (!guessNumber) {
    //document.querySelector('.message').textContent = '🚏 It not a number!';
    displayMessage('🚏 It not a number!');
    //When player win
  } else if (guessNumber == secretNumber) {
    //Change style CSS
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '9rem';
    // document.querySelector('.message').textContent = '🧧 You correct number!';
    displayMessage('🧧 You correct number!');
    if (document.querySelector('.highScore').textContent < gameScore) {
      document.querySelector('.highScore').textContent = gameScore;
    }
    //When guess is wrong
  } else if (guessNumber != secretNumber) {
    if (gameScore > 1) {
      // document.querySelector('.message').textContent =
      //   guessNumber > secretNumber ? '📈 Too high.' : '📉 Too low.';
      displayMessage(
        guessNumber > secretNumber ? '📈 Too high.' : '📉 Too low.'
      );
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = '🛑 You lost a game.';
      displayMessage('🛑 You lost a game.');
    }
  }
  //   //When guess too hight
  // } else if (guessNumber > secretNumber) {
  //   document.querySelector('.message').textContent = '📈 Too high.';
  //   gameScore--;
  //   document.querySelector('.score').textContent = gameScore;
  //   if (gameScore <= 0) {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '🛑 You lost a game.';
  //   }

  //   ///When guess too low
  // } else if (guessNumber < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 Too low.';
  //   gameScore--;
  //   document.querySelector('.score').textContent = gameScore;
  //   if (gameScore <= 0) {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = '🛑 You lost a game.';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15REM';
  document.querySelector('.guess').textContent = '';
  gameScore = 20;
  document.querySelector('.score').textContent = gameScore;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
