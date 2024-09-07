
const doWork = (resolve, reject) =>{
    setTimeout(()=> {
        resolve("Hello world")
    }, 1000);
};
//we want the doOtherWork done only after doWork is complete.
const doOtherWork = (resolve, reject) =>{
    setTimeout(()=> {
        resolve("How are you?")
    }, 3000);
};
// someText is the promise,future value
let someText = new Promise(doWork);

//each then(callback) add the callback to array of handlers.
// important!! : 2 promises with 1 handler for each.

// option1:
// let someOtherText= someText
// .then((val)=> {
//     console.log('1st log: ' + val);
//     return "How are you 2?"
// });

// someOtherText.then((val) => {
//     console.log(val);
// })

//option 2
//still 2 promises with 1 handler for each

//.then return promise, also the function.
someText
.then((val)=> {
    console.log('1st log: ' + val);
    //return "How are you 2?" //wrapp the string in promise Promise<string>
    return new Promise(doOtherWork); 
}).then((val) => {
    console.log(val);
});