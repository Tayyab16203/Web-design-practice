// JavaScript Map Function.

/*
//without map funtion.
let arr = [2,3 ,4, 5, 6];

let arr1 = [];

for(let i = 0; i < arr.length; i++){
    arr1[i] = arr[i] * 2;
}

console.log(arr1);
*/


/*
// Map function. we use anonymous funtion in map function.
let arr = [2, 3, 4, 5, 6];

let arr1 = arr.map(function(val){
    return val * 3;
});

console.log(arr1);
*/


// Map function. we use arrow funtion in map function.
let arr = [2, 3, 4, 5, 6];

let arr1 = arr.map((val) => val * 3);

console.log(arr1);