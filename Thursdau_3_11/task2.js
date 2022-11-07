var a = prompt('Enter the operator');
var x = Number (prompt('Enter the value of x'));
var y = Number (prompt('Enter the value of y'));


if ( a=='+') {
    console.log( x + y);
    document.write( x + y );
}
else if ( a=='-') {
    console.log(x - y);
    document.write( x - y );
}
else if ( a=='*') {
    console.log( x * y);
    document.write( x * y );
}
else if ( a=='/') {
    console.log( x / y);
    document.write( x / y );
}