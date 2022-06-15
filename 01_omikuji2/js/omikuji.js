"use strict";

window.addEventListener("DOMContentLoaded", 
function() {
    $("header").textillate({
        loop: false, 
        minDisplayTime: 1000,
        initialDelay:1000,
        autoStart: true, 
        in: { 
            effect: "fadeInLeftBig", 
            delayScale: 1.5, 
            delay: 50, 
            sync: false, 
            shuffle: true 
        }
    });

        $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
setTimeout(
    function() {
    let popMessage = "いらっしゃい！おみくじ引いてって！";
    window.alert(popMessage);
    },
    "3000"
);
},false
);
let soundEndflag = "0";

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click",
function() {
    if(soundEndflag === "1"){
        soundControl("end","");
    }

    let resultText = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];
    let resultColor = ["#ffffff","#ffffff","#ffffff","#ffffff","#808080","#000000","#000000"];
    let resultFontSize = ["100px","85px","80px","75px","70px","75px","100px"];
    let resultMaxSpeed = ["8","10","10","8","8","20","8"];
    let resultMaxSize = ["70","60","80","100","90","45","60"];
    let resultImage = ["img/clipart666064.png","img2/butterfly1.png","img/sakura2.png","img2/redLeaves7.png","img/momiji.png","img/drop3.png","img/clipart6.png"];
    let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound.mp32","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3"]
    

    let n = Math.floor(Math.random()*resultText.length);

    omikujiText.textContent = resultText[n];
    omikujiText.style.color = resultColor[n];
    omikujiText.style.fontSize = resultFontSize[n];

    w_sound = resultSound[n];
    soundControl("start",w_sound);
    soundEndflag = "1";

    $(document).snowfall("clear");

    setTimeout(
        function(){
            $(document).ready(function(){
                $(document).snowfall({
                    maxSpeed : resultMaxSpeed[n], 
                    minSpeed : 3, 
                    maxSize : resultMaxSize[n], 
                    minSize : 5, 
                    image : resultImage[n]
                });
            });
        },
        "200"
    );
    },false
);

let w_sound
let music
function soundControl(status, w_sound) {
    if(status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if(status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}
