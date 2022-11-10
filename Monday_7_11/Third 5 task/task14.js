
var a = prompt("enter first string");
var b = prompt("enter second string");
var c = prompt("enter third string");
var d = prompt("enter fourth string");

var x = a.length;
var y = b.length;
var z = c.length;
var i = d.length;



function num (x,y,z,i,h) 
{
   if( (x>y && x>z) && (x>i) ){
      console.log(a + " number of letters of words:- " + x);
   }
   else if ( (y>x && y>z ) && ( y>i) ){
    console.log(b + " number of letters of words:- " + y);
   }
   else if ( (z>x && z>y ) && ( z>i) ){
    console.log(c + " number of letters of words:- " + z);
   }
   else if ( (i>x && i>y ) && ( i>z) ){
    console.log(d + " number of letters of words:- " + i);
   }
   else {
    console.log("we dont have a  longer string");
   }
}

num(x,y,z,i);