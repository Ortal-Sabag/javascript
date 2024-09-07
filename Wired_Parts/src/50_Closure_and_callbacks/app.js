function sayHiLater() {
    var greeting = 'Hi';
    setTimeout(function(){ //=> callback function. This is a first-class function
        console.log(greeting);
    }, 3000);
}

sayHiLater();
//Jquery uses function expressions and first-class functions!
// $("button").click(function(){

// });


// Callback function: A function you give to another function, to be run when the other function is finished.
function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work
    
    callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function(){
    console.log('I am done!');
});

tellMeWhenDone(function(){
    alert('I am done!');
});
