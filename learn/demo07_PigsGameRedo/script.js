'use strict';

// console.log('==============Pig Game!!!==================');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//! 01. Selecting Elements
const score0El = document.querySelector('#score--0'); //querySelector
const score1El = document.getElementById('score--1'); //getElementByID
const current0El = document.getElementById('current--0'); // Current Score
const current1El = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const diceEl = document.querySelector('.dice');

const switchPlayer = function () {
  //   console.log('Switch next player!');
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};
//! 02. Starting conditions
let scores = [0, 0];
let dice = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  //- Hidden Dice when New game
  scores = [0, 0];
  dice = 0;
  playing = true;
  currentScore = 0;
  activePlayer = 0;

  diceEl.classList.add('hidden');

  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
};
init();
//! 03. Rolling dice functionality when click ROLL DICE
btnRoll.addEventListener('click', function () {
  if (playing) {
    // console.log('Click Roll Dice!!!');
    // 1.Generating a random rolled Dice
    dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    // 2.Display Dice (Unhidden dice)
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3.Check for roll 1: if true, then switch next player
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore; // CHANGE LATER
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to Total Scores
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //scores[0] = scores[0] + currentScore
    // 2.Check Total Scores >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      //if true, Finish the Game player--winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //   btnHold.classList.add('hidden');
      //   btnRoll.classList.add('hidden');
    } else {
      //Switch next Player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
