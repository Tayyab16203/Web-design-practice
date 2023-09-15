// Type Conversion in JavaScript

//Automatic convertion
/*
let type = "5" - 2;
console.log(type);
console.log(typeof type);
*/
/*
let type = "5" * "2";
console.log(type);
console.log(typeof type);
*/
/*
let type = "5" / "2";
console.log(type);
console.log(typeof type);
*/
/*
let type = "5" * "yes";  //its gives NAN output because "yes" is not a number.    NAN mean 'Not A Number'
console.log(type);
console.log(typeof type);
*/



//Type convertion
// 1. String().
// 2. Number().
// 3. boolean().


// We convert number into string.
/*
let type = 4;
console.log(typeof type);
let NewType = String(type);
console.log(typeof NewType);
*/

//Convert boolean into string.
/*
let type = false;
console.log(typeof type);
let NewType = String(type);
console.log(typeof NewType);
*/

//Convert String into Number.
/*
let type = "hello";
console.log(typeof type);
let NewType = Number(type);
// console.log(NewType);   
console.log(typeof NewType);
*/
 
//Convert Boolean into Number.
/*
let type = true;      // In Boolean : false = 0 and True = 1.
console.log(typeof type);
let NewType = Number(type);
// console.log(NewType);
console.log(typeof NewType);
*/

//Convert Number into Boolean.
/*
let type = 0;     //In boolean only 0 can show false , Any other Number can show true.
console.log(typeof type);
let NewType = Boolean(type);
console.log(NewType);
console.log(typeof NewType);
*/
//Convert Number into Boolean.
/*
let type = 2;     //In boolean only 0 can show false , Any other Number can show true.
console.log(typeof type);
let NewType = Boolean(type);
console.log(NewType);
console.log(typeof NewType);
*/

//Convert String into Boolean.
/*
let type = "";     //In boolean only Empty String can show false , The fill String can show true.
console.log(typeof type);
let NewType = Boolean(type);
console.log(NewType);
console.log(typeof NewType); 
*/
//Convert String into Boolean.
/*
let type = "hello";     //In boolean only Empty String can show false , The fill String can show true.
console.log(typeof type);
let NewType = Boolean(type);
console.log(NewType);
console.log(typeof NewType); 
*/