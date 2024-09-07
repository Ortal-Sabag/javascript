//call aplay and bind can call on function object

var person = {
  firstname: "Ortal",
  lastname: 'Sabag',
  getFullname : function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
  }  
};

var logName = function(lang1, lang2){
    console.log('Logged: ' + this.getFullname());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}
//BIND METHOD
//=======================================================
//logName(); there is no getFullname function on the global object
//all function onject has call, apply and bind methods
//bind create a copy of the logName function and set the this variable to the object that we pass to it.
// (function).bind(object) - 
var logPersonName = logName.bind(person);
logPersonName('en');


//option 2 , create a function on the fly , create copy and bind to the object.
// var logName2 = function(lang1, lang2){
//   console.log('Logged: ' + this.getFullname());
//   console.log('Arguments: ' + lang1 + ' ' + lang2);
//   console.log('----------------');
// }.bind(person);

// logName2();


//CALL METHOD
//=======================================================
//call method, call the function and set the this variable to the object that we pass to it.

logName.call(person, 'en', 'es');

//APPLY METHOD
//=======================================================
//apply method, call the function and set the this variable to the object that we pass to it.
logName.apply(person, ['en', 'es']);

(function(lang1, lang2){
  console.log('Logged: ' + this.getFullname());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('----------------');
}).apply(person, ['he', 'ar']);


console.log("/*********************************************************************************/");

//function borrowing
var person2 ={
  firstname: 'refael ariel',
  lastname:'sabag',
}

console.log(person.getFullname.apply(person2));
console.log(person.getFullname());

//function currying
function multiply(a,b){
  return a*b;
}
//bind doesnt to execute the function, it creates a copy of the function with the parameters already set.
//first paramertes will always be a 2.
var multiplayByTwo = multiply.bind(this, 2);
console.log(multiplayByTwo(3));
console.log(multiplayByTwo(4));
var multiplayByTwoAndTree = multiply.bind(this, 2, 3);
console.log(multiplayByTwoAndTree(4)); //ignore the 4

var multiplayWithoutParameters = multiply.bind(this);
console.log(multiplayWithoutParameters(5));  // retun Nan because we dont get second paramerte.


/*
Function Currying: 
------------------
create a copy of a function but with some preset parameters. 
Very useful in mathematical situations.
*/