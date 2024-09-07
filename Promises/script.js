/*1 */
let p =new Promise((resolve, reject) => {
    let a= 1+1;
    if(a==2) {
        resolve('Success')
    } else {
        reject('Faild')
    }
});

p.then((message)=> {
    //console.log('this is in the then ' + message);
}).catch((message)=> {
    //console.log('in catch '+message);
});

/*2 */
const userLeft=true;
const userWatchingCatMeme = false;

function watchTutorialCallBack(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'user left',
            message: ':(',
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'user watch the cat meme',
            message: 'web < cat',
        });
    } else {
        callback('Thumbs up and subscribe');
    }
}

watchTutorialCallBack(
    (message) => { /*console.log('Success: ' +message )*/}, 
    (error)=> { /*console.log( error.name + ' ' + error.message)*/}
    );

/* 3*/
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'user left',
                message: ':(',
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: 'user watch the cat meme',
                message: 'web < cat',
            });
        } else {
            resolve('Thumbs up and subscribe');
        }
    })
};

watchTutorialPromise()
.then((message)=> {/*console.log(message)*/})
.catch((error)=> {/*console.log(error.name + ' ' + error.message)*/});

/*4 */
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
});
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
});
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
});

//all - wating for all promises done, return array of messages
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
});

//race - wating for one of the promsses done, only have single message
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
});