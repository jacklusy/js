
var age = prompt("enter your age");
var x ;
function num ()
{
if (age >= 20){
    console.log("yes you can");
}
else {
    x = 20-age;
    console.log(`please come back after ${x} years to get one`)
}
}

num(age);