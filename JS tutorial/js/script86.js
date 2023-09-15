// OOPs Before ES6 (JavaScript)

/*
let person1 = {
    firstName: 'Tayyab',
    lastName: 'rehman',
    age: 22,


    fullName : function (){
        console.log(this.firstName + " " + this.lastName);
    }
};


person1.fullName();     

// person1.age = 19;

// console.log(person1.age);
*/


/*
let person1 = {};
// let person1 = new Object();   //2nd method of creating object.

person1.name = 'tayyab';

person1.sayhi = function (){
    alert("hi");
}

console.log(person1);
person1.sayhi();
*/


//Constructor Function.
function Person(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;

    this.sayhi = function(){
        alert("hi");
    }

    this.changeAge = function(newAge){
        this.age = newAge;
    }
}

let person1 = new Person("tayyab", 'rehman', 22);
person1.changeAge(28);

let person2 = new Person("afnan",'khan', 20);

console.log(person1);
console.log(person2);
