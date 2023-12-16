/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

// let arr1=[2, 5, 100]
// let arr=arr1.map(function (ele){

//     return ele*2
// })

// console.log(arr);

//-------------------------------------------
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
    // let arr1=[2, 5, 100]
    // let arr=arr1.map(function (ele){

    //     return ele.toString()
    // })

    // console.log(arr);
  
//-------------------------------------------
/*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
  
//  let arr1=["john", "JACOB", "jinGleHeimer", "schmidt"]
//     let arr=arr1.map(function (ele){
// str=ele.toLowerCase();
// str1=ele.substring(0,1).toUpperCase()+str.substring(1);
//         // return `${ele.substring(0,1).toUpperCase}${ele.substring(1,ele.length-1).toLowerCase}`
//         return str1
//     })

//     console.log(arr);
    

//-------------------------------------------
/*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  
//  let namesOnly=[
//      {
//            name: "Angelina Jolie",
//            age: 80
//        },
//        {
//           name: "Eric Jones",
//            age: 2
//        },
//        {
//            name: "Paris Hilton",
//            age: 5
//        },
//       {
//           name: "Kayne West",
//            age: 16
//        },
//        {
//            name: "Bob Ziroll",
//            age: 100
//       }
//        ]; 
//     let arr=namesOnly.map(function (ele){

//         return ele.name
//     })

//     console.log(arr);
   
//-------------------------------------------

/*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
//  let makeStrings=[
//      {
//            name: "Angelina Jolie",
//            age: 80
//        },
//        {
//           name: "Eric Jones",
//            age: 2
//        },
//        {
//            name: "Paris Hilton",
//            age: 5
//        },
//       {
//           name: "Kayne West",
//            age: 16
//        },
//        {
//            name: "Bob Ziroll",
//            age: 100
//       }
//        ]; 

//        function makeStrings1(ele){
//         if (ele.age > 5){
//             ele= `${ele.name} ${"can go to The Matrix"}`
//         }else {
//             ele= `${ele.name} ${"is under age!!"}`
        
//         }
//         return ele
//             }  
//     let arr1=makeStrings.map( makeStrings1);
    

//     console.log(arr1);
   
//-------------------------------------------

/*
   * Exercise 6:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
//  let readyToPutInTheDOM=[
//      {
//            name: "Angelina Jolie",
//            age: 80
//        },
//        {
//           name: "Eric Jones",
//            age: 2
//        },
//        {
//            name: "Paris Hilton",
//            age: 5
//        },
//       {
//           name: "Kayne West",
//            age: 16
//        },
//        {
//            name: "Bob Ziroll",
//            age: 100
//       }
//        ]; 

     
       
//     let arr=readyToPutInTheDOM.map(function (ele){

//         return `<h1>${ele.name}</h1> <h2>${ele.age}</h2>`
//     })

//     console.log(arr);  

//-------------------------------------------


  /*
  * Exercise 7:
  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
  *
  * Test Cases:
  *   Test Case 1:  doubleValues([1,2,3]) 
  *   Test Case 2:  doubleValues([1,-2,-3])  
  *
  * Result:
  * Test Case 1: [2,4,6] 
  * Test Case 2: [2,-4,-6]
  */
//   let arr1=[1, 2, 3]
//   let arr2=[1,-2,-3]

//   function doubleValues(ele){
//     return ele*2

//   }
//   let arr=arr1.map(doubleValues)


// console.log(arr);
// console.log(arr2);

//-------------------------------------------

/*
    * Exercise 8:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */
    
//   let arr1=[1, 2, 3]
//   let arr2=[1,-2,-3]

//   function valTimesIndex(ele,index){
//     return ele*index

//   }
//   let arr=arr1.map(valTimesIndex)


// console.log(arr);
// console.log(arr2);

//-------------------------------------------


/*
* Exercise 9:
* Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
* of that key in each object.
* 
* Test Case:
* extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
* 
* Result:
* ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    // your code here 
    }
     
//-------------------------------------------

 /*
    * Exercise 10:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    */
    let extractFullName = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}] // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
 
 let arr=extractFullName.map (function(ele){
    return `${ele.first} ${ele.last}  `
 })
 console.log(arr)
//     function extractFullName(){
//     // your code here 
//  }