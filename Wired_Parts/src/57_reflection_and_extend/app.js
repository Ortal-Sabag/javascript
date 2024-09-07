/*
Reflection: 
an object can look at itself, listing and changing its properties and methods
 */

import { get } from "./underscore";

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

console.log('all proprties of john');
for (var props in john) {
    console.log(props + ':' + john[props])
}

console.log('only john properties');
for (var props in john) {
    if(john.hasOwnProperty(props)) {
        console.log(props + ':' + john[props])
    }
}

var jane = {    
    address : '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
};


_.extend(john,jane, jim);
console.log(john);