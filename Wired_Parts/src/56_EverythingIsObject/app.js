/*
Everything is an object (Or a Primitive).
*/

var a = {};
var b = function () {} ;
var c = [];


console.log(a.__proto__); // Object {}
console.log(b.__proto__); // function () {}
console.log(c.__proto__); // [] 

console.log(c.__proto__.__proto__); //{}
