
//Function statement, save on the memory 
function greet(name) {
    console.log('Hello' + name);
}

greet('John');

//Function Expression - creating on the fly on runing phase
var greetFunc = function(name) {   
    console.log('Hello' + name);
}

greetFunc('John');

//using an Invoked Function Expression (IIFE)
var greetFunc2 = function(name) {   
    console.log('Hello' + name);
}('John');

//1.
var greeting = function(name) {   
    console.log('Hello' + name);
};

console.log(greeting); //function object
// ƒ (name) {   
//     console.log('Hello' + name);
// }


//2. 
var greeting = function(name) {   
    console.log('Hello' + name);
}('Ortal');
console.log(greeting); //Hello Ortal
console.log(greeting()); //cant invoke string


/* valid  */
3;
"I am a string";
{
    name: 'Ortal'
};

/* Invalid */

/*
function(name) {
    return name;
}; //SyntaxError: Unexpected token '(', it excepted definition of function statment, so it exceptedthe function name 

*/
/* so to handle it add () to wrap your function , like function expression*/

var firstname = 'Ortal';
(function(name) {
    return name;
}(firstname)); //IIFE, execution function after create it
