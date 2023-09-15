// ES6 Class, Object and Inheritance in JavaScript

/*
// ES6 class
class person{
    constructor(n, a){
        this.name = n;
        this.age = a;

    }

    sayhi(){
        console.log("say hi...");
    }

    static sproperty = "something";

    static hello(){        //we can cannot call it by object. but we can call it direct from class. 
        console.log("hello");
    }
}

//object
let person1 = new person("tayyab", 22);
let person2 = new person();

person1.sayhi();
person.hello();
console.log(person.sproperty);
console.log(person1);
*/



/*
// Inheritance
class emp{
    constructor(n){
        this.name = n;
    }

    msg(){
        console.log("hi...")
    }
}

class manager extends emp{          //extends is used for inheritance.
    constructor(p,d){
        super(p);                   //super(p) mean we can call it from class.
        this.department = d;
    }

    msg(){
        console.log("hello...;")
    }
    
    info(){
        super.msg();              //super.msg() mean we can call a method from class emp.
        this.msg();
        console.log(this.name + " is manager of department " + this.department);
    }
}


class admin extends manager{

}


let admin1 = new admin("tayyab", "web development");

console.log(admin1.info());
console.log(admin1);
*/


/*
//public and private property
class emp{
    #name = "";      //private property.in private we can use #. if we can use a # in start of property or method it can be use as private.we can use it only in class.
    constructor(n, a){
        this.#name = n;
        // this.age = a;    //public property
    }

    #getName(){
        console.log(this.#name);
    }

    pubfun(){
        this.#getName();
    }

}

let Emp1 = new emp("Tayyab");

console.log(Emp1);
console.log(Emp1.pubfun());
*/


//Mixin
let usefullMethod = {
    sayhi(){
        console.log("hi..")
    },

    saybye(){
        console.log("bye..")
    }
}

class user{
    constructor(){
        this.name = "Tayyab";
    }
}

class admin extends user{
    
}

Object.assign(user.prototype, usefullMethod);   //Mixin. we can attach a sayhi and saybye  to the user.prototype .

let admin1 = new admin();

console.log(admin1);
console.log(admin1.sayhi());
console.log(admin1.saybye());
