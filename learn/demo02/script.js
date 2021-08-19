'use strict';
//Function Declarations
/*
const Age1 = calcAge1(1985);

function calcAge1(birthYear)
{
  return 2037 - birthYear;
}
// Age1 = calcAge1(1985);
// console.log(Age1);

//Function Expression
//const calcAge2 = calcAge2(1985);//Khong cho phep nam truoc dinh nghia
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const Age2 = calcAge2(1985); //Phai nam sau dinh nghia

console.log(Age1, Age2);
*/
/*
const now = 2021;
//1. Function Delaration
function calcAge1(birthYear, nowYear) {
  return nowYear - birthYear;
}

//2. Function Expression
const calcAge2 = function (birthYear, nowYear) {
  return nowYear - birthYear;
};

//3. Function Arrow
const calcAge3 = (birthYear, nowYear) => nowYear - birthYear;
const Age3 = calcAge3(1985, now);
// console.log(Age3);

const yearUntilRetirement = (birthYear, nowYear) => {
  const age = nowYear - birthYear;
  const yearRetire = 65 - age;
  return yearRetire;
};
// console.log(yearUntilRetirement(1985, 2021));

const calcAge4 = (birthYear, fistName) => {
  const Age = 2021 - birthYear;
  const yearRetire = 65 - Age;
  const yearInRetire = 2021 + yearRetire;
  return `I'm ${fistName} will being retired in ${yearInRetire}`;
};

console.log(calcAge4(1985, 'Quang Duy'));
console.log(calcAge4(1988, 'Bao'));


function cut(fruit) {
  return fruit * 4;
}

function fuitProcess(apples, oranges) {
  const applesPieces = cut(apples);
  const orangesPieces = cut(oranges) / 2;
  const juice = `Juice with ${applesPieces} pieces of Apple and ${orangesPieces} pieces of Orange.`;
  return juice;
}

console.log(fuitProcess(2, 3));


const calcAge4 = (birthYear, fistName) => {
  const Age = 2021 - birthYear;
  const yearRetire = 65 - Age;
  const yearInRetire = 2021 + yearRetire;
  return `I'm ${fistName} will being retired in ${yearInRetire}`;
};

const ageYear = function (birthYear) {
  return 2021 - birthYear;
};

const yearUntilRetirement = function (birthYear, fistName) {
  const age = ageYear(birthYear);
  const yearRetire = 65 - age;
  const yearInRetire = 2021 + yearRetire;
  return `I'm ${fistName} will being retired in ${yearInRetire}`;
};

console.log(yearUntilRetirement(1991, 'Jonas'));
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 totals, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//TEST DATA 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return 'Dolphins and Koalas is draws this time!!!!';
  }
}

console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));

//TEST DATA 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));
*/
/*
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];

friends.push('Jay');
friends.unshift('Tim');
console.log(friends);

var Array01 = ['Polaris', 'Deneb', 'Vega'];
Array01.push('Sun');
Array01.unshift('Moon');
console.log(Array01);

Array01.pop();
console.log(Array01);
Array01.pop();
console.log(Array01);
*/
/*
//1.calcTip
const bill = 44;
function calcTip(bill) {
  let tip = (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
  return tip;
}
console.log(calcTip(bill));
//2.tips
let bills = [125, 555, 44];
let tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[bills.length - 1]));
console.log(tips);
//3.totals
let totals = new Array();
totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
//totals.push(bills[2] + tips[2]);
totals.push(bills[bills.length - 1] + tips[tips.length - 1]);
console.log(totals);
*/

// const getName = (name) => console.log(name);
// getName('Dinh Quang Duy!!!!');

// const getYearOld = (yearBirth, now) =>
//   console.log(`Vao nam ${now} thi ban duoc ${now - yearBirth} tuoi!!!`);

// getYearOld(1985, 2021);

