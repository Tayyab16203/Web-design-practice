// Web Storage (Local storage and Session storage)


//Locaol storage
localStorage.setItem("Firstname", "Tayyab");
localStorage.setItem("Lastname", "rehman");
localStorage.setItem("Location", "pakistan");

//getitem
console.log(localStorage.getItem("Location"));
//removeitem.
localStorage.removeItem("Lastname");


//Session storage.
sessionStorage.setItem("Firstname", "Tayyab");
sessionStorage.setItem("Lastname", "rehman");
sessionStorage.setItem("Location", "pakistan");

//getitem
console.log(sessionStorage.getItem("Firstname", "Tayyab"));

//removeitem.
sessionStorage.removeItem("Lastname");