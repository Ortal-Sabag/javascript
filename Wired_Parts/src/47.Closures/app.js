function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Ortal');
var sayHi = greet('Hi');
sayHi('Ortal');