
/* 
Binding -
the connection (pointer) between a variable name ans specific location in the computer's memory that hold the value.

Immutable - cant be changed.

creating variable with const keyword mean we create a binding that cant be changed. 
*/

const myVar = 1;
const greet = {name: 'Tony'}
//myVar = 2; //error
greet.name = 'Anthony'; //get updated. 
//the dot operator doesn't go point the variable to something else ij just part of the object. 
//only the = operator is not allow, this operator changing the binding.
{
    //const has block scope.
    const greet = {name: 'Ortal', lastname:'Sabag'}
    greet.name = 'Ortali';
    console.log(greet); //{name: 'Ortal', lastname:'Sabag'}
}
console.log(greet); //{name: 'Anthony'}




