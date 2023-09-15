// Object constructor function in JavaScript

function Student(first, last ,age, cls,){
    this.firstname =first,
    this.lastname = last,
    this.age = age,
    this.class = cls
}
var student1 = new Student("tayyab", "rehman",  25, 5);

student1.nationality = "pakistan";             //add new property

student1.name = function(){
    return this.firstname + " " + this.lastname;
}

// var student2 = new Student("haris", "ahmad", 22, 4);
// var student3 = new Student("faizan", "hakeem",  20, 2);

console.log(student1);
console.log(student1.name());