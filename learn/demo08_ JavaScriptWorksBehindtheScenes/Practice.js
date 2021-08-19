'use strict';

//! Scope Practices
console.log('========Scope Practices============');

//? Practice 1
function calcAge(birthYear) {
  let age = 2037 - birthYear;
  console.log(firstName);
  //   console.log(lastName);//!Error Cannot access 'lastName' before initialization
  function printAge() {
    let output = `You are ${age}, born in ${birthYear}.`; // Find variable age,birthYear in parent scope
    console.log(output); //! output: You are 46, born in 1991.

    if (birthYear >= 1981 && birthYear <= 1996) {
      //Created new variable same name as outer function
      const firstName = 'Steven';
      const str = `${firstName} are millennial!!!`; //? Change Steven are millennial!!!
      var millennialStr = `Oh, you are millennial,${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      var add2 = function (a, b) {
        return a + b;
      };
      //   console.log(output);
      let output = 'New OUTPUT'; //! 1. Check ouput here: You are 46, born in 1991.
      // output = 'New OUTPUT'; //Not reDeclare new Same Name : New OUTPUT
    }

    console.log('1. Check ouput here:', output); //! 1. Check ouput here: You are 46, born in 1991.

    //   console.log(str);//! Error
    console.log(millennialStr); //? Still call millennialStr when declare by Var out scope function
    //   add(2, 3); //! Uncaught ReferenceError: add is not defined when "Use Strict" Mode -> removed "use strict" mode can run it.
    console.log(add2(2, 3)); //? Still reUsed function when declare by Var but declare by Function not can reUse ==> when
    console.log('2. Check ouput here:', output); //! Change output value to: New OUTPUT
  }
  printAge();
  console.log('3. Check ouput here:');
  //   console.log(output);// output is not defined

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
const lastName = 'Thomas'; // Declare before call function make a error.

// console.log(age); //! Error
// printAge(); //! Error can not call back child scope

//! hosting in javascript
console.log('========hosting in javascript=======');
