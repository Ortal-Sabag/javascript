
/* summary:
we talked about: execution context, execution enviroment, variable enviroment, lexical enviroment, scope chain.
all of this defined the scope. 

scope - 
-----
where a variable is available in your code. 
and if it's truly the same variable or a new copy.(by refernce and by value)
it can look like the same variable but it can be 2 different variables in memory.
*/


/*
es6 define a new way to declare variables.
let  - allow the javascript engine to use what called block scope. it's only available in the block where it's defined.

*/

/*example: 
c still placed on the memory and set to undifined.
however, you're not allow to use it until the line of code is run during the execution phase that actualyy declare the variable.
so if you try to use it before it's declared, you will get an error.
it still on the memory, but the javascript engine will not allow it.

when you use let the variable available inside this block only.
it is also relevant to loop, when declaring let inside a loop, it will create on the memory diffrent variable for each iteration. 
let and var supported on es6.
*/

if (a > b) {
    let c = true;
}