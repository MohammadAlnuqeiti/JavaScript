// let x =Number(prompt("please inter primary "));
// let y =Number(prompt("please inter additional "));
// let z =20;
// function Sal(userName,primary , additional , bouns) {
//   let salary= primary + additional;
//   let result= salary + bouns;

//   if (result < 300){
// console.log ("iam sorry");
//   }
//   else {
//   console.log(userName+result);}
// }
// Sal("osama",x,y,z)


// console.log(result/2)

// function Sal(primary , additional , bouns) {
//   let salary= primary + additional;
//   let result= salary + bouns;
//    return result;
// }
// let x =Sal(260,65,20);
// console.log (x/2)


// function generateYears (start,end,non){
   
//     for (i=start;i<=end;i++){
//         if (i ==non){
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears (2000,2015,2005)
// functionلحتى نرجع قيمة لل  return  بنستدم ال 
// function calc (num1 , num2){
//    let result=num1+num2
//     return result
// }

// console.log(calc(10,20));

//  للباراميتر  default value  في حال ما كتب المستخدم احدى الباراميتر بتقدر تحدد 
// function hello (userName,age="default"){
//     return `hello ${userName} your age is ${age}`
// }
// console.log(hello(`mohammad`))


// function calc(...numbers){

//     // console.log(Array.isArray (numbers))
//     for (let i=0;i<=numbers.length;i++){
//         console.log(numbers[i]);
//     }
// }
// console.log(calc(10,20,30,40,50,60,70,80,90,100));


// rest parameter
// function calc(userName,...numbers){

//     let result = 0;
//     for (let i=0;i<numbers.length;i++){
//         result +=numbers[i]    }
//         return `${userName} final result is ${result}`
// }
// console.log(calc(`mohammad`,10,20,30,40,50,60,70,80,90,100));

// function showInfo (us="un",ag="un",rt=0,show="yes",...sk){

//     document.write(`<div>`)
    
//     document.write(`<h1> hello : ${us}</h1>`)
//     document.write(`<p> you age is : ${ag}</p>`)
//     document.write(`<p> hour rate is : $${rt}</p>`)

//     if (show === "yes"){
//         if (sk.length>0){
//             for (i=0;i<=sk.length;i++){
//                 document.write(`<p> your skills : ${sk[i]}</p>`)}//في حال كت نعم وهو عنده مهاارات فراح يظهرو مرتبين

//             }
//         // document.write(`<p> your skills : ${sk.join (" | ")}</p>`)}//في حال كت نعم وهو عنده مهاارات فراح يظهرو مرتبين
//             else {
//             document.write(`<p> your skills : no skills</p>`) //في حال كتب نعم وهو اصلا لم يكتب مهارات
//             }
//     }
//     else {  
//         if (sk.length>0){
//             document.write(`<p> your skills : skills is hidden </p>`)}//في حال كتب لا وهو عندة مهارات
//             else {
//                 document.write(`<p> your skills : no skills</p>`) //في حال كتب لا وهو اصلا ما عنده مهارات
//                 }
//     }
   
//     document.write(`</div>`)

// }

// showInfo(`mohammad`,24,15,"yes","html","css","js")


// fuction random challenge fideo 63

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function showDetails(userName,age,status){
  let name = "";
  let agee = 0;
  let active = true;

  if (typeof userName == 'string'){
    name=userName
  }else if (typeof userName == 'number'){
    agee=userName
  }else if (typeof userName==true){
    active=="available"

  }else {
    active="not available"
  }
  if (typeof age == 'string'){
    name=age
  }else if (typeof age == 'number'){
    agee=age
  }else if (typeof age==true){
    active=="available"

  }else {
    active="not available"
  }
  if (typeof status == 'string'){
    name=status
  }else if (typeof status == 'number'){
    agee=status
  }else if (typeof status==true){
    active=="available"

  }else {
    active="not available"
  }
  return `"Hello ${name}, Your Age Is ${agee}, You Are ${active} For Hire"`
}

//   if (typeof userName == 'string'){
//     name = userName;
// } else if (typeof userName == 'number'){
//   agee = userName;
// }else if(userName == true) {
//   active = "Available"
// }else{
//   active = "Not Available"
// }

// if (typeof age == 'string'){
//   name = age;
// } else if (typeof age == 'number'){
// agee = age;
// }else if(age == true) {
//   active = "Available"
// }else{
//   active = "Not Available"
// }

// if (typeof status == 'string'){
//   name = status;
// } else if (typeof status == 'number'){
// agee = status;
// }else if(status == true) {
//   active = "Available"
// }else{
//   active = "Not Available"
// }

// return `"Hello ${name}, Your Age Is ${agee}, You Are ${active} For Hire"`





console.log(showDetails("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(38, "Osama", false));// "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       message = `${message} ${fName} ${lName}`;
//     }
//     concatMsg();
//     return message;
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));
  
//   // Example 2
  
//   function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       return `${message} ${fName} ${lName}`;
//     }
//     return concatMsg();
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));
  
//   // Example 3
  
//   function sayMessage(fName, lName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatMsg() {
//       function getFullName() {
//         return `${fName} ${lName}`;
//       }
//       return `${message} ${getFullName()}`;
//     }
//     return concatMsg();
//   }
  
//   console.log(sayMessage("Osama", "Mohamed"));
//----------------------------------

// task one


