
let form =document.getElementById(`form`)
let text=document.getElementById(`input`)
let error = document.getElementById(`msg`)
form.addEventListener('submit',vaidation)
let post = document.getElementById(`posts`)
function vaidation (e){
    e.preventDefault();
    if (text.value ===""){
        error.innerHTML="Post cannot be blank"

    }
    else{
        create()
        
    }

}
let message = JSON.parse(localStorage.getItem('message'))|| []
function create(){

    var id = message.length  

    message.map((ele) =>{
    
        //Find index of specific object using findIndex method.    //يكون الرقم حسب index
        feedloc = message.findIndex((ele => ele.num == id ));

        if ( ele.num > 0 && ele.num == id){
            stuId = ele.id + 1
        }
    });
    let obj = {
        num : id,
        Text: text.value,
    
    }

    message.push(obj)
    localStorage.setItem("message" ,JSON.stringify(message))
    console.log(message)

    print()
}

function  print(){


    let aa =`  <div id="posts">`
    message.map((ele)=>{
            // post.innerHTML+= `${ele.Text}`  //في حال حطيت بدون + فراح تطلع اخر نتيجة فقط
           aa+= `
            <div >

                <p id="par">${ele.Text}</p>
                <span class="option" >

                    <i class="fa-solid fa-pen-to-square"></i>
                    <i  onclick="deletePost(${ele.num})" " class="fa-solid fa-trash" ></i>
                </span>
            </div>
            `  //في حال حطيت بدون + فراح تطلع اخر نتيجة فقط
            document.getElementById("list").innerHTML = aa;

    })

    text.value =""

    
}
let deletePost = (num) => {
var x = num
console.log(num);
    const index = message.findIndex((ele) => ele.num == x);
    message.splice(index, 1);
    localStorage.setItem("message",JSON.stringify(message))
    console.log(message);

            print()


       
      };