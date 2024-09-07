/*
Operators:
a special function that is syntactically (written) differently.
Generally, operators take two arguments and return one result.
plus:
var a = 3 + 4;
//like : 
function +(a, b){
    return a + b;
}

+(3, 4); // 7

bigger than is function that return boolean.
var a = 4 > 3;
console.log(a); // true
*/


/*
operator precedence:
which operator function gets called first.
functions are called in order of precedence (Higher precedence wins).
here on this table: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
multiplication have 14 precedence higher than addition with 13.

Associativity:
what order operator functions get called in: left-to-right or right-to-left.
When functions have the same precedence.
*/
var a = 3 + 4 * 5; //23


/*
if operator precedence is equal we take a look on the associativity.
Assignment operator is right-to-left associativity operator.
so we will call to b=c first then a=b.
when b= c get call it save to b the value of c.and return the value of the parameter on the right, c.
b=c return 4. so = is function that return the value of the right parameter. so we can call it on order.
so now we just do a= 4 (4 what return from b=c) so a=4.
*/
var a = 2, b=3, c=4; 
a=b=c;
console.log(a, b, c); // 4 4 4

/* grouping () */
/* () have the maximum precedence so it will happen first */
var a = (3 + 4) * 5; //35
