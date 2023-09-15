// Break, Continue and Nested Loop in JavaScript

//use of break loop
/*
for(let counter = 1; counter <= 10; counter++){
    if(counter == 5){
        break;
    }
    document.write(counter);
    document.write('<br>');
}
*/

//use of continue loop
/*for(let counter = 1; counter <= 10; counter++){
    if(counter == 5){
        continue;
    }
    document.write(counter);
    document.write('<br>');
}
*/


//Nested Loop
/*for(let counter = 1; counter <= 10; counter++){
        document.write(counter);
        document.write("<br>");

    for(let counter2 = 1; counter2 < 3; counter2++){
        if(counter == 3){
            break;
        }
        
        document.write("tayyab");
        document.write("<br>");

    }
}
*/


//Nested Loop
outer: for(let counter = 1; counter <= 10; counter++){
    document.write(counter);
    document.write("<br>");

for(let counter2 = 1; counter2 < 3; counter2++){
    if(counter == 3){
        break outer;                   //break the outer loop
    }
    
    document.write("tayyab");
    document.write("<br>");

}
}