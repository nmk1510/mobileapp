"use strict";

let flag = "goku-flag"

let counter = 9;

const squares = document.getElementsByClassName("square");

const squaresArray = Array.from(squares);

const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");

const levels = document.querySelectorAll(".level");

const level_1 = document.getElementById("level_1");
const level_2 = document.getElementById("level_2");
const level_3 = document.getElementById("level_3");

const newgamebtn_display = document.getElementById("newgame-btn");
const newgamebtn = document.getElementById("btn90");

const line1 = JudgLine(squaresArray, ["a_1","a_2","a_3"]);
const line2 = JudgLine(squaresArray, ["b_1","b_2","b_3"]);
const line3 = JudgLine(squaresArray, ["c_1","c_2","c_3"]);
const line4 = JudgLine(squaresArray, ["a_1","b_1","c_1"]);
const line5 = JudgLine(squaresArray, ["a_2","b_2","c_2"]);
const line6 = JudgLine(squaresArray, ["a_3","b_3","c_3"]);
const line7 = JudgLine(squaresArray, ["a_1","b_2","c_3"]);
const line8 = JudgLine(squaresArray, ["a_3","b_2","c_1"]);

const lineArray = [line1,line2,line3,line4,line5,line6,line7,line8];

const lineRandom = cornerLine(squaresArray, ["a_1","a_3","c_1","c_3"]);

let winningLine = null;

const msgtxt1 = '<p class="image"><img class="abc" src ="img/goku.gif" width=200px height=200px></p><p class="text">GOKU Attack &#9876;! (your turn)</p>';
const msgtxt2 = '<p class="image"><img class="abc" src ="img/vegeta.webp" width=200px height=200px></p><p class="text">VEGETA Attack &#9876;! (computer turn)</p>';
const msgtxt3 = '<p class="image"><img class="abc" src ="img/goku.gif" width=200px height=200px></p><p class="text animate__animated animate__lightSpeedInRight">GOKU WIN &#9876;!</p>';
const msgtxt4 = '<p class="image"><img class="abc" src ="img/vegeta.webp" width=200px height=200px></p><p class="text animate__animated animate__lightSpeedInLeft">VEGETA WIN &#9876;!</p>';
const msgtxt5 = '<p class="image"><img class="abc" src ="img/goku.gif" width=200px height=200px><img src ="img/vegeta.webp" width=200px height=200px></p><p class="text animate__bounceIn">DRAW!!</p>';

let gameSound = ["sound/click1.mp3","sound/click2.mp3","sound/win1.mp3","sound/win2.mp3","sound/draw.mp3"];

