// Generate Random Number in JavaScript
/*
let x = Math.random();      //it can generete a number from 0 - 1  and give in a point for example 0.37 ,  when we can refreah the site it can change the value automaticaly. 
console.log(x);
*/
/*
let x = Math.floor(Math.random()* 10);   // it can give value from 0 upto 9
console.log(x);
*/
/*
let x = Math.floor(Math.random()* 10) + 1;   // it can give value from 1 upto 10
console.log(x);
*/
/*
let x = Math.floor(Math.random() * (25 - 15) + 15) ;   // it can give value from 15 upto 25
console.log(x);
*/

/*
function getrandom(min , max){
    let x = Math.floor(Math.random() * (max - min) + min) ;
    return x;
}
console.log(getrandom(10, 20));      // it can give value from 10 to 19
*/



function getrandom(min , max){
    let x = Math.floor(Math.random() * (max - min + 1)  + min) ;
    return x;
}
console.log(getrandom(10, 20));     // it can give value from 10 to 20
