/*
typeof, instanceof, and Figure OUT what something is.
typeof - what type the variable
instanceof - what it have on prototype chain
*/

var a = 3;
console.log(typeof a); //number, it lower case, the primitive type and not the Number

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];
console.log(typeof d); // weird!

//x.call(y) => x =method , y= this
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); //object

/* 
instance of -
check if any type down on the prototype chain , find this object.
*/
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z); //function
console.log(z instanceof Object); //true