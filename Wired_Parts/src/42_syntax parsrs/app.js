/* JS engine - is reading code, 
charachter by characterr using a set of rules for 
what's is valid syntax and deside wht ait is that you intend */

/*
Dangerous 
Automatic semicolon insertion.
*/

function getPerson() {
    return
    {
        name: 'Tony'
    }
}
console.log(getPerson()); //undefined, couse of automatic semicolon insertion after return. need to write it:

function getPerson1() {
    return {
        name: 'Tony'
    }
}
console.log(getPerson1());


