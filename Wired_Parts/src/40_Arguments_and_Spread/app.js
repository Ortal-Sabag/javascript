/*
Arguments -
the parameters you pass to a function

javascript gives you a keyword of the same name which contains them all.
*/


//when calling to greet function 3 varaible get declared with undefined. 

function greet(firstname, lastname, language/*='en'*/, ...other) { //can send default value;
    language = language || 'en'; //default value secons approch
    if(arguments.length === 0) {
        console.log('Missing parameters');
        return;
    }
    console.log(firstname || 'first argumemts :' + arguments[0]);
    console.log(lastname);
    console.log(language);
    console.log(other); //aary of all the other argumemts
    console.lof(arguments); // list of all the parameters we get
}

greet(); //undifiend *3.
greet('Ortal') //Ortal undefiend*2
greet('Ortal', 'b', 'a', 'bla', 'bla');

