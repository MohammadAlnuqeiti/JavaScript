// first way

// document.body.innerHTML = `
// <h1>hello</h1>
// <h2>hello</h2>
// `

// // second way

// //  1- انشاء العنصر 

// let container = document.createElement(`div`); let head = document.createElement(`h1`); let img = document.createElement(`img`); 

// //  2- اضافة المحتوى 

// let content = document.createTextNode(`hello world`); head.appendChild(content); img.src = `img/1.jpg`; img.style.width = `100px`; 

// //  3- اضافة العنصر في المكان المراد 

// container.appendChild(head);
// container.appendChild(img);
// document.body.appendChild(container) 
// console.log(container); 
// container.style.background = `#666`;  
// container.style.padding = `10px`; 
// container.style.textAlign = `center`;

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

// let x =document.querySelector(".js")

// console.log(x.innerHTML)
// console.log(x.textContent)

// //استدعاء العناصر والتعديل عليها
// //change attribute directly 
// x.innerHTML="html"
// document.images[0].src="./Screenshot 2022-10-10 130921.png"
// document.images[0].id="pic"
// document.images[0].className="img "

//  //change attribute with method
// //get attribute

//  let myLink=document.querySelector(".link")

//  console.log(myLink.getAttribute("href"))
//  console.log(myLink.getAttribute("class"))
//  document.write(myLink.getAttribute("class"))

//  //set attribute


//  myLink.setAttribute("href","http://facebook.com")
//  myLink.setAttribute("href","http://twitter.com")
//  console.log(document.images[0].getAttribute(""));
// document.images[0].setAttribute("src","./Screenshot 2022-10-10 132334.png")

//  //chec attribute

//  console.log(document.images[0].attributes)
//  console.log(myLink.attributes)

//  if (myLink.hasAttribute("href")){
//     console.log("found")
//  }else{
//     console.log("not found")
//  }
//  if (myLink.hasAttribute("alt")){
//     console.log("found")
//  }else{
//     console.log("not found")
//  }
// //  myLink.setAttribute="links"
//  myLink.setAttribute("alt","link")

//  if (myLink.hasAttribute("alt")){
//     console.log("found")
    
//  }else{
//     console.log("not found")
//  }
//  if (document.getElementsByTagName("div")[1].hasAttributes()){
//     console.log("yes")
    
//  }else{
//     console.log("not found")
//  }

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);


// let element =document.createElement("div")
// let head=document.createElement("h2")
// let textHead = document.createTextNode("product title")
// let par = document.createElement("p")
// let texPar=document.createTextNode("Product description")
// //add heading text
// head.appendChild(textHead)
// //add class div
// element.setAttribute("class","product")

// element.appendChild(head)
// //add paragraaph text
// par.appendChild(texPar)
// element.appendChild(par)
// console.log(element)



// for (i=0;i<=100;i++){


// document.write(`${element.innerHTML}`)
    
  
// }

//----------------------------------------

let userName1=document.querySelector("[name='userName']") //name الوصول للعنصر من خلال  
let pass=document.querySelector("[name='password']")

document.forms[0].onsubmit=function(e){

  let userValid=false
  let passValid=false



  if (userName1.value !== "" && userName1.value.length<10){
    userValid=true
    // console.log("valid")
  }
  if (pass.value !== "" ){
    passValid=true
  }
  if (userValid === false || passValid === false){
      e.preventDefault();
  }
}

//-------------------------------------------------

//css style

// let element = document.querySelector(".my-div")

// console.log(element)
// // one  style
// element.style.color="red";
// element.style.fontWeight="bold"; //with out dash(-),camel case way
// //two cssText
// //   على كل ماسبق over ride  تعمل  
// element.style.cssText = ` 
// font-weight:bold;
// color:green;
// opacity:0.9;
// line-height:3; 

// `;
// element.style.setProperty("color","red")
// element.style.removeProperty("line-height")

// document.styleSheets[0].rules[0].style.setProperty("background-color","yellow")
// document.styleSheets[0].rules[0].style.removeProperty("line-height")

//-------------------------------------------------

// let element = document.querySelector(".my-div")

// // element.before("hello")
// // element.after("hello after")
// // element.append(" hello app ")
// // element.prepend(" hello pre ")

// element.onclick = function(){
//   element.style.color="red"
//   console.log("lorem")
// }

//-------------------------------------------------
let element = document.querySelector(".my-div")

element.addEventListener("click", function(){
  let new1 = element.cloneNode(true);
  new1.className="clone";
  document.body.appendChild(new1)
  // element.after(new1)

}
)

let cloned = document.querySelector(".clone"); // لأنه فعليا العنصر غير موجود في الصفحة error  راح يعطيني 
//error
// cloned.onclick = function(){
  
//   console.log("clone")
  
//   }

//على عنصر غير موجود event بانها تضيف   addEventListener هون راح تكون فائدة  

document.addEventListener("click", function(e){
  
if (e.target.className==="clone"){
  console.log("clone")
}
}
)

