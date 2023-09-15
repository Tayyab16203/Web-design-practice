// JavaScript Cookies (Create, Read and Delete)

document.cookie = "item=milk; expires=sat, 6 aug 2023 12:00:00 UTC";

document.cookie = "loc=pakistan";

document.cookie = "item=bread,Eggs; expires=Tue, 6 aug 2023 12:00:00 UTC";

// document.cookie = "item=bread,Eggs; expires=sat, 1 aug 2023 12:00:00 UTC";    //delete cookie we can write past date

//for read cookie.
let x = document.cookie;

alert(x);

console.log(x);