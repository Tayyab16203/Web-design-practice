// JavaScript Filter Function

/*
let arr = [2, 22, 13 , 5 , 6, ,61, 23, 7];

let arr1= arr.filter(val => val > 10);

// let arr1 = arr.filter(function(val){
//     return val > 10;
// });

console.log(arr1);
*/

let team =  [
    {
        name : "Tayyab",
        position : "developer"
    },
    {
        name : "Afnan",
        position : "ui designer"
    },
    {
        name : "Asad",
        position : "developer"
    },
    {
        name : "hamza",
        position : "contact maanger"
    },
    {
        name : "usman",
        position : "cto"
    },
    {
        name : "umar",
        position : "backend enginear"
    },
    {
        name : "faizan",
        position : "developer"
    },
]

//use of arrow funtion in filter function.
let developer = team.filter(val => val.position == "developer")

console.log(developer);