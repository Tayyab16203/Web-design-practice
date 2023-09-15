
export let name = "Tayyab";
let age = 22;


export function code(){
    console.log("coding...");
}

export function widthdraw(){
    console.log("User Widthdraw function called...");
}

function cook(){
    console.log("cooking...");
}

import { update } from "./account84.js";
export function up(){
    update();
} 



//default function. funtion having no name.
export default function(){
    console.log("Default function called...");
}


