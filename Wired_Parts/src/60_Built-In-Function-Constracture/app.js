var a = new Number(3);
//Number.prototype
//include all the methods that are available to the number object
a.toFixed(2); //3.00 

var b = new String('John');
b.indexOf('o') //b has access all the methods that are available to the string object


/*with Function constructor it look like you creating a primitive value, but you are creating an object that contain primitive and give it extra abilities*/

"john".length; //4 , js engine boxing it is string object and then calling the length property


//add method to all string object
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3)); //true, "John" convert to String object.
Number.prototype.isPositive = function() {  
    this> 0;
}

//3.isPositive(); //error, 3 is primitive value, it is not an object, so it does not have access to the methods that are available to the number object
var a = new Number(3);
a.isPositive(); //true

/*----------------------- */
var a = 3;
var b = new Number(3);
a==b; //true, js engine convert the primitive value to an object
a===b; //false, a is primitive value and b is object


var c = Number(3); //3