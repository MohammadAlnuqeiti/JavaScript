// task ------------------ one


// function tellFortune (job_title,
//    geographic_location ,partners_name , number_of_children)
//   { 
//     console.log(`You will be a ${job_title} ${geographic_location} ${partners_name} ${number_of_children}`)

//   }
// tellFortune('software engineer', 'Jordan', 'Alice', 3)

// console.log(6555..toString())
// console.log(-('1111'))
// task ------------------ two

// 1 == 1 ? console.log('true') : console.log('false')

// let theAge=111;

// theAge<20 ? console.log('small') : theAge>20 && theAge <60 ? console.log('medium') : theAge > 60 ? console.log('large') : console.log('not found');

//  function calculateDogAge (your_puppys_age)
//   { 
// console.log (`"Your doggie is ${your_puppys_age*7}years old in dog years!"`)
//   }
//   calculateDogAge(7)



// task ------------------ three


//  function calculateSupply ( age , amount_per_day)
//   { 
//     let x = 100 - age
//     let result = x * 365 * amount_per_day
//     console.log (result)
//   }
//   calculateSupply(30, 3);



// task------------------ four



//  function greet ( name )
//   { 
    
//     console.log (`"Hello ${name}"`)
//   }
//   greet("Adam")


// task ------------------ five


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

// task ------------------ six


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


// task ------------------ seven


// function cube(number){
//   console.log(number ** 3)
// }
// cube(4)

// task ------------------ eight

// function multiply(number1 , number2){
//   console.log(number1 * number2)
// }
// multiply(5,4)


// task ------------------ nine


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

let arr = [
    [1,2,3,0],
    [1,0,3,5],
    [1,2,3,4],
    [1,2,3,4],
    [0,2,3,4],
]

    let row=[]
    let ind=[]
    for(let i = 0 ; i<arr.length;i++){
        for(let j = 0 ; j<arr[i].length;j++){
            if(arr[i][j]==0){
                row.push(i)
                ind.push(j)
            }
        }
    }


function result(arr,row,ind){

    for(let i = 0 ; i < arr.length ; i++){
        if(row.indexOf(i) != -1){
            for(let j = 0 ; j<arr[i].length;j++){
                arr[i][j]=0
            }
        }else{
            for(let j = 0 ; j<arr[i].length;j++){
                if(ind.indexOf(j) != -1){
                    arr[i][j]=0
                }

            }
        }
    }
    return arr
}
console.log(result(arr,row,ind));

// task ------------------ 10
function high(x){
  
    alphabetMap = {}
    for(let i = 'a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
      alphabetMap[i] = j;
    }
    let words = x.toLowerCase().split(" ")

    let result = []
    for (let i = 0 ; i < words.length ; i++){
      let count = 0
      for(let j = 0 ; j < words[i].length ; j++){
          
          let num = words[i][j].charCodeAt()
          
          count += alphabetMap[num]
          
        }
        result.push([words[i] , count])
    }
    
    //   let finish = ""
    let score = 0
    for(let i = 0 ; i < result.length ; i++ ){
        
        let x = result[i][1]
        if (x > score) {
            
            score = x
            
        }
    }
      for(let i = 0 ; i < result.length ; i++){
        if(result[i][1]==score){
         return result[i][0]
        }
      }
      
      
      
    
  
  }
  console.log(high("abad aaqqqqqsss"))



  ////////////////////////////


  function longChar(s){

    s = s.toLowerCase().split("")
    let result = {}
    let max = 0
    let maxLetter = ''


    for(let i = 0 ; i < s.length ; i++){
        if(result[s[i]]){
            result[s[i]]++
        }else{
            result[s[i]]=1  
        }

        if(result[s[i]] > max){
            maxLetter=s[i]
            max=result[s[i]]

        }
    }

    return [max , maxLetter]

  }

  console.log(longChar("asedssafffffffffrwaaa"));




//   function duplicateEncode(word){
//     let x = word.split("")
//     let result =[]

//     for(let i = 0 ; i < x.length ; i++){
//        n = 0 
//     for(let j = 0 ; j < x.length ; j++){
//         if(x[i]==x[j]){
//           n+=1
//         }
//       }
//       if(n == 1){
//         result.push("(")
//       }else{
//             result.push(")")
    
//       }
//     }

  
//   return result.join("")
// }
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
console.log(duplicateEncode("Success"));




function rot13(message){
  
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  
  
    let x = message.split("")
    console.log(x);
    for(let i = 0 ; i < x.length ; i++){
      
      if(/[a-zA-Z]/.test(x[i])){
        x[i] = cipher[originalAlpha.indexOf(x[i])]
      }

      if(x[i] == ' '){
          console.log("ss");
        x.splice(i,1)
      }
      
    }
    console.log(x);
  // arr = x.filter(v=>v!='');
    return x.join("")
  }

  console.log(rot13('Ruby is cool!'));
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


// task ------------------ 11


// function largerNubmer(number1 , number2){
//   if (number1 > number2){
//     console.log(number1)
//   }
//   else{
//     console.log(number2)
//   }
// }
// largerNubmer(5,6)


// task ------------------ 12


// function smallerNubmer(number1 , number2, number3){
//  console.log (Math.min(number1 , number2, number3))
// }
// smallerNubmer(8,6,7)
// smallerNubmer(5,99,34)
// smallerNubmer(5,3,3)


// task ------------------ 13


// function shorterString(st1 , st2, st3, st4 ,st5){
//  console.log (String.length(st1 , st2, st3, st4 ,st5));
// }
// shorterString("air","school","car","by","github")
// shorterString("air","tr","car","by","github")
// shorterString("by","tr","car","air","github")

// task ------------------ 14

// function longerString(st1 , st2, st3, st4){
//  console.log (String.length(st1 , st2, st3, st4));
// }
// longerString("air","school","car","github")
// => school

// longerString("air","schoo","car","github")
// => github


// task ------------------ 15

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


// task ------------------ 16


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


// task ------------------ 17


// function positive(number1){
// console.log (Math.abs(number1) )
//     }
// positive(4)
//   4
// positive(-5)
//   5


// task ------------------ 18


function fullName(firstName , lastName){
console.log ( `"${firstName} ${lastName}"` )
}
fullName("Adam","McCallen")
"Adam McCallen"
fullName("Alex", "Mercer")
"Alex Mercer"


// task ------------------ 19


// function average(num1 ,num2 ,num3 ,num4,num5){
//    let x = num1+num2+num3+num4+num5
//    let average= x / 5
// console.log ( average )
// }
// average(1,2,3,4,5)
// 3

// average(5,7,9,3,5)
// 5.8


// task ------------------ 20


// function randomNumber(){

// console.log ( Math.random() )
// }
// randomNumber()
// 0.2278

// randomNumber()
// 0.475
// console.log(getRandomInt(100)); //integer number random


// task ------------------ 21


//  function randomBetweenNumbers(min , max){
// min = Math.ceil(min)
// max = Math.floor(max)

//  console.log (Math.floor(Math.random() * (max - min) + min) )
//  }

// randomBetweenNumbers(1,8)
// 7.5412

// randomBetweenNumbers(3,100)
// 23