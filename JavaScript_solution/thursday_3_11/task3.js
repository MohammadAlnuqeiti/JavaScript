let x=prompt("Please enter the grade");
valx=Number(x)

if (( valx >=0 )&&( valx <=49)){
    document.write ("FAIL");
}

if (( valx >=50 )&&( valx <=59)){
    document.write ("D");
}
if (( valx >=60 )&&( valx <=69)){
    document.write ("C");
}
if(( valx >=70 )&&( valx <=79)){
    document.write ("B");
}
if (( valx >=80 )&&( valx <=89)){
    document.write ("A");
}
if (( valx >=90 )&&( valx <=100)){
    document.write ("+A");
}