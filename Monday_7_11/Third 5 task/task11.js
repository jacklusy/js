var x = prompt("enter first number");
var y = prompt("enter second number");

function num (x,y) 
{
   if(x>y){
      console.log(x);
   }
   else if (y>x){
    console.log(y);
   }
   else{
    console.log("we dont have a largerNubmer");
   }
}

num(x,y);