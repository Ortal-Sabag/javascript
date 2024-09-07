/*
Coercion is the process of converting a value from one type to another. 
This is done implicitly by JavaScript.

plus opertor for example, can be used to add numbers or concatenate strings.
what about diffrent types? 
if plus operator is used with one number and one string,
it will concatenate the two values. the first parame was coerced by javascript engine to a string.
*/

var a= 1 + 2 ;
console.log(a); // 3

var a= 'hello' + ' world' ;
console.log(a); // helloworld

var a = 1 + '2';
console.log(a); // 12 