// alert('Tôi là Đinh Quang Duy');
/*
const nhapSo = 897;

function nghichDao(a) {
  const x = parseInt(a / 100);
  const y = parseInt((a % 100) / 10) * 10;
  const z = parseInt(a % 10) * 100;
  return x + y + z;
}

const outPut = nghichDao(nhapSo);
console.log(outPut);

const duyArray = [
  'Dinh',
  'Quang Duy',
  'Male',
  1985,
  2021 - 1985,
  'IT Support',
  ['Micheal', 'Peter', 'Steven'],
];
console.log(duyArray);

const duy = {
  fistName: 'Dinh',
  lastName: 'Quang Duy',
  gioiTinh: 'Male',
  birthYear: 1985,
  age: 2021 - 1985,
  job: 'IT Support',
  friends: ['Micheal', 'Peter', 'Steven'],
};

//console.log(duy);
console.log(duy.fistName);
console.log(duy['fistName']);

const keyName = 'Name';
console.log(duy['fist' + keyName]);
console.log(duy['last' + keyName]);

//console.log(duy.fist + keyName); //Error
//console.log(duy.('fist' + keyName));//Error

const interestedIn = prompt(
  'What do you want to know about Duy, chosse fistName, lastName, age, job and friends:'
);

console.log(duy.interestedIn); ///Error underfined
console.log(duy[interestedIn]);

const duy = {
  fistName: 'Dinh',
  lastName: 'Quang Duy',
  gioiTinh: 'Male',
  birthYear: 1985,
  age: 2021 - 1985,
  job: 'IT Support',
  friends: ['Micheal', 'Peter', 'Steven'],
};

const stringFriend = `Duy have ${duy.friends.length} friends and the best friend is ${duy.friends[0]}`;
console.log(stringFriend);

console.log(
  `${duy.lastName} has ${duy.friends.length} friends, and his best friend is ${duy.friends[0]}.`
);


const Jonas = {
  lastName: 'Jonas',
  fistName: 'Schedmand',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven'],
  isDrivingLicense: false,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  calcSummary: function () {
    return `${this.fistName} is a ${this.calcAge()} year old ${this.job}, he has ${this.isDrivingLicense?'a':'no'} driver's license.`;
  },
};

// console.log(Jonas.calcAge1(1991));
// console.log(Jonas['calcAge1'](1991));
console.log(Jonas.calcAge());
console.log(Jonas.age); //Neu khong chay Jonas.calcAge thi se Undefined

console.log(Jonas.calcSummary());


//Coding Challenge #3
const Mark ={
  firstName : 'Mark',
  lastName : 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.BMI = this.mass/this.height**2;
    return this.BMI;
  }
}
const John ={
  firstName : 'John',
  lastName : 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass/this.height**2;    return this.BMI;
  }
}

if(Mark.calcBMI()>John.calcBMI()){
  console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.calcBMI()}) is higher than ${John.firstName} ${John.lastName}'s BMI (${John.calcBMI()})`);
} else if(Mark.calcBMI()<John.calcBMI()){
  console.log(`${John.firstName} ${John.lastName}'s BMI (${John.calcBMI()}) is higher than ${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.calcBMI()})`);
} else{
  console.log(`${John.firstName} ${John.lastName} and ${Mark.firstName} ${Mark.lastName} have draw BMI, they are (${Mark.calcBMI()})`);
}
*/
// console.log('Lifting weights repetation 1 🗽');
// console.log('Lifting weights repetation 2 🗽');
// console.log('Lifting weights repetation 3 🗽');
// console.log('Lifting weights repetation 4 🗽');
// console.log('Lifting weights repetation 5 🗽');
// console.log('Lifting weights repetation 6 🗽');
// console.log('Lifting weights repetation 7 🗽');
// console.log('Lifting weights repetation 8 🗽');
// console.log('Lifting weights repetation 9 🗽');
// console.log('Lifting weights repetation 10 🗽');
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetation ${rep} 🗽`);
// }
// let x = 19;
// for (let i = 2; i <= 20; i++){
//   console.log('Kiem tra!!!!!');
// }
// let y = x => 100 - x;

// const Jonas = [
//   'Jonas',  //fistName
//   'Smith',  //lastName
//   2037 - 1991,//yearOld
//   'teacher',  //job
//   ['Micheal', 'Peter', 'Steven'],//friends
//   true
// ];
// let types = [];
// for (let i = 0; i < Jonas.length; i++){
//   //reading jonas array
//   console.log(Jonas[i], typeof (Jonas[i]));
//   //fill types array
//   // types[i] = typeof (Jonas[i]);
//   types.unshift(Jonas[i]);
// }
// console.log(types);

// const years = [1985, 1991, 2004, 2018];
// const ages = [];
// for (let i = 0; i < years.length;i++){
//   ages[i] = 2037 - years[i];
// }
// console.log(ages);
//continue and break
/*
for (let i = 0; i < Jonas.length; i++){
  console.log(Jonas[i], typeof (Jonas[i]));
}
console.log('------ONLY STRING--------');
for (let i = 0; i < Jonas.length; i++){
  if (typeof (Jonas[i]) !== 'string') continue;
  console.log(Jonas[i], typeof (Jonas[i]));
}

console.log('------BREAK NUMBER--------');
for (let i = 0; i < Jonas.length; i++){
  if (typeof (Jonas[i]) === 'number') break;
  console.log(Jonas[i], typeof (Jonas[i]));
}

//For Loop
const jonas = [
  'Jonas',
  'Smith',
  2037 - 1991,
  'teacher',
  ['Micheal', 'Peter', 'Steven'],
  true
];
for (let i = jonas.length - 1; i >= 0; i--){
  console.log(i,jonas[i], typeof (jonas[i]));
}

for (let rep = 1; rep <= 3; rep++)
{
  console.log(`-----Start exerciser ${rep}------------`);
  for(let i = 1; i <= 5; i++) {
    console.log(`Lefting weights repetition ${i} 💥💥💢.`);
  }
  console.log(`-----End exerciser ${rep}--------------`);
}
*/
//Loop
// console.log('------------For Loop');
// for (let rep = 1; rep <= 10; rep++)
// {
//   console.log(`Lefting weights repetition ${rep} 🏅.`)
// }

// console.log('------------While Loop');
// let rep = 1;
// while (rep<=10)
// {
//   console.log(`Lefting weights repetition ${rep} 🏅.`)
//   rep++;
// }
// console.log(rep);
/*
//Random Dice
let dice = Math.trunc(Math.random() * 6) + 1;
let i = 1;
let sum = 0;
// console.log(dice);
while (dice !== 6 || i===1) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(i, `You rolled a ${dice}`);
  sum = sum + dice;
  i++;
}
console.log(`Total before ${i-1} rolled is ${sum}.`);
*/
/*
//Roll 2 Dice Vietnam Game
let dice1 = Math.trunc(Math.random() * 6) + 1;
let dice2 = Math.trunc(Math.random() * 6) + 1;
let rollDice = 1;
let sum = 0;

while (((dice1 == 1 && dice2 == 1) || (dice1 == 6 && dice2 == 6) || (dice1 == 6 && dice2 == 1) || (dice1 == 1 && dice2 == 6) || (dice1 === dice2)) || rollDice === 1) {
  dice1 = Math.trunc(Math.random() * 6) + 1;
  dice2 = Math.trunc(Math.random() * 6) + 1;
  console.log(rollDice, `You rolled : ${dice1} and ${dice2}.`);
  sum = sum + dice1 + dice2; 
  rollDice++;
}
console.log(`Total before ${rollDice-1} rolled is ${sum}.`);
*/
//Coding Challenge 3
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

/*
//Cach 1
let a = bills.length;
function calctips1() {
  for (let i = 0; i <= a-1; i++){
    tips[i] = bills[i] * .01;
    tips[i] = (bills[i] >= 50) & (bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.2;
    totals[i] = bills[i] + tips[i];
  }
  return;
}
calctips1();
*/
/*
//Cach 2
function calcTip2(bill) {
  let tip = (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
  tips.push(tip);
  totals.push(tip+bill)
  return;
}
for (let i = 0; i <= bills.length - 1;i++){
  calcTip(bills[i]);
}
*/
/*
//Cach 2
function calcTip(bill) {
  let tip = (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
  tips.push(tip);
  totals.push(tip+bill)
  return;
}
for (let i = 0; i <= bills.length - 1;i++){
  calcTip(bills[i]);
}
*/
function calcTip(bill) {
  return (bill >= 50) & (bill <= 300) ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i <= bills.length - 1;i++){
  // tips.push(calcTip(bills[i]));
  // totals.push(bills[i] + calcTip(bills[i]));
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length-1;i++){
    sum = sum + arr[i];
  }
  //console.log(sum);
  return sum / arr.length;
}
//calcAverage([2,3,4]);
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
// console.log(calcAverage(bills),calcAverage(tips),calcAverage(totals));