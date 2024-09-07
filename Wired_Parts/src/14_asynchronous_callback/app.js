/*
asynchronous: 
more than one at a time.

js engine is synchronous.
it doesn't execute asynchrously it execute code line in a time.

how js engine handle asynchrous event like asyn call, click event and all the callback functions when event complete?


the java script is not stand alone. under the browswer threre are also the 
rendering engine, http request, timer, web api, call stack, event listener, callback function, callback queue, event loop.

js engine- has 2 lists:
1. execution stuck.
2. Event Queque

event queue is the list notification of event that might be happened.
for example, click event. when we click the button, the click event is added to the event queue.

each time something on the browser happens, the browser add it to the event queue.
like click event, if someone click on the screen, and we have handle for this event or some http request.
all the event saved on the event queue.

when execution stack is empty, the js engine check the event loop.
and if something is there, it check if some function need to be call couse of it.
and it move the event from the event queue to the execution stack and execute it.
for example, if we have click event, it will move the onClickHandler() to the execution stack and execute it. 

check the event queue and if there is any event in the event queue, it will move the event to the execution stack and execute it.
*/


/* if clicking on the 3 seconds,click insert to the event quue,  click handler will called after  waitThreeSeconds will done and the global exection also
and only after the execution stuck is empty the clickHandler will called.
it will do it to all the event on the evens loop. one by one.

*/
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {   // this is a callback function.
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');