function JudgLine(targetArray, idArray) {
    return targetArray.filter(function(e) {
        return(e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}

window.addEventListener("DOMContentLoaded",
    function() {
        setMessage("goku-turn");
        squaresArray.forEach(function(square){
            square.classList.add("js-clickable");
        });
        LevelSetting(0);
    },false
);

let index;
levels.forEach((level) => {
    level.addEventListener("click",() => {
        index = [].slice.call(levels).indexOf(level);
        LevelSetting(index);
    });
});

function LevelSetting(index) {
    level_1.classList.remove("level-selected");
    level_2.classList.remove("level-selected");
    level_3.classList.remove("level-selected");
    level_1.classList.remove("level-non-selected");
    level_2.classList.remove("level-non-selected");
    level_3.classList.remove("level-non-selected");

    if(sessionStorage.getItem("tic_tac_toe_access")) {
        switch(index) {
            case 0:
                sessionStorage.setItem("tic_tac_toe_access", "1");
                level_1.classList.add("level-selected");
                level_2.classList.add("level-non-selected");
                level_3.classList.add("level-non-selected");
                break;
            case 1:
                sessionStorage.setItem("tic_tac_toe_access", "2");
                level_1.classList.add("level-non-selected");
                level_2.classList.add("level-selected");
                level_3.classList.add("level-non-selected");
                break;
            case 2:
                sessionStorage.setItem("tic_tac_toe_access", "3");
                level_1.classList.add("level-non-selected");
                level_2.classList.add("level-non-selected");
                level_3.classList.add("level-selected");
                break;
            default:
                level_1.classList.add("level-selected");
                level_2.classList.add("level-non-selected");
                level_3.classList.add("level-non-selected");
                break;
        }
    } else {
            sessionStorage.setItem("tic_tac_toe_access", "1");
            level_2.classList.add("level-non-selected");
            level_3.classList.add("level-non-selected");
    }
    
}
function JudgLine(targetArray, idArray) {
    return targetArray.filter(function(e) {
        return(e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}

function cornerLine(targetArray, idArray) {
    return targetArray.filter(function(e) {
        return(e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2] || e.id === idArray[3]);
    });
}

/*a_1.addEventListener("click",
    function(){
        isSelect(a_1);
    },false
);

a_2.addEventListener("click", () => {
    isSelect(a_2);
});

a_3.addEventListener("click", () => {
    isSelect(a_3);
});

b_1.addEventListener("click", () => {
    isSelect(b_1);
});

b_2.addEventListener("click", () => {
    isSelect(b_2);
});

b_3.addEventListener("click", () => {
    isSelect(b_3);
});

c_1.addEventListener("click", () => {
    isSelect(c_1);
});

c_2.addEventListener("click", () => {
    isSelect(c_2);
});

c_3.addEventListener("click", () => {
    isSelect(c_3);
});*/

squaresArray.forEach(function(square) {
    square.addEventListener('click' , () => {
        if(counter === 9) {
            const levelBox = document.getElementById("levelBox");
            levelBox.classList.add("js-unclickable");
        }
        let gameOverFlg = isSelect(square);

        if(gameOverFlg === "0") {
            const squaresBox = document.getElementById("squaresBox");
            squaresBox.classList.add("js-unclickable");
            setTimeout(
                function() {
                    vegetaTurn();
                },
                "1000"
            );
        }
    });
});

function isSelect(selectSquare) {
    let gameOverFlg = "0";
    if(flag === "goku-flag") {
        let music = new Audio(gameSound[0]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-goku-checked");
        selectSquare.classList.add("js-unclickable");
        selectSquare.classList.remove("js-clickable");

        if(isWinner("goku")) {
            setMessage("goku-win");
            gameOver("goku");
            return gameOverFlg = "1";
        }
    
        setMessage("vegeta-turn");
        flag = "vegeta-flag";

    } else {
        let music = new Audio(gameSound[1]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-vegeta-checked");
        selectSquare.classList.add("js-unclickable");
        selectSquare.classList.remove("js-clickable");

        if(isWinner("vegeta")) {
            setMessage("vegeta-win");
            gameOver("vegeta");
            return gameOverFlg = "1";
        }

        setMessage("goku-turn");
        flag = "goku-flag";
    }

    counter--;

    if(counter === 0) {
        setMessage("draw");
        gameOver("draw");
        return gameOverFlg = "1";
    }
    return gameOverFlg = "0";

}

function isWinner(symbol) {
    const result = lineArray.some(function(line) {
        const subResult = line.every(function(square) {
            if(symbol === "goku" ) {
                return square.classList.contains("js-goku-checked");
            }
            if(symbol === "vegeta") {
                return square.classList.contains("js-vegeta-checked");
            }
        });
        if(subResult) { winningLine = line }

        return subResult;
    });
    return result;
}

function gameOver(status) {
    let w_sound
    switch (status) {
        case "goku":
            w_sound = gameSound[2];
            break;
        case "vegeta":
            w_sound = gameSound[3];
            break;
        case "draw":
            w_sound = gameSound[4];
            break;
    
        default:
            break;
    }
    let music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();

    /*squaresArray.forEach(function(square){
        square.classList.add("js-unclickable");
    });*/
    squaresBox.classList.add("js-unclickable");

    newgamebtn_display.classList.remove("js-hidden");

    if(status === "goku") {
        if(winningLine) {
            winningLine.forEach(function(square){
                square.classList.add("js-goku_highLight");
            });
        }
        $(document).snowfall({
            image : 'img/ball.png',
            maxSpeed : 10,
            minSpeed : 5,
            maxSize : 50,
            minSize : 20,
            round : true
        });
    } else if(status === "vegeta") {
        if (winningLine) {
            winningLine.forEach(function(square){
                square.classList.add("js-vegeta_highLight");
            });
        }
        $(document).snowfall({
            image : 'img/ball.png',
            maxSpeed : 10,
            minSpeed : 5,
            maxSize : 50,
            minSize : 20,
            round : true
        });
    }
}

function setMessage(id) {
    switch(id) {
        case "goku-turn":
            document.getElementById("msgtext").innerHTML=msgtxt1;
            break;
        case "vegeta-turn":
            document.getElementById("msgtext").innerHTML=msgtxt2;
            break;
        case "goku-win":
            document.getElementById("msgtext").innerHTML=msgtxt3;
            break;
        case "vegeta-win":
            document.getElementById("msgtext").innerHTML=msgtxt4;
            break;
        case "draw":
            document.getElementById("msgtext").innerHTML=msgtxt5;
            break;
        default:
            document.getElementById("msgtext").innerHTML=msgtxt1;
    }
}

newgamebtn.addEventListener("click" , function() {
    flag = "goku-flag";

    counter = 9;
    winningLine = null;
    squaresArray.forEach(function(square) {
        square.classList.remove("js-goku-checked");
        square.classList.remove("js-vegeta-checked");
        square.classList.remove("js-unclickable");
        square.classList.remove("js-goku_highLight");
        square.classList.remove("js-vegeta_highLight");
        square.classList.add("js-clickable");
    });

    squaresBox.classList.remove("js-unclickable");
    levelBox.classList.remove("js-unclickable");

    setMessage("goku-turn");
    newgamebtn_display.classList.add("js-hidden");

    $(document).snowfall("clear");
});

function vegetaTurn() {
    let level = sessionStorage.getItem("tic_tac_toe_access");

    let vegetaTurnEnd = "0";
    let gameOverFlg = "0";

    while (vegetaTurnEnd === "0") {
        if(level === "1" || level === "2" || level === "3"){
            vegetaTurnEnd = isReach("vegeta");
            if(vegetaTurnEnd === "1") {
                gameOverFlg = "1";
                break;
            }
        }
        if(level === "2" || level === "3"){
            vegetaTurnEnd = isReach("goku");
            if(vegetaTurnEnd === "1") {
                break;
            }
        }

        if(level === "2" || level === "3"){
            if(b_2.classList.contains("js-clickable")){
                gameOverFlg = isSelect(b_2);
                vegetaTurnEnd = "1";
                break;
            }
        }

        if(level === "3"){
            for (let square of lineRandom){
                if(square.classList.contains("js-clickable")){
                    gameOverFlg = isSelect(square);
                    vegetaTurnEnd = "1";
                    break;
                }
            }
            if(vegetaTurnEnd === "1") break;
        }
    
    const vegetaSquare = squaresArray.filter(function(square) {
        return square.classList.contains("js-clickable");
    });

    let n = Math.floor(Math.random()*vegetaSquare.length);
    gameOverFlg = isSelect(vegetaSquare[n]);
    break;
}
    if(gameOverFlg === "0") {
        squaresBox.classList.remove("js-unclickable");
    }
}

function isReach(status) {
    let vegetaTurnEnd = "0";

    lineArray.some(function(line) {
        let gokuCheckCnt = 0;
        let vegetaCheckCnt = 0;

        line.forEach(function(square) {
            if(square.classList.contains("js-vegeta-checked")) {
                vegetaCheckCnt++;
            }
            if(square.classList.contains("js-goku-checked")) {
                gokuCheckCnt++;
            }
        });

        if(status === "vegeta" && vegetaCheckCnt === 2 && gokuCheckCnt === 0){
            vegetaTurnEnd = "1";
        }
        if(status === "goku" && vegetaCheckCnt === 0 && gokuCheckCnt === 2){
            vegetaTurnEnd = "1";
        }

        if(vegetaTurnEnd === "1"){
            line.some(function (square) {
                if(square.classList.contains("js-clickable")) {
                    isSelect(square);
                    return true;
                }
            })
            return true;
        }

    });
    return vegetaTurnEnd;
}