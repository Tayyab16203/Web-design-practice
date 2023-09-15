// Alert, Confirm, and Prompt in JavaScript

/*Functions to interact with the user: alert, prompt and confirm.

1. alert() - shows a message.

2. prompt() - shows a message, input text. It returns the text on ok or, if Cancel button or Esc is clicked, null.

3. confirm() - shows a message, confirm with “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc. 

Note: All these functions pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.*/

//alert
// alert("welcome !");


//prompt
// prompt("Enter your age :");

//confirm
// confirm('Are you sure , You Want to delete ?')



//prompt if else
/*
let age = prompt('Enter your age :');
if(age != null){
    document.write(`Your Age is ${age}`);
}
else{
    document.write("Age field was blank");
}
*/


// confirm if-else
/*
let reponse = confirm("Are you sure , You want to delete ?");
if(reponse){
    document.write("Deleted");
}
else{
    document.write("Not deleted")
}
*/