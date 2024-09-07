Array.prototype.myCustomFeature = 'cool!';
var arr = ['john', 'jane', 'jim'];
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]); //myCustomFeature also get printed
}

for (var i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i]); //myCustomFeature does not get printed
}