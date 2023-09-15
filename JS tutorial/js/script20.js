// Anonymous Functions in JavaScript

//we can assign a funtion to a variable 
//Function expression  // in this we can use a semi colon in end 
/*
let show = function (){
    console.log("hello world !");
};

show();
*/



//set time out
//1st method
/*
function show(){
    console.log("hello !");
}

setTimeout(show , 2000);
*/

// 2nd method
/*
setTimeout(function show(){
    console.log("hello !");
} , 2000);
*/