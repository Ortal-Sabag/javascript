var q = $('ul.people li');
console.log(q);

var q2 = $('ul.people').addClass('newClass').removeClass('people');
console.log(q2);

/*
Method chaining :
calling one method after another, and each method affects the parent object.
so obj.method1().method2() where both methods end up with a "this" variable pointing to 'obj';
*/