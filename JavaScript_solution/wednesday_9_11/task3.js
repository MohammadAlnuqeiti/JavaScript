
let par=document.getElementById(`par`)
let selectStyle1=document.getElementById(`selectStyle`)
let selectFont1=document.getElementById(`selectFont`)
let italic=document.getElementById(`italic`)
let bold1=document.getElementById(`bold`)
let underLine=document.getElementById(`underLine`)



function selectStyle(selectStyle){
    var  Style= document.getElementById(`selectStyle`).value;
par.style.fontFamily=Style;
}

function selectFont(selectFont){

  var  size= document.getElementById(`selectFont`).value
       par.style.fontSize=size;
 }

function bold(){
    if (bold1.checked === true){
        document.getElementById(`par`).style.cssText=`font-weight:bold;`
    }
    else {
        document.getElementById(`par`).style.cssText=`font-weight:normal;`
    }
}

function style1(){
    if (italic.checked === true){
        document.getElementById(`par`).style.cssText=`font-style: italic;`
    }
    else{
        document.getElementById(`par`).style.cssText=`font-style: normal;`
    }
}

function line(){
    if (underLine.checked === true){
        document.getElementById(`par`).style.cssText=`text-decoration: underline;` 
    }
    else {document.getElementById(`par`).style.cssText=`text-decoration: normal;`
    }
}
