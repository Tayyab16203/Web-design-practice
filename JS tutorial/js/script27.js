// Date Objects in JavaScript

/*
let x = new Date();       //it can show the date of our computer 
console.log(x);
*/

/*
        //     new date(year, month, day, hours, mint, seconds, miliseconds);
let x = new Date(2018, 11, 24, 10, 33, 30, 7);
            
console.log(x);
*/

/*
let x =new Date("octobar 14, 2018, 11:12:33");
console.log(x);
*/

/*
let x =new Date("octobar 14, 2018, 11:12:33");

console.log(x.getFullYear());  //it can show the year only.
console.log(x.getMonth());     //it can show the month only.
console.log(x.getDate());     // it can show the date only.
console.log(x.getHours());    //it can show the hours only.
console.log(x.getMinutes());  //it can show the minutes only.
console.log(x.getSeconds());  //it can show the seconds only.
console.log(x.getTime());     // it can show the result in miliseconds.
*/


/*
let x =new Date("octobar 14, 2018, 11:12:33");
x.setFullYear(2020);
x.setMonth(2);
x.setDate(3);
x.setHours(10);
x.setMinutes(50);
x.setSeconds(14);

console.log(x);
*/

/*
let x =new Date("octobar 14, 2018, 11:12:33");
let y =new Date("octobar 14, 2018, 11:12:33");
y.setDate(x.getDate()+5);
y.setFullYear(x.getFullYear() + 4);

console.log(x);
console.log(y);
*/



let x =new Date("octobar 14, 2023, 11:12:33");
let y = new Date();

if(y > x){
    console.log("x is a past date");

}
else if(x >y){
    console.log("x is a future date");
}
else{
    console.log("x is same to the date");
}
