"use strict";

// make sure board is clear at start of each game
// check if pVp or pVc
// make p -> X when pVc
// use Math.Random() to choose who goes first

var $ = function(id){
    return document.getElementById(id);
}

var startGame = function(){   
    $('hours', 'mins').innerHTML = '00:';
    $('secs').innerHTML = "00";
    startTimer();
}

var hrs = 0, mins = 0, secs = 0;
var count = 0; 

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