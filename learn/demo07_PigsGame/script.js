'use strict';
//$ lấy các đối tượng
/**
 * Button Roll Dice class = '.btn btn--roll'
 * Đối tượng Image Dice image class = '.dice' link src  = "dice-5.png"
 * Button HOLD clas = 'btn btn--hold'
 * Điểm của Player 1: id = 'score--0'
 * Điểm số CURRENT của PLAYER 1 id = 'current--0'
 * Điểm của Player 2: id = 'score-1'
 * Điểm số CURRENT của PLAYER 2 id= 'current--1'
 * Button NEW game class = 'btn btn--new'
 * Secction PLAYER 1 active class = "player player--0 player--active"
 * Secction PLAYER 2 active class = "player player--1"
 */

//! Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Same way use for element ID
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); //How get src and chang src image
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// console.log(btnNew);

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // hidden object
let currentScore = 0; // Declare a current Score update when roll dice
let active = 0;
let dice = 0;
const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');
// console.log(sectionPlayer0, sectionPlayer1);
newGame();
changeSwitchActive(active);

//! rolling dice functionality
btnRoll.addEventListener('click', function () {
  // console.log('Roll a dice!!!');
  //1. Generating a random dice roll
  dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice

  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled One: if True, switch to next player
  if (dice != 1) {
    currentScore += dice;
  } else {
    console.log(active);
    active = active == 1 ? 0 : 1;
    dice = 0;
    currentScore = 0;
    changeSwitchActive(active);
  }
  setScorePlayer(active, currentScore);

  if (active == 0 && Number(currScore0El.textContent) + currentScore >= 20) {
    sectionPlayer0.classList.add('player--winner');
    currScore0El.textContent = Number(currScore0El.textContent) + currentScore;
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
  } else if (
    active == 1 &&
    Number(currScore1El.textContent) + currentScore >= 20
  ) {
    sectionPlayer1.classList.add('player--winner');
    currScore1El.textContent = Number(currScore1El.textContent) + currentScore;
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
  }
});

// Function change active player--active switch next player
function changeSwitchActive(active) {
  if (active === 0) {
    // console.log('Active Player 1');
    sectionPlayer0.classList.add('player--active');
    sectionPlayer1.classList.remove('player--active');
    score1El.textContent = 0;
  } else {
    // console.log('Active Player 2');
    sectionPlayer0.classList.remove('player--active');
    sectionPlayer1.classList.add('player--active');
    score0El.textContent = 0;
  }
  dice = 0;
  currentScore = 0;
}

function setScorePlayer(active, currScore) {
  if (active === 0) {
    score0El.textContent = currScore;
  } else {
    score1El.textContent = currScore;
  }
}

btnHold.addEventListener('click', function () {
  if (active == 0) {
    currScore0El.textContent = Number(currScore0El.textContent) + currentScore;
    score0El.textContent = 0;
  } else {
    currScore1El.textContent = Number(currScore1El.textContent) + currentScore;
    score1El.textContent = 0;
  }
  active = active == 1 ? 0 : 1;
  changeSwitchActive(active);
});

// function newGame
function newGame() {
  diceEl.classList.add('hidden'); // hidden object
  currentScore = 0; // Declare a current Score update when roll dice
  active = 0;
  dice = 0;
  score0El.textContent = currentScore;
  score1El.textContent = currentScore;
  currScore0El.textContent = currentScore;
  currScore1El.textContent = currentScore;
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
}

btnNew.addEventListener('click', function () {
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
  newGame();
  active = 0;
});

//Kiểm tra console.log
console.log('Kiểm tra');
