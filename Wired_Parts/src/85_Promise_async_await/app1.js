/*Promises - object that represent future object  */

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;


function CustomPromise(executor){
    let state = PENDING;
    let value = null; //result value
    let handlers =[]; //array of handler 
    let catches = []; //handler in case of errors

    //work done and i have result.
    //give the function to executer.
    function resolve(result){
        if(state!== PENDING) return;
        
        state = FULFILLED;
        value = result;

        handlers.forEach((h) => h(value))
    }

    function reject(err) {
        if (state!=PENDING) return;
        
        state = REJECTED;
        value = err;

        catches.forEach((c)=> c(value));
    }

    this.then = function(callback){
        if (state == FULFILLED){
            callback(value);
        } else {
            handlers.push(callback);
        }
    }

    executor(resolve, reject); //when new CustomPromise happen, this line of code immediately invoke and give the both functions to executer= do work
}

const doWork = (res, rej) =>{
    setTimeout(()=> {
        res("Hello world")
    }, 1000);
};

// someText is the promise,future value
let someText = new CustomPromise(doWork);

//each then(callback) add the callback to array of handlers.
someText.then((val)=> {
    console.log('1st log: ' + val);
});

someText.then((val)=> {
    console.log('2st log: ' + val);
});

setTimeout(()=> {
    someText.then((val)=> {
        console.log('3st log: ' + val);
    });
}, 3000);