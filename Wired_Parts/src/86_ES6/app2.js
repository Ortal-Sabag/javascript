//let help as declare the scope fot the variable.
let myVar =1; //let not add it to window object.
{
    let myVar =2;
    console.log(myVar); //2

    {
        let myVar = 3;
        for(let myVar = 4 ; myVar>3 ; myVar--){
            console.log(myVar); //4
        }
        console.log(myVar); //3
    }

}
console.log(myVar); //1
