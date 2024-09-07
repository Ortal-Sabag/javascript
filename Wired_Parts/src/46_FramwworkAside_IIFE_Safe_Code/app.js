//IIFE - Imediately Invoked Function Expression
(function(name) {
    var greeting = 'Hello';
    console.log(greeting+ ' ' +name);
}('Ortal'));

console.log(greeting); // Hola

(function(global, name) {
    var greeting = 'Hello';
    global.greeting= 'Hello';
    console.log(greeting+ ' ' +name);
}(window, 'Ortal'));

console.log(greeting); // Hello