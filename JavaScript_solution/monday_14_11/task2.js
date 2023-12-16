
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


// if (fName !== "" && lName !== "" && mail !== "" && pass_word !== "" && phone_Number !== "" ){
// console.log("input");    
//     userValid=true;

// window.location = "./task2log.html"  
// }
// else{
//     console.log("error input");
//  e.preventDefault();
//   }
  
//   if (userValid === false ){
//     console.log(`input`) 
     
//   }


}
//------------------------------------

// fName.addEventListener('change', checkFname())

function checkFname(){
let fName = document.getElementById(`firstName`).value
let check_Fname=document.getElementById(`check`)
let regex = /\d/;
let name = /[a-z]/ig;

// let sec=fName.slice(0,1)
// oneLatter= /[A-Z]/ig;
    try { 
        if(fName == "")  throw "empty";
        if(regex.test(fName)) throw "not a number";
       if(name.test(fName)) throw ""
      }
      catch(err) {
        check_Fname.innerHTML =  err;
      }
      
let lName = document.getElementById(`lastName`).value
let check_lname=document.getElementById(`check_lname`)
// let regex1 = /\d/;
// let name1 = /[a-z]/ig;

try { 
    if(lName == "")  throw "empty";
    if(regex.test(lName)) throw "not a number";
   if(name.test(lName)) throw ""
  }
  catch(er) {
    check_lname.innerHTML =  er;
  }

//---------------------------------------------
var mail = document.getElementById(`Email`).value
let check_email=document.getElementById(`check_email`)
// var c_email =/ @"^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$"/;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



try { 
    if(mail == "")  throw "empty";
    if(validRegex.test(mail)) throw "";
    if(!validRegex.test(mail)) throw "error";
//    if(name.test(lName)) throw ""
  }
  catch(err) {
    check_email.innerHTML =  err;
  }


  //-------------------------------------------

  let Email_Check = document.getElementById(`Email_check`).value //input
  let check_email1=document.getElementById(`check_email1`) //paragraph

  try {
    if (Email_Check == mail) throw ""
    if (Email_Check !== mail) throw "correct email!!"
  }
catch(ch){
  check_email1.innerHTML=ch;
}
//------------------------------------------------

var password=document.getElementById(`passWord`).value
var check_pass=document.getElementById(`check_pass`)
// let checPas=/^(?=[A-Z])(?=.*[0-9])(?=.*[#\$_])(?=.*[A-Z])(?=.*[a-z])(?!.*[^a-zA-Z0-9#\$_])(?!.*\s).{8,12}$/
// let checkPass= /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,31}$/
let checkPass= /^^[A-Z][a-z]\w{8,31}$/
try { 

  if(password == "")  throw "empty";
  // if(password.length < 8) throw "**Password length must be atleast 8 characters";
  // if(password.length > 32) throw "**Password length must not exceed 32 characters"
  if(!checkPass.test(password)) throw "error";
    if(checkPass.test(password)) throw "";
  }
  catch(eer) {
    check_pass.innerHTML =  eer;


}



var password_check=document.getElementById(`password_check`).value
var check_pass1=document.getElementById(`check_pass1`)
try { 

  if(password_check === password)  throw "";
  if(password_check !== password)  throw "error";

  }
  catch(eeer) {
    check_pass1.innerHTML =  eeer;
}


var phoneNumber=document.getElementById(`phoneNumber`).value
var check_phone=document.getElementById(`check_phone`)
let test1 = /^[0-9]+$/
try { 

  if(test1.test(phoneNumber).length===10)  throw "";
  // if(phoneNumber.match(/\d/g).length===10)  throw "e";
  if(!test1.test(phoneNumber))  throw "error";

  }
  catch(eeeer) {
    check_phone.innerHTML =  eeeer;
}




}





//------------------------------------
// localStorage.clear()

// var c_email =/ @"^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$"/;
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
