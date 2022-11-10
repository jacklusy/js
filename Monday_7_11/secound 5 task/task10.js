var x = prompt("enter first string");
var y = prompt("enter second string");

var z = x.length;
var i = y.length;

function sameLength(z,i)
{
    if ( z == i ){
        console.log("True");
    }
    else if ( z !== i ){
        console.log("False");
    }
}

sameLength(z,i);



