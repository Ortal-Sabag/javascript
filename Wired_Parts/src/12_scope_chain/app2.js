function a(){
    var myVar = 2;
    function b(){
        console.log(myVar);
    }
    b();
}
var myVar = 1;  
a();

//b(); 
// it will throw an error. 
// Uncaught ReferenceError: b is not defined. 
// cause the first creation phase didnt find function B in thr global execution context.

/*
scope chain - where we can call the variable.
if we are moving function b inside of function a, it's outer environment is function a. 
so it's looking for myVar in the outer environment of function a.

b() cant be call any more from global execution context. it's only can be called from function a.

what happen on this example now?
we have :
1. global execution context , with enviorment variable: myVar = 1
2. function a execution context
    with enviorment variable: myVar = 2
    other enviorment refernce is the global execution context.couse it's where it pysically sitting.
3. function b execution context, 
    with empty enviorment variable.
    other enviorment refernce is function a . couse it's where it pysically sitting.

when we are calling function a, it's creating a new execution context. and when we are calling function b inside of function a, it's creating a new execution context for function b.
because B was sitting physically inside of function a, it's outer environment is function a.

so myVar is 2.

you can also think obout is as who created me.
function a created function b. so function a is the outer environment of function b.
only after a execution context was created, function b was created. so function a is the outer environment of function b.
*/