// task --------------------------- one

// Correct the syntax error

//  [ 1, 7 , 9 , 45 ]

//  ["Str" ,"alex","moh"]

//  ['the','fox', 'over' ,`lazy`, 'dog' ]

// task --------------------------- two

// What the index of "Banana","Tomato"

// var fruits=["Tomato","Banana","Watermelon"]
// console.log(fruits.indexOf("Banana"))
// console.log(fruits.indexOf("Tomato"))

// task --------------------------- three
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// var myFavorite =[[`one` , `two` , `three` , `four` , `five`] ,[`swim`,`football`,`basketball`],[1,2,3,4]]
// console.log(myFavorite)

// task --------------------------- four
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(arr1){
//     return arr1[0]
// }
// let x=firstOfArray([1,4,5])
// console.log(x)
// console.log(firstOfArray(["t","u","g","x"]))

// task --------------------------- five
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// function lastOfArray(arr1){
//     return arr1[arr1.length-1]
// }
// let x=lastOfArray([1,4,5])
// console.log(x)
// console.log(lastOfArray(["t","u","g","x"]))

// task --------------------------- six
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var array = [0,5,7,9]
// array.shift();
// array.shift();
// array.shift();
// console.log(array)
// array.push(10);
// array.unshift(1,3,4,6,8);
// console.log(array)

// task --------------------------- siven
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5,9,-7,3.5]

// //add element to the end
// array2.push(8,9);   
// console.log(array2)

// //add element to the first
// array2.unshift(2)     
// console.log(array2)

// //remove first element
// array2.shift()
// console.log(array2)

// //remove end element
// array2.pop()
// console.log(array2)


// task --------------------------- 8

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function middleOfArray(arr1){
//     let num1 = Math.floor((arr1.length + 1) / 2);
//     let num2 = Math.ceil((arr1.length + 1) / 2);
//     return arr1.slice(num1 - 1, num2);}
// let x = middleOfArray([1,4,5])
// console.log(x)
// console.log(middleOfArray(["t","u","g","x"]))

// function middleOfArray(arr1){
//     if (arr1.length % 2 == 0){

//         return arr1.splice((arr1.length/2)-1,2) 

//     }
//     else {
//         return arr1[Math.floor(arr1.length/2)] 
//     }
// }

// console.log(middleOfArray(["t","u","g","x"]))
// console.log(middleOfArray([1,4,5]))


// task --------------------------- 9

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// task --------------------------- 10

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// var nums= [1,2,3,8,9]
// function indexOfArray(nums){
// return nums
// }
// console.log(indexOfArray(nums[3]))
// console.log(indexOfArray(nums[1]))
// console.log(indexOfArray(nums[4]))

// task --------------------------- 11

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// var nums= [1,2,3,8,9]

// function arrayExceptLast(nums){
//     nums.pop()
//     return nums
// }
// console.log(arrayExceptLast(nums) )


// task --------------------------- 12

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// var nums= [1,2,3,8,9]
// function addToEnd (nums,x){
//     nums.push(x);
//     return nums

// }
// console.log(addToEnd(nums,55))

// task --------------------------- 13

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// var nums= [1,2,3,8,9]
// function sumArray(nums){
//   let sum=0;
// for (let i = 0; i<nums.length ;i++ ){
// sum+=nums[i]
// }
// return sum;
// }
// let x = sum;
// console.log(x)


// task --------------------------- 14


// task --------------------------- 15


// task --------------------------- 16


// task --------------------------- 17


// task --------------------------- 18


// task --------------------------- 19


// task --------------------------- 20


// task --------------------------- 21


// task --------------------------- 22