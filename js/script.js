"use strict";

// make sure board is clear at start of each game
// check if pVp or pVc
// make p -> X when pVc
// use Math.Random() to choose who goes first

var hrs = 0, mins = 0, secs = 0;
var count = 0;

var pvpTurn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
var pvcTurn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
var whoPlaying = "", temp2 ="";
var isGameOver = false;

var $ = function(id){
    return document.getElementById(id);
}

function checkGameMode(){
    if($("pVc").checked){
        playerVcomp();
    }else if($("pVp").checked){
        playerVplayer();
    }
}

//toggle between X or O for each player's turn
function toggleXorO(){
    var letter = 'A';
    if(pvpTurn == 1){
        $("playerTurn").innerHTML = "Player 0's Turn";
        pvpTurn = 0;
        letter = 'X';
        return letter;
    } else if(pvpTurn == 0){
        $("playerTurn").innerHTML = "Player X's Turn";
        pvpTurn = 1;
        letter = 'O';
        return letter;
    }
}

function playerVplayer(){
    whoPlaying = toggleXorO();

    $("square1").addEventListener("click", function(){$("square1").innerHTML = whoPlaying; $("square1").style.pointerEvents = 'none';});
    $("square2").addEventListener("click", function(){$("square2").innerHTML = whoPlaying; $("square2").style.pointerEvents = 'none';});
    $("square3").addEventListener("click", function(){$("square3").innerHTML = whoPlaying; $("square3").style.pointerEvents = 'none';});
    $("square4").addEventListener("click", function(){$("square4").innerHTML = whoPlaying; $("square4").style.pointerEvents = 'none';});
    $("square5").addEventListener("click", function(){$("square5").innerHTML = whoPlaying; $("square5").style.pointerEvents = 'none';});
    $("square6").addEventListener("click", function(){$("square6").innerHTML = whoPlaying; $("square6").style.pointerEvents = 'none';});
    $("square7").addEventListener("click", function(){$("square7").innerHTML = whoPlaying; $("square7").style.pointerEvents = 'none';});
    $("square8").addEventListener("click", function(){$("square8").innerHTML = whoPlaying; $("square8").style.pointerEvents = 'none';});
    $("square9").addEventListener("click", function(){$("square9").innerHTML = whoPlaying; $("square9").style.pointerEvents = 'none';});
}

function playerVcomp(){

}

var startGame = function(){ 
    checkGameMode();  
    $('hours', 'mins').innerHTML = '00:';
    $('secs').innerHTML = "00";
    startTimer();
}

function startTimer(){
    setTimeout(function(){
        secs++;
        if(secs > 59){
            secs = 0;
            mins++;
            if(mins > 59){
                mins = 0;
                hrs++;
                if(hrs < 10){
                    $('hours').innerHTML = "0"+ hrs + ":";
                }else{
                    $('hours').innerHTML = hrs + ":";
                }
            }
            if(mins < 10){
                $('mins').innerHTML = "0"+ mins + ":";
            }else{
                $('mins').innerHTML = mins + ":";
            }
        }
        if(secs < 10){
            $('secs').innerHTML = "0"+ secs;
        }else{
            $('secs').innerHTML = secs;
        }
        startTimer();
    }, 1000);
}

window.onload = function(){
    $("startBtn").onclick = startGame;
}