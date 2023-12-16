
let input = document.querySelectorAll(`input`).value

let form2 = document.getElementById(`form`)
let name1 = document.getElementById(`firstName`).value
let form = document.getElementsByTagName('form')[0]
console.log(form)
let users = JSON.parse(localStorage.getItem('userData')) || []
var data = users
console.log(data)


form.addEventListener('submit', getData)
function getData (e){

    e.preventDefault()

    console.log('hello')
var fName = document.getElementById(`firstName`).value
var lName = document.getElementById(`lastName`).value
var mail = document.getElementById(`Email`).value
var pass_word = document.getElementById(`password`).value
var phone_Number = document.getElementById(`phoneNumber`).value
var onlyUser = {
    firstName:fName,
    lastName:lName,
    Email:mail,
    password:pass_word,
    phoneNumber:phone_Number
}
users.push(onlyUser)
localStorage.setItem(`userData`,JSON.stringify(users))


let userValid=false


if (fName !== "" && lName !== "" && mail !== "" && pass_word !== "" && phone_Number !== "" ){
console.log("input");    
    userValid=true;

window.location = "./login.html"  
}
else{
    console.log("error input");
 e.preventDefault();
  }
  
//   if (userValid === false ){
//     console.log(`input`) 
     
//   }


}
//-----------------------------------

// localStorage.clear()


// console.log(form2)

// form2.addEventListener('submit', login)
// function login(e){
//     e.preventDefault()

// // let q =alert(`hi user`)
// // let z = alert(`please insert true information`)

// let aar =data.map (function(ele){
// var mail1 = document.getElementById(`Email1`).value
// var pass_word1 = document.getElementById(`password1`).value

// if (mail1 === data[data.length-1].Email && pass_word1 === data[data.length-1].password){
// // if (mail1 === ele[ele.length-1].Email && pass_word1 === ele[ele.length-1].password){
// // if (mail1 === ele.Email && pass_word1 === ele.password){
// console.log(`yes`)
// form2.style.display=`none`
// form.style.display=`none`

// document.getElementById(`finishMessage`).style.display=`block`
// let myElement=document.createElement("span")
// let myText =document.createTextNode(`Hi ${name1}`)
// myElement.appendChild(myText);
// document.body.appendChild(myElement);
// console.log(myElement)
// console.log(data[data.length-1].firstName)

// }else{
//      document.getElementById(`passMessage`).style.display=`flex`
//     document.getElementById(`emailMessage`).style.display=`flex`
// //  window.location = "./login.html";
// }
// })

// }













//------------------------------------
// function setData (userInput,value){


    
// }
// localStorage.clear()
// function getData (){
//     console.log(userInput);
//     if (userInput=="firstName"){ 
//          localStorage.setItem("firstName",value)      
//     }
//     else if (userInput=="lastName"){
//         localStorage.setItem("lastName",value)

//     }
//     else if (userInput=="Email"){
//         localStorage.setItem("Email",value)

//     }
//     else if (userInput=="password"){
//         localStorage.setItem("password",value)

//     }
//     else if (userInput=="phoneNumber"){
//         localStorage.setItem("phoneNumber",value)

//     }

// }
//-------------------------------------------

// let firstName=document.querySelector("[name='firstName']") //name الوصول للعنصر من خلال  
// let lastName=document.querySelector("[name='lastName']")
// let Email=document.querySelector("[name='Email']")
// let password=document.querySelector("[name='password']")
// let phoneNumber=document.querySelector("[name='phoneNumber']")

// document.forms[0].onsubmit=function(e){

//     let firstName=false
//     let lastName=false
//     let Email=false
//     let password=false
//     let phoneNumber=false
  
  
  
//     if (firstName.value !== "" && firstName.value.length<10){
//         firstName=true
//       console.log("valid")
//     }
//     if (lastName.value !== "" && lastName.value.length<10){
//         lastName=true
//       console.log("valid")
//     }
//     if (Email.value !== "" && Email.value.length<10){
//         Email=true
//       console.log("valid")
//     }
//     if (password.value !== "" ){
//         password=true
//     }
//     if (phoneNumber.value !== "" && phoneNumber.value.length<10){
//         Email=true
//       // console.log("valid")
//     }
//     if (firstName === false || firstName === false){
//         e.preventDefault();
//     }
//   }
