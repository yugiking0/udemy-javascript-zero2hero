// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//live-server --port=8090 : Chay live-server o port 8090 http://127.0.0.1:8090
// live-server --port=3000 --browser=Firefox
// live-server --port=8282 --browser=Chrome

/*
const temparatures = [
  -1,
  -21,
  -9,
  -12,
  0,
  'error',
  9,
  12,
  -23,
  30,
  'error',
  19,
  -1,
  -8,
  12,
  10,
];
// console.log(temparatures);

const calcTempAmplitude = function (temps) {
  //Calc max & min
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (max < temps[i]) {
      max = temps[i];
    }
    if (min > temps[i]) {
      min = temps[i];
    }
  }
  console.log(min, max);
};

calcTempAmplitude(temparatures);
*/

const printForeCast = function (arr) {
  let printLog = '...';
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    printLog += ` ${arr[i]}℃ in ${i + 1} days ...`;
  }
  return printLog;
};

const arr = [12, 5, -5, 0, 4];
// console.log(printForeCast(arr));
console.log('Dinh Quang Duy');
console.warn('Dinh Quang Duy');
console.error('Dinh Quang Duy');
