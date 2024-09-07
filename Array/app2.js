let names = ['Alice', 'Bob', 'Charlie', 'David'];
//toString
let stringNames = names.toString();
console.log(stringNames);

//join
stringNames = names.join(',');
console.log(stringNames);
stringNames = names.join(' and ');
console.log(stringNames);

//concat
let names2 = ['Frank', 'Grace'];
let joined= names.concat(names2);
console.log(joined); // ['Alice', 'Bob', 'Charlie', 'David', 'Frank', 'Grace']
let names3 = ['Karl', 'Lily'];
joined = names.concat(names2, names3); // ['Alice', 'Bob', 'Charlie', 'David', 'Frank', 'Grace', 'Karl', 'Lily']

//splice
// 1st parameter is the index, 2nd parameter is the number of elements to remove
// change the original array.
let namesCopy = [...names];
namesCopy.splice(1,1); // ['Alice', 'Charlie', 'David']
let namesCopy2 = [...names];
namesCopy2.splice(1, 2); // ['Alice', 'David']

//slice
// slice out part of array.
//getting as 1st start index, and 2nd second index, but not include the second index.
// doesnt change the original array
let slice = names.slice(1, 3); // ['Bob', 'Charlie']    
console.log(names); // ['Alice', 'Bob', 'Charlie', 'David']
// if not sending second argument it will take all the rest of the array.
names.slice(1); // ['Bob', 'Charlie', 'David']

//indexOf and lastIndexOf
let names4 = ['Alice', 'Bob', 'Charlie', 'David', 'Bob'];
let index = names4.indexOf('Bob'); // 1 , find the index of the first element that match the condition
index = names.indexOf('Eve'); // -1
index = names4.lastIndexOf('Bob'); // 4


let nums = [1, 2, 3, 4,[5, 6, [7, 8]], 9];
//flat
console.log(nums.flat()); // [1, 2, 3, 4, 5, 6, [7, 8], 9], by default it will flat one levels
console.log(nums.flat(1)); // [1, 2, 3, 4, 5, 6, [7, 8], 9]. 1 is the depth of the array.
console.log(nums.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//forEach
//high order function, return function.
//we are using call back function
let count = 0;
names.forEach((name) => {
    console.log(name); // Alice, Bob, Charlie, David
    count++;
});
console.log(count); // 4
//equal to : 
for (let i=0; i< names; i++) {
    console.log(names[i]);
}

//map
let numbers = [1, 2, 3, 4, 5, 6];
let double= numbers.map((num)=> {
    num * 2
});
console.log(double); // [2, 4, 6, 8, 10, 12]

//filter
let blogPost = [
    {title: 'post1', author:'ortal'},
    {title: 'post2', author:'ariel'},
    {title: 'post3', author:'refael'},
    {title: 'post4', author:'ortal'},
];

let dansPost = blogPost.filter((post) => {post.author === 'ortal'}); // [{title: 'post1', author:'ortal'}, {title: 'post4', author:'ortal'}]

//reduce - take array and reduce iit to single value.
// init value for total , by default is the first item on the array.
// so it will start with 1.
let numbers2 = [1, 2, 3, 4, 5, 6];
numbers.reduce((sum, num) => {
    sum += num;
});
//console.log(sum); //21
//reduce take 2nd argumant for initialize the sum.
numbers.reduce((sum, num) => {
    sum += num;
}, 10);
//console.log(sum); //31

let maximum = numbers.reduce((max, num) => {
    if(max > num){
        max = num
    }
});
console.log(maximum); //6

let max2 = numbers.reduce((a, b) => Math.max(a,b), -Infinity); //initivalue is -infinity and find the more bigger value.

//some 
//return true if at least one element in the array pass the test.
numbers2.some((num)=>{ num > 5}); //true
numbers2.some((num)=>{ num > 6}); //false

//every
numbers.every((num)=> num>0); //true
numbers.every((num)=> num>1); //false

//find,
numbers.find((num)=> num >3); //4
let stock = [
    {item :'ketchup', quantity: 32},
    {item :'mayo', quantity: 0},
    {item :'hot souse', quantity: 12},
];

let mayo = stock.find((s) => s.item === 'mayo'); // {item :'mayo', quantity: 0}
console.log(mayo); 

//sort
let names = ['Danny', 'Alice', 'Bob', 'Charlie', 'David'];
let alph = names.sort();   // ['Alice', 'Bob', 'Charlie', 'Danny', 'David']as

let numbers9 = [2, 4, 1, 8, 5];
let sorted = numbers9.sort(); // [1, 2, 4, 5, 8], it getting sort couse it one digit number. sorting is alphabetical order.
let number10 = [2,4,11,8,5];
let sorted2 = number10.sort(); // [11, 2, 4, 5, 8], sorting is alphabetical order

//solution:
//=========
let sorted3 = number10.sort((a, b) => a - b); // [2, 4, 5, 8, 11], sorting is numerical order.
//init : a = 2, b= 4;
// a -b = 2-4  = -2, a-b is negative value, it mean a should become before b. if a-b postive number, b before a.

