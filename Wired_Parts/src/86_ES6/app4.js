
//function declaration.
function greeter1(name){
    return 'Hello' + name;
}
//function expression 
const greeter2= function (name) {
    return 'Hello' + name;
} 

//arrow function
const greeter3 = (name) =>{
    return 'Hello' + name;
}

//if one 1 line of code, it can be without {}  return
const greeter = (name) => 'Hello' + name;
console.log(greeter('Tony'));

function greet(greetFunc, name){
    return greetFunc(name);
}

console.log(greet((name)=> 'Hi ' + name, 'Ortal'));

/*
different between function to arrow function:

1. when function created in the execution context 
it create the this, variable environment and the Outer Environment.

2. when arrow function created it don't have the this only variable environment and the outer environment.  

*/

function Timer(){
    this.seconds = 0;

    // setInterval(()=> {
    //     this.seconds ++; //cause it don't have this it will search it on the scope chain
    //     console.log(this.seconds);
    // }, 1000);

    // setInterval(function () {
    //     this.seconds ++; //function  has is own this.
    //     console.log(this.seconds);
    // }, 1000);
}
console.log('****Timer:')
const timer = new Timer();
console.log(timer);

const greeter4 = {
    name: 'Tony',
    //greet attached to arrow function and arrow function doesn't have this, 
    //so it try to go to scope chain 
    greet: () => {
        console.log(this); //window object
        return 'Hello' + this.name;
    },
    //greet2 has the this that point to the object
    greet2: function () {
        console.log(this); //
        return 'Hello' + this.name;
    } 


}

console.log(greeter4.greet()) //undefined
console.log(greeter4.greet2()) 


/*
Summary:
    arrow function - 
    are very usefull for call back.
    problematic on function in object couse they dont have the this.
    on function it go out on scope chain and find it
*/