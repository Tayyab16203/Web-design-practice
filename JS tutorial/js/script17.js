// The arguments object in JavaScript

// arguments
/*
function add(){
    
    // console.log(arguments.length);
    // console.log( arguments[1] );
    console.log( arguments );

}

add(6 , 4 , 10);
*/




function add(){
    if(arguments.length == 0){
        console.log("No arguments passed !");

    }
    else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum  = sum + arguments[i];

        }
        console.log(sum);
    }
}

add(5, 7, 10);
//we can declare a function as a variable
let addition = add;

addition(4, 30, 30);
