
let container = document.querySelector(".container");
let header= document.querySelector(".header");
let darkbutton= document.querySelector(".dark");
let title= document.querySelector(".title");

let whiteColor=true;


function darkColor(){
    container.style.background="rgba(17, 17, 17, 0.932)"
    header.style.background="rgba(53, 53, 53, 0.932)"
    mute.style.background="rgba(0, 0, 0, 0)"
    dark.style.background="rgba(0, 0, 0, 0)"
    title.style.color="#F0F6F6"
    playerWin.style.color="#F0F6F6"
}

function lightColor(){
    container.style.background="#F0F6F6"
    header.style.background="#dce0e0"
    mute.style.background="rgba(0, 0, 0, 0)"
    dark.style.background="rgba(0, 0, 0, 0)"
    title.style.color=" #084B83"
    playerWin.style.color=" #084B83"
}


darkbutton.addEventListener("click",()=>{
    if(whiteColor){
        darkColor();
        whiteColor=false;
    }else{
        lightColor();
        whiteColor=true;
    }
});

