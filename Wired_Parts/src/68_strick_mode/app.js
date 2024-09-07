/*
stick mode i a way to tell the javascript engine to process the code in strict mode.
*/

//"use strict"; //for all the file
function logNewPerson() {
    "use strict"; //for this function only
    
    var person2;
    persom2 = {};
    console.log(persom2); //empty object. with strick mode you wil get exception
}


var person;

persom = {};
console.log(persom); //empty object. with strick mode you wil get exception
console.log(window.persom); //object
console.log(window.person); //undefined 

logNewPerson();