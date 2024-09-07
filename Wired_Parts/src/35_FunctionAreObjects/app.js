/*
First class Function 
Everthing you can do with othwe types you can do with Function.
Assign them to variables, pass them around, create them on the fly.

function are object with name and code that can executed.
*/


/*
Expression - 
----------
a unit of code that results in a value.
It doesn't have to save to variable
for example: 
a=3 => = operator return thhe right side operator. =3
1+2 => + operator retun the summary of the 2 variable => 3
both case we have line of code that result a value. 

if - is statment, not return value.
*/

/*j
also this code is stament, not return nothing.
it just saved when the execution context created. need anme to function to know how to cal it
*/

function greet() {
	console.log('hi');
}
/* function expression , save the address in memory fot this code, no need a name couse we same where in the memory it live*/
var anonymousGreet = function() {
	console.log('hi');
}

anonymousGreet() // => run the code

/* sending to log function , a function (function is just a object with name and code.
log execute the function
*/

function log(a) {
	a();
}


log(function() {
	console.log('hi')
})