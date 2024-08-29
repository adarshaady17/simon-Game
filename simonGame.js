let gameSeq=[];
let userSeq=[];
let btns=["yellow","Green","Red","Blue"];
let started=false;
let level=0;
let h2=document.querySelector("h3");
//let btn=document.querySelector("btn");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() *3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randbtn);
};
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
       h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="red";
       },150);
       reset();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}