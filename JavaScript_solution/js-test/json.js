/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON 
  ===================================================
  = Text Based Format             
  = Lightweight            
  = Does Not Use Tags      
  = Shorter                
  = Can Use Arrays         
  = Not Support Comments   
  ===================================================
*/

//---------------------------------------------------------------


/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/



/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server

// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer);
// console.log(myJsonObjectFromServer);

// // // Convert To JS Object

// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// // // Update Data
// myJsObject["Username"] = "ruba";
// myJsObject["Age"] = 20;

// // // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer);
// console.log(myJsonObjectToServer);



//----------------------------------------------------------------

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous

console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"),3000);
console.log("3");