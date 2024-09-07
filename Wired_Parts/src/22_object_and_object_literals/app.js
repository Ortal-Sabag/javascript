/* {} is shorthand, not operator! the same as a new object 
js engine convert the new Object()
*/
var person1 = new Object(); // Object constructor
var person2 = {}; // Object literal
console.log(person1, person2); 

/* can also give it defalut value with name value pairs*/
var person = {
    firstname : 'ortal', 
    lastname: 'sabag',
    address: {
        street: '11 main st.',
        city: 'new york',
        state: 'NY'
    }

};
console.log(person); 

/* i have function that except object with firstname property */
function greet(person){
    console.log('Hi ' + person.firstname);
}
greet(person); // Hi ortal

/* {} creating new object and passing it to greet function */
greet({
    firstname: 'Mary',
    lastname: 'Doe'
}); // Hi Mary

person.address2 = {street: '333 second st.'};
/*
equal to:
var person = new Object();
person.firstname = 'ortal';
person.lastname = 'sabag';
but the first way is more quickly
*/



