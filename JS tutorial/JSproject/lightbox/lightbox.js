// JavaScript Project: Lightbox Plugin -Image Pop Up 

//Funtion to include html popup code
function includePopupHTML(){
    
    let html = '<div id="vis-popup"><span id="close" onclick="closePopup()"><img id="npop" src="lightbox/IMAGES/close.png" alt=""></span><img id="leftarrow" src="lightbox/IMAGES/left.png" alt=""><img id="rightarrow" src="lightbox/IMAGES/right.png" alt=""><img id="mainPopImage" src="images/XLjCRpCaYpFQTBXKFcwaPS-1200-80.jpg" alt=""></div>';

    let popdiv = document.createElement("div");

    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)
}


let img;

let current;

//function to init plugin.
function imagePopupInit(target){
    
    //Select all images with class target.
    img = document.getElementsByClassName(target);

    //Add eventlistener on all selected images
    for(var i=  0; i < img.length; i++){
        
        //add pointer
        img[i].style.cursor  = "pointer";   
        
        //add event listener.
        img[i].addEventListener("click", function (){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("vis-popup").style.display = "block";
            checkArrow();
        });
    }


    includePopupHTML();

    //next button
    document.getElementById('rightarrow').addEventListener("click", function(){
        nextimg();
    });

    // previous button
    document.getElementById('leftarrow').addEventListener("click", function(){
        previmg();
    });

}


//close button
function closePopup(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = "none";
}


//Next image
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
}

//previous image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
}

function getCurrentImage(){
    for(var i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById('mainPopImage').src){
            current = i;
        }
    }
}


function checkArrow(){

    getCurrentImage();

    if(current == "0"){

        document.getElementById("leftarrow").style.display = "none";
        document.getElementById('rightarrow').style.display = "block";

    } else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = "none";
        document.getElementById("leftarrow").style.display = "block";
    }else{
        document.getElementById("leftarrow").style.display = "block";
        document.getElementById('rightarrow').style.display = "block";
    }

}