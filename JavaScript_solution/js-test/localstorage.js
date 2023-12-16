
//طريقة الكتابة

// => window.localStorage
// => localStorage

// اضافة عنصر جديد في localStorage

// => localStorage.setItem(key, value);
// => localStorage.key = value;


//لقراءة البيانات من localStorage

// => localStorage.getItem(key);
// => localStorage.key;


// حذف عنصر واحد من ال localStorage

// => localStorage.removeItem(key);

//حذف جميع العناصر من ال localStorage


// =>localStorage.clear();

//---------------------------------------------

// localStorage.clear()

// localStorage.setItem( `name` , `mohammad` )

// console.log(localStorage.getItem(`name`))

// localStorage.setItem( `age` , 25 )
// console.log(localStorage.getItem(`age`))
// console.log( typeof localStorage.getItem(`age`))


// localStorage.setItem( `age` ,JSON.stringify(30))
// console.log(localStorage.getItem(`age`))
// console.log(JSON.parse(localStorage.getItem(`age`)))
// console.log( typeof JSON.parse(localStorage.getItem(`age`)) )

// // localStorage.setItem( `name` , 25 )

// //remove

// localStorage.removeItem(`name`)
// localStorage.clear()

//-------------------------------------------


// let Tex = document.getElementById(`tex`)
// let span = document.getElementById(`saveData`)

// if (localStorage.length>0){
//     Tex.value =  localStorage.getItem(`text`)
//      span.innerHTML = localStorage.getItem(`text`)
// }
// Tex.onkeyup  = function (){
//     localStorage.setItem(`text`, Tex.value  )
// }


//--------------------------------------------

// setData = (userInput,value) => {
//     if (userInput=="userName"){
//         localStorage.setItem("userName",value)
//     }else if (userInput=="Email"){
//         localStorage.setItem("Email",value)

//     }
// }

// getData = () =>{
//   let x =  localStorage.getItem("userName",value);
//   let y = localStorage.getItem("Email",value);
//    console.log (x,y)
 
// }