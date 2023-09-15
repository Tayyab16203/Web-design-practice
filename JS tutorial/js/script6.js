// If Else Condition in JavaScript
/*
let age = 19;
if(age>=18){
    alert("you can vote!");
}
else{
    alert("you cannot vote!");
}
*/

 
//Use of AND operator
/*
let age = 18;
let hasvotercard = "No";

if(age>=18 && hasvotercard == "yes"){

    alert("you can eligible for vote!");
}
else if(age>=18 && hasvotercard != "yes"){
    
    alert("Get your voter id card");
}
else{

    alert ('you cannot eligible for vote!');
}
*/


//use of Nested If.
/*
let age =20;
let hasvotercard = "no";

if (age>=18){

    if(hasvotercard == "yes"){
        alert("you can vote!");
    }
    else{
        alert("get your voter id card!");
    }

}
else{

    alert ('you cannot eligible for vote!');
}
*/



/*
let isloggedin = 1; //If 0 loggedout ,If 1 loggedin 

if (isloggedin == 0){
    
    document.write('Login');
}
else {
    document.write('Logout');
}
*/

//use of Ternary operator
/*
let isloggedin = 1;
let option = isloggedin == 1 ? "logout" : "login";
//      Condition               true    false
document.write(option);
*/



//use of Nearest operator.
/*
let user;
// user = "tayyab"; //if varaiable value can not availible then we use this sign ?? .
alert(user ?? "Guest user" );
*/



//If input  =  1,   "y",   "yes"  output = Continue.......
//if input  =  0,   "n",   "no"   output =  End......
/*
let input;
input = "y";

if(input === 1){
    document.write("continue.....");
}
else if(input === "y"){
    document.write("continue.....");
}
else if(input === "yes"){
    document.write("continue.....");
}
else if(input === 0){
    document.write("End.....");
}
else if(input === "n"){
    document.write("End.....");
}
else if(input === "no"){
    document.write("End.....");
}
else{
    document.write("Wrong input...");
}
*/


//shotcut of if-else-if Use of OR operator ||
let input;
input = "y";

if(input === 1 || input === "y" || input === "yes"){
    document.write("continue.....");
}
else if(input === 0 || input === "n" || input === "no"){
    document.write("End.....");
}
else{
    document.write("Wrong input...");
}
