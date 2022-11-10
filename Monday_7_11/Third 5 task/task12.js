var x = prompt("enter first number");
var y = prompt("enter second number");
var z = prompt("enter third number");

function num (x,y,z) 
{
   if(x<y && x<z){
      console.log(x);
   }
   else if (y<x && y<z){
    console.log(y);
   }
   else if (z<x && z<y){
    console.log(z);
   }
   else{
    console.log("we dont have a smallNubmer");
   }
}

num(x,y,z);