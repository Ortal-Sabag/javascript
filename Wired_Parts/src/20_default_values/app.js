/* 
when greet is called, new execution context is created and name is created inside 
the function value set during invocation is initially set when the memory space is set up to undefined.
js ignote the facts i called function without the excpected parameter. it ok by JS, just variable with undifined value.
 
operator + , 
when see string and undefined, it coerced name the undefined primitive to string and concatenate it with string.
so the output is Hello undefined. 

what if we want default value for name, if name is not provided?
----------------------------------------------------------------------------------------------------------------
using operator || - 
return the first value that can be coerced to true. if the first value can be coerced to false, it return the second value.
for example:
"hi" || 'hello' => "hi"
0 || 1 => 1

undefined || 'hello' => "hello", cause Bollean(undefined) is false.
null || 'hello' => "hello"
"" || 'hello' => "hello"
that why i can do name = name || 'ortal'; to set default value for name, if name is not provided.
*/

function greet(name) {
  name = name || 'ortal';
  console.log('Hello ' + name);
}

greet(); // Hello ortal
greet('Tonny'); // Hello Tonny
greet(0); // Hello ortal . cause 0 is coerced to false, so the default value is used.

/*
Framework and libraries use this technique to set default values for the function parameters.
for example, in the React library, we can set default value for the props of a component.
*/

/*
when you using framework or library, you rae including the js file to index.html.
lets support we are using 2 library that both have the same variable name , libraryName on this example.

<script src="lib1.js"></script>
<script src="lib2.js"></script>
<script src="app.js"></script>
these 3 scripts tags are not creating new execution context, they are not separate the code in any way.
quite literally, they just stucking the code on top of each other and then running all of the javascripts as if it was inside a single file
and ofter when in production javascript envioment you actually combine and minify your js code into one file anyway.
so it's import that these files not collide with each other.
*/

console.log(libraryName); // Lib 2 . 
/* what happened ? 
if you take a look on the order the source files were loaded, library 1 was loaded so first line on the combinef code will be: 
var libraryName = "Lib 1";
the lib2 get loaded so line 2 will be 
var libraryName = "Lib 2";
and thus attacked to the window object,in the case of the browser, so i declared var libraryName and that was attached to the window object 
and the second var just relaced it.

when looking at the code, it looks like libraryName is declared twice, but it's not.
the code is actually running in the same execution context.
so the variable libraryName is actually being overwritten by the second library.
this is a common issue when working with multiple libraries or frameworks.
it's called a namespace collision.
the variable libraryName is being overwritten by the second library.

we can go yo lib2.js and check if libraryName is already defined, if it is, we can skip the declaration.
window.libraryName = window.libraryName || "Lib 2";

this is why it's important to use IIFE to wrap the code in each file.
so the code is actually running in separate execution context.


this was all then treated as Global varaiables setting inside the global execution context.

*/
//cause the last library that was loaded is lib2.js, so the value of libraryName is "Lib 2".
// if you want to avoid this issue, you can use IIFE to wrap the code in each file.
