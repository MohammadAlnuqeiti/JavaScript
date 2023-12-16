


function changeImage() {
    myimage.src = select.children[select.selectedIndex].getAttribute('rel');
}
console.log(changeImage)
var myimage = document.getElementById('myimage');
var select= document.getElementById('Select');

function btn1() {
    myimage.src = "./a451c0bb59506254f0e349d96d2645e2.jpg"
}
