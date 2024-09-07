console.log( 1 < 2 < 3); // true
console.log( 3 < 2 < 1); // true

/*
3 < 2 < 1 
< is left to right associative operator
3<2 return false.
now it check for this: 
false < 1 
false is coerced to 0 , 0 < 1 is true.

for 1 < 2 < 3
1<2 return true.
so now we are checking true < 3 
true is coerced to 1
1<3 => true.

how can we know what will be the value? 
you can use the Number() function to convert the value to a number.
*/

Number('3'); // 3
Number(false); // 0
Nnumber(true); // 1
Number(undefined); // NaN - not a number, no way to convert to number.
Number(null); // 0
Number('');  // 0

/* Equality : ==   */
console.log(3 == 3); // true
console.log('3' == 3); // true, == is coercion operator, it change the type of the value to compare them.

/* == can make some strange behavior, for example here*/
var a = false;
console.log(a == 0); //true
/* but:  */
null == 0; // false
"" == 0; // true
null < 1 // true
"" == 0 // true
"" == false // true

/* Strick equality ===, Stick Inequalitu !==, does not do coercion */
3 === 3 // true
'3' === '3' // true
'3' === 3 // false



var a = 0;
var b = false;
a==b; // true
a===b; // false

/*
== method and === are difrrent method.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/
