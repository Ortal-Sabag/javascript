/*
Function Constructor, new keyword, prototype, and history of JavaScript
*/

function Person(firstName, lastName) {
    console.log('this function is invoked');
    console.log(this);
    this.firstName = firstName || 'John';
    this.lastName = lastName || 'Doe';
   
}

/*
Function a special type of object.
it have name property, code property, prototype property
Every function has a prototype property, which is an object

prototype property is used only by the 'new' operator
*/

//each function has a prototype property and that property is an object, start with empty object.

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

//new is an operator, new create an empty object, then it calls the function
//calling function creates a new execution context, and this variable points to the new empty object
var john = new Person();
console.log(john);

var jane = new Person('jane', 'aa');
console.log(jane);

/*
Function Constructor, 
a normal function that is used to construct objects
the 'this' variable points a new empty object, 
and that object is returned from the function automatically
*/


/*create on functtion for all the appreances of thr Person object */
Person.prototype.getFullFormalName = function() {
    return this.firstName + ', ' + this.lastName;
}

console.log(john.getFullFormalName());


/*Dangerous aside" new and function */
var person = Person('John', 'Doe');
console.log(person); //undefined, couse Person is just a function it will run it this this is the windows

