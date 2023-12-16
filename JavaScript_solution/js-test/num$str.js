// console.log (Number.isInteger(100.5))

// /*
//   Number Challenge
// */

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.round(Math.min(a,b,c,d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a**Math.floor(d)); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round (d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));

// // Use Variables b + d To Get This Valus
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil(Math.floor(b)/Math.ceil(d))); // 67 => Number

//-----------------------------------

// string challenge
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(`${a.slice(2,6).charAt(0).toUpperCase()}${a.slice(3,6)}`); // Zero

// // 8 H
// console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// // Return Array
// console.log(a.split(" ",1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substring (0,6)} ${a.substring (11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
// console.log(`${a.substring(0,1).toLowerCase()}${a.substring(1,a.length-1).toUpperCase()}${a.slice(-1).toLowerCase()}`); // eLZERO WEB SCHOOl



//--------------------------------------

// console.log("osama"==="ahmad");  false
// console.log(typeof"osama"===typeof"ahmad");  true


//-----------------------------------------

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

// console.log( -d * +e); // 2000
// console.log( ++e*++g + ++f + -d ); // 173


//----------------------------------------

// let num = "10";

// // Solution One
// console.log(num* (true+true)); // 20

// // Solution Two
// console.log("Write Your Code Here"); // 20

// // Solution Three
// console.log("Write Your Code Here"); // 20

// // Solution Four
// console.log("Write Your Code Here"); // 20

//-------------------------------------------

// let num = 3;
// // Solution One
// console.log( num * (true + true)); // 6

// // Solution Two
// console.log(num + (true+true+true)); // 6

// // Soultion Three
// console.log( num*num - num); // 6

// // Soultion Four
// console.log(num+num++); // 6

// // Solution Five
// console.log(++num +true ); // 6

// // Solution Six
// console.log(++num); // 6



//---------------------------------------------


// )
// let a = 21;
// let b = 20;

// console.log("_"+a+"_"+(a.toString()+b.toString()+"_").repeat(3)+a+"_"); // _21_2021_2021_2021_20_

// Add Variables Here

// Ouput
// let numberOne = "10";
// let numberTwo = "20";
// console.log(numberOne+numberTwo); // Normal Concatenate => 1020
// console.log(typeof (numberOne+numberTwo)); // Normal Concatenate => String
// console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

// console.log(numberTwo+"\n"+numberOne);
/*
  Normal Concatenate
  20
  10
*/

// console.log(`${numberTwo}
// ${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// Replace ? With Arithmetic Operators
// console.log(10 / 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0




