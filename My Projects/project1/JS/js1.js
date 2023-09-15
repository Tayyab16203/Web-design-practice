console.log("welcome To Spotify");

// Initialize the variables
let songindex = 0;
let audioElement = new Audio('songs/3.m4a');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Coolio - anches", filepath: "songs/1.m4a", coverPath: "images/covers/1.jpeg"},
    {songName: "Tere dill vich na hoya", filepath: "songs/2.m4a", coverPath: "images/covers/2.jpeg"},
    {songName: "Thomas - marten", filepath: "songs/3.m4a", coverPath: "images/covers/3.jpeg"},
    {songName: "Zalima", filepath: "songs/4.m4a", coverPath: "images/covers/4.jpeg"},
    {songName: "Dil-mari-na suna dill ka kys karo", filepath: "songs/5.m4a", coverPath: "images/covers/5.jpeg"},
    {songName: "Ilkay_Sencan_&_Dynoro", filepath: "songs/6.m4a", coverPath: "images/covers/6.jpeg"},
    {songName: "Mohabbat_Ho_Gayi_Thi_Dono_Ko", filepath: "songs/7.m4a", coverPath: "images/covers/7.jpeg"},
    {songName: "Sigma_Rule___Slowed_And_Reverb", filepath: "songs/8.m4a", coverPath: "images/covers/8.jpeg"},
    {songName: "YADAV_BRAND_2__ELVISH_YADAV", filepath: "songs/9.m4a", coverPath: "images/covers/9.jpeg"},
    {songName: "tere dill vich ", filepath: "songs/10.m4a", coverPath: "images/covers/2.jpeg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

//Handle play/pause Click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterSongName.innerText = songs[songindex].songName;
        audioElement.src = `songs/${songindex+1}.m4a`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})


document.getElementById("next").addEventListener('click', ()=>{
    if(songindex >= 9){
        songindex = 0
    } else{
        songindex  +=  1;
    }
    audioElement.src = `songs/${songindex+1}.m4a`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("privous").addEventListener('click', ()=>{
    if(songindex <= 0){
        songindex = 0
    } else{
        songindex  -=  1;
    }
    audioElement.src = `songs/${songindex+1}.m4a`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})