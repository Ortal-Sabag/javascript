Boolean(undefined) // false
Boolean(null) // false
Boolean('') // false
Boolean(0) // false
Boolean(NaN) // false

var a;
a=0;
//goes to internet and looks for a value.
//here a is coerced to a boolean, but if we initialize a with a 0, it will be false.
if (a || a === 0) {  //strick equality has higher precedence than logical OR, so it will be a || true = > true
    console.log('Something is there.');
} else {
    console.log('Nothing is there.');
}
