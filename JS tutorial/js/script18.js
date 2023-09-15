// Returning a value in JavaScript
/*
function add(a, b){
    let d = a + b;
    return d;
    // return a + b + c ;
}


let c = add(5, 7);

document.write(c);
*/

/*
function add(a, b){
    let d = [2, 3, 4];
    return d;
}


let c = add(5, 7);

document.write(c);
*/



//compairing a value
function campare(a, b){
    if(a > b){
        return 1;

    }
    else if(b >a){
        return -1;
    }
    else{
        return 0;
    }
}


let c = campare(5, 5);

document.write(c);