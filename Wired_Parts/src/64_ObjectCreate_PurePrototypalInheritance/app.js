
/*
Polyfill -
code that adds a feature which the engine may lacks
*/

/* old browser doesn't have Object.create */

if(!Object.create){
    Object.create = function (o) {
        if (arguments.length > 1){
            throw new Error('Object.create implementation only accepts the first parameters' );
        }
        function F() {};
        F.prototype = o;
        return new F();
    }
}

/*create base object and override his values */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi' + this.firstname;
    }
}

var john = Object.create(person); //create empty object with prototype point to person object.
console.log(john);
john.firstname='Ortal';
console.log(john.greet());



