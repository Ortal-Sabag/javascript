
/*
by value:
a = primitive
b=a (or paa by function)
=> a and b will point to 2 diffrent places on memory


by refernce:
a=object 
b= a
both will point to the same object.
*/

var a = 3;
var b;

b=a;
a=2;
console.log(a); //3
console.log(b); //2


var c ={greeting : 'hi'};
var d;

d= c;
c.greeting ='hello';

/*
Mutate - To change something
"Immutable" means it can't be changed.
*/

console.log(c); //hello
console.log(d); //hello

function changeGreeting(obj) {
    obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c); //Hola
console.log(d); //Hola

//c point ot new object in memory, = operator set c to new location in memory
c={greeting: 'howdy'};
console.log(c); //howdy
console.log(d); //Hola