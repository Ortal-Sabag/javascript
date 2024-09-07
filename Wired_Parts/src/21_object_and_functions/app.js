/*
on JavaScript objects and functions are king. 
JavaScript is an object-based language.

Objects and the dot.
-------------------------
Objects are collections of key-value pairs.
and those value can be other collection of name-value pairs.

let think about how an object lives or resides in computer's memory.
object can include: 
1. primiive - "property" like boolean, number, string
2. object - "property" .   
3. function - "method" .

each object sit on same space on memory 0X001 and have reference its properties and methods that also seeting in your's computer memory.
the object has refences to the spots where these diffrent properties and methods live those addresses might look something like that:
object 0x001 
primitive "property" 0x002
object "property" 0x003
function "method" 0x004
so the object know where is properties and methods sitting in memory.
*/

var person  = new Object();
/*
brackates operator [] , Computed Member Access operator.
inside the bracket putting the value i am trying to locate in memory.
firstname still not exsisting in memory, so it will create spot on memory and give it "firstname" name.
the obect is refernce to this location on memory.
caouse it getting a string, it will be primitive property.

the operaotor take person object and method name = firstname , and it look for firstname on person object.
*/
person['firstname'] = "Tony" ;
person['lastName'] = "Alicea" ;

var firstnameProperty = "firstname";
console.log(person); // { firstname: 'Tony', lastName: 'Alicea' }
console.log(person[firstnameProperty]); // Tony

/* 
dot operator - member access operator.
getting object and name of properties
. operator is left to right so here person.address.street, person.address will happen first and then it result with .street
it will not find the streen inside the result of person.address, so it will create street property inside the address object.
*/
console.log(person.firstname); // Tony

person.address = new Object();

person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
// [] is also left to right
console.log(person["address"]["state"]);

