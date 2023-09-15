let account_no = 23796962;
let account_type = "saving";

function widthdraw(){
    console.log("Account Widthdraw function called...");
}

function deposit(){
    console.log("balance updated ...");
}

export function update(){
    console.log("Account updating.....");
}

//Shotcut of export.
export {widthdraw, deposit};

//default function. funtion having no name.
export default function(){
    console.log("Account Default function called...");
}
