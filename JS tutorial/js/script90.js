// JavaScript Callback Function

function sayhello(){
    console.log('hello');
}

function sayhi(){
    console.log('hi..');
}

function add(num1, num2, Callback){     //callback function.
    console.log(num1 + num2);
    Callback();
}

let a = 10;
let b = 20;

add(a, b, sayhello);
add(2, 5, sayhi);

add(20, 80, function(){
    console.log("Bye..")
});