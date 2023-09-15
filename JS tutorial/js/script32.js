// Nested Object in JavaScript

var user = {
    id : 101,
    email : "abc@email.com",
    personalInfo : {                //New object 
        firstname : "tayyab",
        lastname  : "rehman",
             address : {                //new object
                street : "D-block",
                city   : "peshawar",
                country : "pakistan"
            }
    }
};
console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);
