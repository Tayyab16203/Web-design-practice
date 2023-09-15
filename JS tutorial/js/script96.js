// How to Parse JSON Data in JavaScript

let data = `{
    "name": "Tayyab",  
    "age": 25,
    "is_student": true,
    "passport_no": null,
    "p_lang": ["c", "c++", "java", "python"],
    "address": {
        "city":"islamabad",
        "state":"pakistan",
        "pincode": 213231
    }
}`;

let dObject = JSON.parse(data);


console.log(dObject["p_lang"][1]);
console.log(dObject['address']['pincode']);
