function makeGreeting(language) {
    return function (firstname, lastname){
        if(language === 'en'){
            console.log('Hello ' + firstname + ' ' +lastname);
        }
        if(language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname )
        }
    }
}

//2 diffrent execution context, so 2 diffrent memory space.
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Ortal', 'Sabag');
greetSpanish('Ortal', 'Sabag');