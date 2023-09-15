// Object Methods in JavaScript

// 1st method.
let person = {
    firstname : "tayyab",
    midname   : "ur",
    lastname  :  "rehman"
};
person.age = 25;
person.sayhello =function (){
    console.log("hello !");
}
person.sayhello();



//2nd method
/*
let person = {
    firstname : "tayyab",
    midname   : "ur",
    lastname  :  "rehman"
};
person.age = 25;

function greet(){
    console.log("Hello !");
}
person.hello = greet;
person.hello();
*/




//3rd method
/*
let person = {
    firstname : "tayyab",
    midname   : "ur",
    lastname  :  "rehman",
    sayhello : function (){
        console.log("Hello !");
    }
};
person.age = 25;

person.sayhello();
*/



//4th method
/*
let person = {
    firstname : "tayyab",
    midname   : "ur",
    lastname  :  "rehman",
    sayhello  () {
        console.log("Hello !");
    }
};
person.age = 25;

person.sayhello();
*/
