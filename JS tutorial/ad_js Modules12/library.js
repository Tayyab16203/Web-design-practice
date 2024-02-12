export let message = "ES6 Modules";

function user(name){
    return `hello ${name}`;
}

class test{
    constructor(){
        console.log("Constructor Method");
    }
}
export{user, test}    //Shotcut for multiple exports.

export default function(){
    console.log("hello default");
}