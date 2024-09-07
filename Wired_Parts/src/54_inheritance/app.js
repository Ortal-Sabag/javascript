/*
Inheritance:
one object gets access to the properties and methods of another object.

classical inheritance: one object is inherited from another object
prototypal inheritance: simple, flexible, and easy to understand.
obj
*/

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName : function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}


// don't do this EVER! for demo purposes only
john.__proto__ = person;

console.log(john.getFullName());
console.log(john);

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());
