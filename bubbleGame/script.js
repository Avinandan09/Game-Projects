function makeBubble(){
    let bubbleCounter="";
for (let i=1;i<=152;i++){
    let val=Math.floor(Math.random()*10)
    bubbleCounter +=`<div class=bubble>${val}</div>`;
}
document.querySelector('#downArea').innerHTML=bubbleCounter
}

makeBubble();

let timer=15;
function runTimer(){
    let timerCounter=setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector('#timer').textContent=timer
        }
        else{
            clearInterval(timerCounter)
            document.querySelector("#downArea").textContent="GAME  OVER!!!!!"
        }
    },1000)
}

runTimer();

let hitrn=0;
function randomHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=hitrn
}

randomHit();

let score=0;
function increaseScore(){
    score+=1;
    document.querySelector('#score').textContent=score;
}
 function changeBubble(event){
    event.target.textContent="X"
 }
document.querySelector("#downArea").addEventListener("click",function(event){
    var clickedNum=Number(event.target.textContent);
    if(clickedNum===hitrn){
        increaseScore()
        changeBubble(event)
    }
})
