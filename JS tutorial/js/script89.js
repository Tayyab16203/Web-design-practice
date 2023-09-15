// JavaScript Arrow function in ES6

function sum(a , b){
    return a + b;
}




//Arrow function.
let sumA = (a , b) => {
    return a + b;
}

let sumb = (a , b) => a+b;   //shortest form of arrow function. it is valid when the funtion has only one line code.

let double = a => 2*a;       //for single parameter it is valid.

let random = () => Math.random();    //for null parameter .

console.log(sum(2,3));
console.log(sumA(2,3));
console.log(sumb(2,3));
console.log(double(10));
console.log(random());




// document.addEventListener("click", function(){ 
//     console.log("Clicked...");
// });

//use of Arrow function
document.addEventListener("click", () => console.log("Clicked..."));