// function tellFortune (job_title,
//    geographic_location ,partners_name , number_of_children)
//   { 
//     console.log(`You will be a ${job_title} ${geographic_location} ${partners_name} ${number_of_children}`)

//   }
// tellFortune('software engineer', 'Jordan', 'Alice', 3)

// task two

//  function calculateDogAge (your_puppys_age)
//   { 
// console.log (`"Your doggie is ${your_puppys_age*7}years old in dog years!"`)
//   }
//   calculateDogAge(7)

// task three

//  function calculateSupply ( age , amount_per_day)
//   { 
//     let x = 100 - age
//     let result = x * 365 * amount_per_day
//     console.log (result)
//   }
//   calculateSupply(30, 3);

// task four

//  function greet ( name )
//   { 
    
//     console.log (`"Hello ${name}"`)
//   }
//   greet("Adam")

// task five

// function double(cat) {
//   return 2 * x;
// }
// let x =5;
// console.log

// function double(7) {
//   return 2 * 7;
// }

// function double('7') {
//   return 2 * 'x';
// }

// task six

// fix these functions:
// func double1(x {
//   return 2 * x ;
// }

// function double1(x) {
//   return 2 * x ;
// }

// functiondouble2 x)
// return 2 * x;
// }
// function double2 (x){
// return 2 * x;
// }

// function (x) double3 {
//   return 2 * x;

// function double3 (x){
//   return 2 * x;
// }

// task seven

// function cube(number){
//   console.log(number ** 3)
// }
// cube(4)

// task eight

// function multiply(number1 , number2){
//   console.log(number1 * number2)
// }
// multiply(5,4)

// task nine

// function canIGetADrivingLicense(age){
//   if (age >=20){
//     console.log("yes you can")
//   }
//   else {
//     console.log("please come back after X years to get one")
//   }
// }
// canIGetADrivingLicense(21);
// canIGetADrivingLicense(17);
// canIGetADrivingLicense(20);

// task 10

// function sameLength(string1 , string2){
//   if (string1.length == string2.length){
//     console.log(true)
//   }
//   else {
//     console.log(false)
//   }
// }
// sameLength("tree","clue")
// sameLength("tree","car")

// task 11

// function largerNubmer(number1 , number2){
//   if (number1 > number2){
//     console.log(number1)
//   }
//   else{
//     console.log(number2)
//   }
// }
// largerNubmer(5,6)

// task 12

// function smallerNubmer(number1 , number2, number3){
//  console.log (Math.min(number1 , number2, number3))
// }
// smallerNubmer(8,6,7)
// smallerNubmer(5,99,34)
// smallerNubmer(5,3,3)

// task 13

// function shorterString(st1 , st2, st3, st4 ,st5){

//   if (st1.length <= st2.length && st1.length <= st3.length &&st1.length <= st4.length && st1.length <= st5.length ){
//     console.log (st1)
//   }
//   else if (st2.length <= st1.length && st2.length <= st3.length &&st2.length <= st4.length &&st2.length <= st5.length ){
//     console.log (st2)
//   }
//   else if (st3.length <= st2.length && st3.length <= st1.length && st3.length <= st4.length && st3.length <= st5.length ){
//     console.log (st3)
//   }
//   else if (st4.length <= st2.length && st4.length <= st3.length && st4.length <= st1.length &&st4.length <= st5.length ){
//     console.log (st4)
//   }
//   else{
//     console.log (st5)
//   }

// }
// shorterString("air","school","car","by","github")
// shorterString("air","tr","car","by","github")
// shorterString("by","tr","car","air","github")

// task 14

// function longerString(st1 , st2, st3, st4){
//  console.log (String.length(st1 , st2, st3, st4));
// }
// longerString("air","school","car","github")
// => school

// longerString("air","schoo","car","github")
// => github

// task 15

//  function Even(number1){

// if (number1 % 2 === 0){
//     console.log (true)}
//     else{
//       console.log (false)
//     }
// }
// Even(1)
//  false
// Even(2)
//  true

// task 16
// function isOdd(number1){
// if (number1 % 2 === 0){
//     console.log (false)}
//     else{
//       console.log (true)
//     }

//     }
//      isOdd(4)
//     false
//      isOdd(5)
//   true

// task 17
// function positive(number1){
// console.log (Math.abs(number1) )
//     }
// positive(4)
//   4
// positive(-5)
//   5

// task 18
// function fullName(firstName , lastName){
// console.log ( `"${firstName} ${lastName}"` )
// }
// fullName("Adam","McCallen")
// "Adam McCallen"
// fullName("Alex", "Mercer")
// "Alex Mercer"

// task 19

// function average(num1 ,num2 ,num3 ,num4,num5){
//    let x = num1+num2+num3+num4+num5
//    let average= x / 5
// console.log ( average )
// }
// average(1,2,3,4,5)
// 3

// average(5,7,9,3,5)
// 5.8

// task 20

// function randomNumber(){

// console.log ( Math.random() )
// }
// randomNumber()
// 0.2278

// randomNumber()
// 0.475
// console.log(getRandomInt(100)); //integer number random

// task 21

//  function randomBetweenNumbers(min , max){
// min = Math.ceil(min)
// max = Math.floor(max)

//  console.log (Math.floor(Math.random() * (max - min) + min) )
//  }

// randomBetweenNumbers(1,8)
// 7.5412

// randomBetweenNumbers(3,100)
// 23


// task 22

//  function randomBetweenNumbers(min , max){


//  }