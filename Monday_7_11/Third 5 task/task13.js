

var a = prompt("enter first string");
var b = prompt("enter second string");
var c = prompt("enter third string");
var d = prompt("enter fourth string");
var e = prompt("enter fifth string");   

var x = a.length;
var y = b.length;
var z = c.length;
var i = d.length;
var h = e.length;



function num (x,y,z,i,h) 
{
   if( (x<y && x<z) && (x<i && x<h) ){
      console.log(a + " number of letters of words:- " + x);
   }
   else if ( (y<x && y<z ) && ( y<i && y<h) ){
    console.log(b + " number of letters of words:- " + y);
   }
   else if ( (z<x && z<y ) && ( z<i && z<h) ){
    console.log(c + " number of letters of words:- " + z);
   }
   else if ( (i<x && i<y ) && ( i<z && i<h) ){
    console.log(d + " number of letters of words:- " + i);
   }
   else if ( (h<x && h<y ) && ( h<z && h<i) ){
    console.log(e + " number of letters of words:- " + h);
   }
   else {
    console.log("we dont have a shorter string");
   }
}

num(x,y,z,i,h);