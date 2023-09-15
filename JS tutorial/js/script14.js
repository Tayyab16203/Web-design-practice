// Operations on Array in JavaScript

//Add element in Start and End of Array
/*
let book = ["maths", "physics", "bio", "computer science"];
book.unshift("urdu");  //write element  on start of array.   //add in start.
book.push("hindi");    //write element  on end of array.     //add in end.
console.log(book);
*/


//Remove element in start and End of array
/*
let book = ["maths", "physics", "bio", "computer science"];
book.pop();         //Remove element from End of array.       //Remove  from End.
// book.pop();   
book.shift();       //Remove element from start of array.     //Remove from start.
// book.shift();    
console.log(book);
*/


//Remove element from Mid of array.
/*
let book = ["maths", "physics", "bio", "computer science"];
book.splice(2,1);
console.log(book);
*/



//Empty of all array
/*
let book = ["maths", "physics", "bio", "computer science"];
// book = [];  // 1st method.
book.length = 0;
console.log(book);
*/



//Find position of Element in array
/*
let book = ["maths", "physics", "bio", "computer science"];
let position = book.indexOf("bio");
console.log(position);
*/



//checking of Array
/*
let book = ["maths", "physics", "bio", "computer science"];        //it is array
let book1 = "math";       //it is not arraay 
console.log(Array.isArray(book1));
*/



//We can convert word into Array
/*
let text = "This is a random text";
let wordarray = text.split(' ');    
console.log(wordarray); 
*/



// we can join Array element into text
/*let book = ["maths", "physics", "bio", "computer science"];    
let array = book.join(' ');    
// let array = book.join('-');    
console.log(array); 
*/



// Add of two or more Array
/*
let book1 = ["maths", "physics", "bio", "computer science"];  
let book2 = ["urdu", "English"];
let book3 = ["punjabi", "hindi"];
let newbook = book1.concat(book2, book3)
console.log(newbook)  
*/


//Multi Dimentional array     :   it means that we can add one array in the mid of second array.
/*
let bookwithpages = [
    ["math", ["300", "500"] ], 
    ["physics", ["600", "700"] ],
    ["bio", "400"]
    ];

console.log(bookwithpages);
*/



//find  element in Array
/*
let bookwithpages = [
    ["math", ["300", "500"] ], 
    ["physics", ["600", "700"] ],
    ["bio", "400"]
    ];

let book =bookwithpages[0][1][0];
console.log(book);
*/




//Access of all elements
/*
let book = ["math", "physics", "bio", "cumputer science"];
let booklenght = book.length;
for(i = 0; i < booklenght;  i++){

    console.log(`Element  ${i} is ${book[i]} \n`);
}
*/



//Acess of function
/*
let book = ["math", "physics", "bio", "cumpoter science"];
book.forEach(myfu);   //use of for foreach
function myfu(value){
    
    console.log(value);
}
*/