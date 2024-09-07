fetch('video.json')
.then(response => response.json())
.then(data => console.log(data));

/*
Thenable object -
an object that has a "then" function.
*/

