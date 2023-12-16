let operation=prompt("Please enter the operation you want to perform");
let x=prompt("Please enter a value x");
let y=prompt("Please enter a value y");
valuex=Number(x)
valuey=Number(y)

if (operation == "+" ){
    console.log (valuex+valuey);
    document.write (x,operation,y);
    // alert (valuex+valuey);
}
if (operation == "-" ){
    console.log (valuex-valuey);
    document.write (x,operation,y);
    // alert (valuex-valuey);
}
if (operation == "*" ){
    console.log (valuex*valuey);
    document.write (x,operation,y);
    // alert (valuex*valuey);
}
if (operation == "/" ){
    console.log (valuex/valuey);
    document.write (x,operation,y);
    // alert (valuex/valuey);
}