console.log(this); //window object.

function a() {
    console.log(this);
    this.newvariable ='hello'; //attached new variable to global object.
}

a(); //window object.
console.log(newvariable); //hello

var b= function() {
    console.log(this);
}
b(); //window object

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        this.name = "Updated c object";
        console.log(this);  //c object
        var setname = function(newname){
           this.name= newname; //window object, on internal function
           self.name = newname;
        }
        setname('update again! the c object');
        console.log(this); //c object
    }
}

c.log(); //c object.