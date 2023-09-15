// The JavaScript "this" Keyword

let person = {
    firstname : 'tayyab',
    lastname  :  'rehman',
    sayhello (){
        console.log("hello ! i am "+ this.firstname +" and i have a  " + car.brand+ " car");    //"this" mean function call to him
    }
};

let car ={
    brand :'tata',
    model : 'safari'
}

person.sayhello();