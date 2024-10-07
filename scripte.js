console.log("Welcome to Sargam");
let songIndex = 0;
let audioElement = new Audio('englishSongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "FairyTail", filePath: "englishSongs/1.mp3", coverPath: "englishCovers/1.jpeg"},
    {songName: "Attention- Charlie Puth", filePath: "englishSongs/2.mp3", coverPath: "englishCovers/2.jpeg"},
    {songName: "I told you long ago", filePath: "englishSongs/3.mp3", coverPath: "englishCovers/3.jpeg"},
    {songName: "Hoist The color-POTC", filePath: "englishSongs/4.mp3", coverPath: "englishCovers/4.jpeg"},
    {songName: "Davy Jones-POTC", filePath: "englishSongs/5.mp3", coverPath: "englishCovers/5.jpeg"},
    {songName: "Let Me Down Slowly", filePath: "englishSongs/6.mp3", coverPath: "englishCovers/6.jpeg"},
    {songName: "Lay All Your Love-ABBA", filePath: "englishSongs/7.mp3", coverPath: "englishCovers/7.jpg"},
    {songName: "Bella Ciao", filePath: "englishSongs/8.mp3", coverPath: "englishCovers/8.jpeg"},
    {songName: "Faded", filePath: "englishSongs/9.mp3", coverPath: "englishCovers/9.jpeg"},
    {songName: "Alone", filePath: "englishSongs/10.mp3", coverPath: "englishCovers/10.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `englishSongs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `englishSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `englishSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})