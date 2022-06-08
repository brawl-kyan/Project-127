song1 = "";
song2= "";


function preload(){
    song1 = loadSound("Astronaut-in-The-Ocean-song.mp3");
    song2 = loadSound("BTS - Dynamite- [PagalWorld.NL].mp3");    
    }

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,250);
    
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function draw(){
    image(video, 0, 0 , 300, 300);    
    }



