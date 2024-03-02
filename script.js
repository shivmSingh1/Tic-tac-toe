let boxes= document.querySelectorAll(".box");
let btn= document.querySelector(".btn");
let playerWin=document.querySelector(".playerWin");

let playerO= true;

//for click audio

let Clickaudio= new Audio()
Clickaudio.src="click-button-140881.mp3"

//for reset audio

let resetAudio = new Audio()
resetAudio.src="game-start-6104.mp3"

//win audio

let winAudio= new Audio()
winAudio.src="goodresult-82807.mp3"

// matchTied audio

let tieAudio= new Audio()
tieAudio.src="game-over-arcade-6435.mp3"





//boxes 

let clickHandler = function (){
    if(playerO){
        Clickaudio.play();
        setTimeout(() => {
            Clickaudio.pause();
            Clickaudio.currentTime = 0; // Reset the audio to the beginning
        }, 500);
        this.innerHTML=`O`;
            playerO=false;
        }else{
            Clickaudio.play();
            setTimeout(() => {
                Clickaudio.pause();
                Clickaudio.currentTime = 0; // Reset the audio to the beginning
            }, 500);
            this.innerHTML=`X`;
            playerO=true;
        }
        this.removeEventListener("click" , clickHandler)
        win();
    }

    boxes.forEach(box => {
        box.addEventListener("click" , clickHandler)
    });
    
    // reset button 
    
btn.addEventListener("click", () => {
    boxes.forEach(box => {
        resetAudio.play();
        box.innerHTML = "";
        playerWin.innerHTML="";
        box.addEventListener("click" , clickHandler)
    });
    
});

// logic for match tie

function isMatchTied() {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; // If any box is still empty, it's not a tie
        }
    }
    return true; // All boxes are filled, it's a tie
}


// logic for winning the game

let gameContainer=document.querySelector(".gameContainer");


let winPattern= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function win(){ 
    let tie=true;
    
    for(let pattern of winPattern){
        if(boxes[pattern[0]].innerText !=="" && boxes[pattern[1]].innerText !=="" && boxes[pattern[2]].innerText !==""){
            if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                playerWin.innerHTML= "Winner "+boxes[pattern[0]].innerText
                winAudio.play();
                boxes.forEach(box => {
                    box.removeEventListener("click" , clickHandler);
                });
                tie=false;
                break;
        }
    }
}
//result for match tie
if(tie){
    if (isMatchTied()) {
        tieAudio.play();
        playerWin.innerHTML = "XO Match Tied";
    }
}
}




// mute button

let mute=document.querySelector(".mute")
let dark=document.querySelector(".dark")

function volumeMute(){
    mute.innerHTML=`<i class="fa-solid fa-2x fa-volume-xmark"></i>`
    Clickaudio.volume=0;
    resetAudio.volume=0;
    winAudio.volume=0;
    tieAudio.volume=0;
}

function volumeUnMute(){
    mute.innerHTML=`<i class="fa-solid fa-2x fa-volume-high"></i>`
    Clickaudio.volume=1;
    resetAudio.volume=1;
    winAudio.volume=1;
    tieAudio.volume=1;
}

function toggleVolume() {
    if (mute.querySelector('i').classList.contains('fa-volume-high')) {
        volumeMute();
    } else {
        volumeUnMute();
    }
}

mute.addEventListener("click", toggleVolume);
