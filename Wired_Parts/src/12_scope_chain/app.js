function b(){
    console.log(myVar);
}

function a(){
    var myVar = 2;
    b();
}
var myVar = 1;  
a(); 


/*
 console.log(myVar) -> print 1.
 why??

 when we are requesting same variable, js looking for the variable in the variable environment of the currren execution context. if it not find it there
it will check on the outer reference of the current execution context. if it not find it there, it will check on the outer reference of the outer reference of the current execution context.
this is called scope chain.

in case of b() function, it's outer environment is global execution context. so it's looking for myVar in the global execution context.
and it's also the case for function a(). it's outer environment is also global execution context.
even though function a() is derectly below b() in the execution stack, it's outer environment is still global execution context.

so how does it work? what is the outer enviorment function a or b are reffering to? 
lexical enviorment. it's the environment where the code was written. not where the code is being executed.

where the function is written, that's where the function is going to find the outer environment.
function b() is written lexically on top of the global enviorment. so it's outer environment is global execution context.
it not inside of function a().is sitting right on the same level of global envoirment where myVar is 1 defined.

*/


