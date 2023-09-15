// JavaScript Switch
//If input  =  1,   "y",   "yes"  output = Continue.......
//if input  =  0,   "n",   "no"   output =  End.......

let input;
input = "n";

switch(input){
    case 1 :
        document.write("continue.....");
        break;
    case "y":
        document.write("continue.....");
        break;
    case "yes":
        document.write("continue.....");
        break;
    case 0 :
        document.write("End.....");
        break;
    case "n":
        document.write("End.....");
        break;
    case "no":
        document.write("End.....");
        break;
    default :
        document.write("wrong input..")
    break;
}



//shotcut of switch 
/*
let input;
input = "n";

switch(input){
    case 1 :
    case "y":
    case "yes":
        document.write("continue.....");
        break;
       
    case 0 :
    case "n":
    case "no":
        document.write("End.....");
        break;
    
    default :
        document.write("wrong input..")
    break;
}
*/