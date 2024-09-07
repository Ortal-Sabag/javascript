const doWork = ((resolve, reject) => {
    setTimeout(()=> {resolve("Hello World")}, 1000);
});

const doOtherWork = ((resolve, reject) => {
 setTimeout(()=> {resolve("How are you?")}, 1000);
});

async function doAllTheWork(){
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const otherText = new Promise(doOtherWork);
    const text2 = await otherText;
    console.log(text2);
}

doAllTheWork();
console.log("Done");

/*Syntactic Sugar
Features designed to make writing code more efficient, clean, or understandable but, in reality, don't let you do thing that you couldn't already accomplish before in another way
*/

/*
js engine pass line by line until see the await (a promise)
then the execution context is pause.
and the doAllTheWork get aside from the call stuck.
when the promise finish its work, the async function go back to the stack.
and the rest of the code can continue.

*/