

//   - Map
//   --- method creates a new array
//   --- populated with the results of calling a provided function on every element
//   --- in the calling array.

//   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array




// Syntax map(callBackFunction(Element[required], Index[opt], Array[opt]) { }, thisArg)

// let myNums = [1, 2, 3, 4, 5, 6];

// // let newArray = [];

// // for (let i = 0; i < myNums.length; i++) {
// //   newArray.push(myNums[i] + myNums[i]);
// // }

// // console.log(newArray);

// // Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
// //   console.log(`Current Element => ${element}`);
// //   console.log(`Current Index => ${index}`);
// //   console.log(`Array => ${arr}`);
//   return element + element;
// });

// console.log(addSelf);


//---------------------------------------
// let x = "groub2"

// console.log(x)
// console.log(x.split(""))

//---------------------------------------------

/*
  Map
  - Swap Cases
*/

// let swappingCases = "GrouB";

// let sw = swappingCases.split("").map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   }).join(",");
//   console.log(sw);


//---------------------------------------------

// let sw = swappingCases.split("").map(function (ele) {
//     // Condition ? True : False
//      if (ele === ele.toUpperCase() ){ 
//           ele=ele.toLowerCase()}
//         else {  ele=ele.toUpperCase();}
//         return ele
        
//   }).join("");

// console.log(sw);
// // console.log(ele); //error because ele in local scope



// Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);


//---------------------------------------------------

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/



// let swappingCases = "elZERo";

// let arr=swappingCases.split("").map(function(ele){
// return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
// }).join("")
// console.log(arr)

// let arr=swappingCases.split("").map((ele) =>  
//  (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() //arrow function
// )).join("")
// console.log(arr)


// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);

//---------------------------------------------------------

// let invertedNumbers = [1, -10, -20, 15, 100, -30];

// let inv = invertedNumbers.map(function(ele){
// return -ele 
// })
// console.log(inv)

//---------------------------------------------------------
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");


//arrow function
// let ign = ignoreNumbers.split("").map((ele) => (isNaN(parseInt(ele)) ? ele : "")).join("");

// console.log(ign);


//---------------------------------------------------


// *** Arrow function ***
// هو من نوع إكسبريشين فنكشن



// 1-Declaration:

// function x(){
//     return 1;
// }
// console.log(x());



// 2-Expression: 

// let x = function(){
//     return 1;
// }
// console.log(x())


// 3-Arrow function:

// let x = () => {
//     return 1;
// }
// console.log(x())

// Or (if i have one line i can write it like this:)
// let x = () =>  1;// Or if i don't have parameter i can write like this: let x = _ => 1;


// 1-Declaration
// function x(num){
//     return num*2;
// }
// console.log(x(5))

// 2-Expression 
// let x = function(num){
//     return num*2;
// }
// console.log(x(5))

// 3-Arrow 
// let x = (num) =>{
//     return num*2
// }
// console.log(x(5))

// let x = (num) => num*2;
// console.log(x(5))

// let x = num => num*2;
// console.log(x(5))

// let x = (num,x) => num*x;
// console.log(x(5,6))


//------------------------------------------------------------------//

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(add);

//---------------------
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {

//     return `${acc}${current}`;
//   });

// console.log(`${finalString.substring(0,1).toLowerCase()}${finalString.substring(1)}`);


//------------------------------------------------------------------//

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });
// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i]);
// // }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// console.log(copyItems)