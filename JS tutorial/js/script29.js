// JavaScript Accessors (Getters and Setters).

/*
var person = {
    name : "tayyab",
    age : 25,
    //getter 
    get getname(){
        return this.name.toUpperCase();
    },

}
person.name = "rehman";
console.log(person.getname);
*/


var person = {
    name : "tayyab",
    age : 25,
    //setter 
    set setname(n){
        this.name = n.toUpperCase();
    } 
}
person.setname = "rehman";
console.log(person);

