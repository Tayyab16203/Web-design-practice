import { message, user as us, test } from "./library.js";

console.log(message);

console.log(us("yahoo baba"));

let a =new test();



// import * as yahoo from "./library.js"    //import all  
// console.log(yahoo.message);


import { default as d } from "./library.js"
d();