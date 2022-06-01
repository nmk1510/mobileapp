"use strict";

window.addEventListener("DOMContentLoaded", 
function() {
    let popMessage = "いらっしゃい！おみくじ引いてって！";
    window.alert(popMessage);
},false
);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
function() {
    const n = Math.floor(Math.random()*7);

    switch(n) {
        case 0:
            btn1.textContent = "大吉";
            btn1.style.color = "#ffffff";
            btn1.style.fontSize = "40px";
            btn1.style.backgroundColor = "#ff0000";
            break;
        case 1:
            btn1.textContent = "中吉";
            btn1.style.color = "#ffffff";
            btn1.style.fontSize = "40px";
            btn1.style.backgroundColor = "#dc143c";
            break;
        case 2:
            btn1.textContent = "小吉";
            btn1.style.color = "#ffffff";
            btn1.style.fontSize = "40px";
            btn1.style.backgroundColor = "#c71585";
            break;
        case 3:
            btn1.textContent = "吉";
            btn1.style.color = "#ffffff";
            btn1.style.fontSize = "30px";
            btn1.style.backgroundColor = "#ff69b4";
            break;
        case 4:
            btn1.textContent = "末吉";
            btn1.style.color = "#808080";
            btn1.style.fontSize = "40px";
            btn1.style.backgroundColor = "#ffb6c1";
            break;
        case 5:
            btn1.textContent = "凶";
            btn1.style.color = "#000000";
            btn1.style.fontSize = "40px";
            btn1.style.backgroundColor = "#a9a9a9";
            break;
        case 6:
            btn1.textContent = "大凶";
            btn1.style.color = "#000000";
            btn1.style.fontSize = "20px";
            btn1.style.backgroundColor = "#696969";
            break;
    }
},false
);
