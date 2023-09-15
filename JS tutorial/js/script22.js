// Object Properties in JavaScript

//object
/*
let person = {};
console.log(person);
*/


/*
let person = {
    firstname: "tayyab",
    'last name' : "rehman"
};

// console.log(person);
// console.log(person.firstname);
//console.log(person[firstname])
console.log(person['last name']);
*/


/*
let person = {
    firstname: "tayyab",
    midname  : "ur",
    lastname : "rehman"
};

//modify the  variable
person.firstname = "ahmad";

person.age = 25;    // new property

//how to delet property
delete person.midname;

// console.log(person.firstname);
// console.log(person.age);
console.log(person);

//check that property is availible or not. it can return a value in true and false.
console.log('hieght' in person);
*/




let person = {
    firstname : "tayyab",
    midname   : "ur",
    lastname  :  "rehman"
};
person.age = 25;

for(let key in person){
    console.log(key + " : " + person[key]);
}