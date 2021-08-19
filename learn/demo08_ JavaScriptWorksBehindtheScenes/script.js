'use strict';

// console.log('=====Hello Javascript Revisted====');
// var Circle = require('./Circle');

/* var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));
 */

/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

/* function transform(arr) {
  // your code here
  return arr.map(function (x) {
    let b = 0;
    switch (x) {
      case 'A':
        b = 1;
      case 'a':
        b = 1;
        break;
      case 'B':
        b = 2;
      case 'b':
        b = 2;
        break;
      default:
        break;
    }
    return b;
  });
}

console.log(transform(['A', 'b', 'a', 'B', 'd']));
console.log(transform(['A', 'b', 'v', 'B', 'd']));
console.log(transform(['*', 'b', 'a', '#', 'd'])); */

//! Scope Practices
console.log('========Scope Practices============');
//$ Demo 01
/* const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
};

function second() {
  var c = 2;
  return c;
}
console.log(first()); */

//$ Demo 02
/* const name = 'Jonas';

function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var milenium = true;
  }

  function second() {
    const job = 'teacher';
    milenium = false;
    console.log(`My name is ${name} ${age}, ${job} ${milenium}`);
  }
  second();
  console.log(milenium);
}
first(); */

//$ Demo 03
//! Remember Call Stack
/* const a = 'Jonas';

function first() {
  const b = 'Hello!';

  second();

  function second() {
    const c = 'Hi!';
    console.log(a, b); //? Still allow call b
    //Jonas Hello!

    thirst();
  }
}

function thirst() {
  const d = 'Hey!';
  console.log(b); //! Error: b is not defined
  console.log(c); //! Error: c is not defined
  // console.log(a + b + c + d);  //! Error: Uncaught ReferenceError: b is not defined
  console.log(a, d);
  // Jonas Hey!
}
first(); //! Error Uncaught ReferenceError: b is not defined */
/**
 * Call Stack <Order Call>
 * 1. Global EC
 * - a = 'Jonas'
 * - first()
 * - thirst()
 * 2. first() EC
 * - b = 'Hello!'
 * - second()
 * 3. second() EC
 * - c = 'Hi!'
 * 4. thirst() EC
 * - d = 'Hey!'
 */
