class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        return 'Hi' + firstname;
    }
    
}

/* extends set the prototype __proto__ */
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname)
    }
    greet() {
        return 'Yo ' + firstname; 
    } 
}


var john= new Person('Ortal', 'Sabag');
var john2 = new InformalPerson('Ortaa', 'saa')
console.log(john2);


/*
syntactic Sugar -
a different way to TYPE something THAT doesn't change how it works under the hood.  
*/