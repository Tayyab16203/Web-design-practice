// String Manipulation in JavaScript


/*
let str = "tayyab";
let greet = `hi ${str}`;  //templete  letral
console.log(greet);
*/

// Scaping  special chararter  backslash \ 
// use of backslash \
/*let str  = "tayyab \n rehman";       // backslach \n mean start with a new line.
console.log(str);*/

/*let str = "tayyab \t rehman";
console.log(str);*/

/*let str = "tayyab \\ rehman";        // Use of backslash \ in string.
console.log(str);*/

/*let str = "tayyab \" rehman";
console.log(str);*/

/*let str = 'tayyab \' rehman';
console.log(str);*/



//find String Length.
/*let str ="tayyab rehman";
console.log(str.length);*/

//Find String charactor Number.
/*let str = "tayyab rehman";
console.log(str[3]);*/


//concatinate a String its mean Add two Strings.
/*let str = "tayyab";
let str2 = " rehman";
let str3 = str.concat(str2);
console.log(str3);
*/
/*
let str = "tayyab";
let str2 = " rehman";
console.log(str + str2);
*/


//Compare the string
/*let str = 'Tayyab';
if('tayyab' == str){
    console.log('Equal');
}
else{
    console.log('not Equal');
}
*/



//SubString intereact
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let subString = str.substr( 8 , 19);
console.log(subString);
*/
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let subString = str.substring( 8 , 27);
console.log(subString);
*/



//Find a word position in string
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let position = str.indexOf( 'good');
console.log(position);
*/
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let position = str.indexOf( 'is', 10);    //Search from start index
console.log(position);
*/
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let position = str.lastIndexOf( 'is');     //search from last index.
console.log(position);
*/



//Removing White Space form String.
//The String Start Space And End Space is White Space
//it remove the starting and ending extra space
/*
let str = ("     This is javascript tutorial, it is a good tutorial.    ");
let trimredstr = str.trim();
console.log(str);
console.log(trimredstr);
*/
//remove string starting space
/*
let str = ("     This is javascript tutorial, it is a good tutorial.    ");
let trimredstr = str.trimStart();
console.log(str);
console.log(trimredstr);
*/
//remove string end space
/*
let str = ("     This is javascript tutorial, it is a good tutorial.    ");
let trimredstr = str.trimEnd();
console.log(str);
console.log(trimredstr);
*/



//To convert string into uppecase and lowercase 
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let trimredstr = str.toUpperCase();
console.log(str);
console.log(trimredstr);
*/
/*
let str = (" This is javascript tutorial, it is a good tutorial.");
let trimredstr = str.toLowerCase();
console.log(str);
console.log(trimredstr);
*/


//To replace a letter into a string.
/*
let str = ("This is javascript tutorial, it is a good tutorial.");
let trimredstr = str.replace('good','best' );
console.log(str);
console.log(trimredstr);
*/



//To check a letter that includes in String or not , by using include funtion
/*
let str = ("     This is javascript tutorial, it is a good tutorial.    ");
let trimredstr = str.includes('good');
console.log(str);
console.log(trimredstr);
*/