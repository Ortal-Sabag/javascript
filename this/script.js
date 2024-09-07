/* 
This is the object that is executing the cureent function.
    1. if the function is part of object, we call it method, 
    the this is the object it self. method -> object.
    2. if the function is global one not part of object. 
    function -> global object (window in browser, global in node)
*/

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
}

video.play();
video.stop(); //stop is method in video object


function playVideo() {
    console.log(this);
}

playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}

//new keyword create empty object. and the this of the method to the new empty object
const v = new Video('a');  //{}

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this, tag); // here we are indide of regular function, callback function, it reference to global object
        })
    }
}
video2.showTags();


//FoeEach getting as second parameter the object we wnt it be related to .
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this, tag); 
        }, {firstMame: 'Ortal', lastName: 'sabag'});
    }
}
video3.showTags();

const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag); // here we are indide of regular function, callback function, it reference to global object
        }, this);
    }
}
video4.showTags();

//not all the method on javascript give you the ability to pass this argumet.
