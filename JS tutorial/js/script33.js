// Hoisting in JavaScript
//it can move the declaration  on top of the execution .

// var x;    //declaration.
// x=7;      //assingment.
// console.log(x);  //call.



var y = 10;    //declaration and assingment.
console.log(y);  //call


//Javascript only see the declaration that where it is.
x = 7;              //assingment.
console.log(x);      //call.
var x;            //declaration.




a = 5;           //it can chose automatic declaration for a as var = a;
console.log(a);




// "use strick"        //in strick modeit can not work.
// a = 5;
// console.log(a);        