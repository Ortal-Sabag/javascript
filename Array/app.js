const items = [
{name: 'Bike', price: 100},
{name: 'TV', price: 200},
{name: 'Album', price: 10},
{name: 'Book', price: 5},
{name: 'Phone', price: 500},
{name: 'computer', price: 1000},
{name: 'keyboard', price: 25}
];

//filter
var filtered = items.filter((item) => {
    return item.price <=100;
});
console.log(filtered); 
// [ { name: 'Bike', price: 100 }, { name: 'Album', price: 10 }, { name: 'Book', price: 5 }, { name: 'keyboard', price: 25 } ]

//map
var maped = items.map((item) => {
    return item.price;
});
console.log(maped); 
// [ 100, 200, 10, 5, 500, 1000, 25 ]

var maped2 = items.map((item, index) => {
    return {price: item.price, index} ;
});
console.log(maped2); 
// [ { price: 100, index: 0 }, { price: 200, index: 1 }, { price: 10, index: 2 }, { price: 5, index: 3 }, { price: 500, index: 4 }, { price: 1000, index: 5 }, { price: 25, index: 6 } ]

//find - 
//return rhe first item that match the condition
var found = items.find((item) => {
    return item.name ==='Book'
});
console.log(found); 
// { name: 'Book', price: 5 }

//forEach - not return anything. liike for loop.
items.forEach((item)=> {
    console.log(item.name);
});

//some - return true or false
var hasExpensiveItems = items.some((item) => {
    return item.price <=100;
});
console.log('hasExpensiveItems:', hasExpensiveItems); 
// hasExpensiveItems: true

//every - return true or false      
var allExpensiveItems = items.every((item) => {
    return item.price >=10
});
console.log('allExpensiveItems:', allExpensiveItems); 
// allExpensiveItems: false

//reduce - return a single value
var reduced = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);
console.log(reduced);

//includes - return true or false
var numberItems = [1, 2, 3, 4, 5];
var included = numberItems.includes(5);
console.log(included);