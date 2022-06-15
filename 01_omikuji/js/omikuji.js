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

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
function() {
    let resultText = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];
    let resultColor = ["#ffffff","#ffffff","#ffffff","#ffffff","#808080","#000000","#000000"];
    let resultFontSize = ["50px","45px","40px","35px","30px","35px","50px"];
    let resultMaxSpeed = ["8","10","10","8","8","20","8"];
    let resultMaxSize = ["70","45","35","30","60","45","60"];
    let resultImage = ["img/clipart666064.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/leaf.png","img/momiji.png","img/drop3.png","img/clipart6.png"];
    let resultBackgroundColor = ["#ff0000","#dc143c","#c71585","#ff69b4","#ffb6c1","#a9a9a9","#696969"];
    

    let n = Math.floor(Math.random()*resultText.length);

    btn1.textContent = resultText[n];
    btn1.style.color = resultColor[n];
    btn1.style.fontSize = resultFontSize[n];
    btn1.style.backgroundColor = resultBackgroundColor[n];
    
    /*const n = Math.floor(Math.random()*7);
    switch(n) {
        case 0:
            btn1.textContent = "大吉"; btn1.style.color = "#ffffff"; btn1.style.fontSize = "40px"; btn1.style.backgroundColor = "#ff0000"; break;
        case 1:
            btn1.textContent = "中吉"; btn1.style.color = "#ffffff"; btn1.style.fontSize = "40px"; btn1.style.backgroundColor = "#dc143c"; break;
        case 2:
            btn1.textContent = "小吉"; btn1.style.color = "#ffffff"; btn1.style.fontSize = "40px"; btn1.style.backgroundColor = "#c71585"; break;
        case 3:
            btn1.textContent = "吉"; btn1.style.color = "#ffffff"; btn1.style.fontSize = "30px"; btn1.style.backgroundColor = "#ff69b4"; break;
        case 4:
            btn1.textContent = "末吉"; btn1.style.color = "#808080"; btn1.style.fontSize = "40px"; btn1.style.backgroundColor = "#ffb6c1"; break;
        case 5:
            btn1.textContent = "凶"; btn1.style.color = "#000000"; btn1.style.fontSize = "40px"; btn1.style.backgroundColor = "#a9a9a9"; break;
        case 6:
            btn1.textContent = "大凶"; btn1.style.color = "#000000"; btn1.style.fontSize = "20px"; btn1.style.backgroundColor = "#696969"; break;
    }*/

    $(document).snowfall("clear");

    $(document).ready(function(){
    $(document).snowfall({
        maxSpeed : resultMaxSpeed[n], 
        minSpeed : 3, 
        maxSize : resultMaxSize[n], 
        minSize : 5, 
        image : resultImage[n]
    });
});
},false
);
