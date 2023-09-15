// Prototype and Prototypal Inheritance in JavaScript

function Creature(ls){
    this.lifespan = ls;
}

Creature.prototype.breath = function(){
    console.log("breathing..");
}

let creature1 = new Creature(100);

console.log(creature1);

function Person(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}


Person.prototype.fullName = function(){
    console.log(this.firstName  + " " + this.lastName);
}

// Person.prototype = Object.create(Creature.prototype);      //here we can replace the creature prototype with person prototype.
Person.prototype.__proto__   = Creature.prototype;         //here we can connect person prototype to creature prototype.



let person1 = new Person("Tayyab", "rehman", 22);
let person2 = new Person("Afnan", "khan", 28);


console.log(person1.fullName());
console.log(person1.breath());
console.log(person1);
console.log(person2);
