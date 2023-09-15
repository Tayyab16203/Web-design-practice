// JavaScript Prototypes

function Student(first, last ,age, cls,){
    this.firstname =first,
    this.lastname = last,
    this.age = age,
    this.class = cls
    
}
Student.prototype.nationatily = "pakistan";     //we can not use any property with out prototype in constructor.
Student.prototype.name = function(){            //use prototype in the constructor.
        return this.firstname + " " + this.lastname;
    }

var student1 = new Student("tayyab", "rehman",  25, 5);
var student2 = new Student("haris", "ahmad", 22, 4);

console.log(student1);
console.log(student1.name());