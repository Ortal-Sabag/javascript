function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

/* what happen in the code?
1. global execution context insert to stuck. (created phase and code is executed)
new meomory created for myVar , on code executed it initialize to 1. 
2. a() => new execution context created for a. new myVar variable cretaed = 2.
eact execution context has his own variable. 
3. b() => new execution context created. myVar= undifiend. 


each variable defiend in his execution context.
myVar cretaed 3 times.

*/