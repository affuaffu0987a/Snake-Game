let direction = {x:0,y:0}
const foodSound=new Audio("music/food.mp3");
const gameOverSound=new Audio("music/gameover.mp3");
const moveSound=new Audio("music/move.mp3");
const musicSound=new Audio("music/music.mp3")
let speed=2;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]
let food={
    x:10,
    y:3
}

// game  functions
function main(timestamp) {
    window.requestAnimationFrame(main)
    // console.log(timestamp);
    if((timestamp-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=timestamp;
    gameEngine()
    // console.log(lastPaintTime);
}

function gameEngine(e) {
    //Updating the snake array & food
    if(isCollied(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        direction={x:0,y:0};
        alert("GameOver, Press any key to play agian!")
        snakeArr=[{x:13,y:15}];
        musicSound.play();
        score=0;
    }
    //display the snake and food
    //display the snake
    let bord=document.querySelector(".bord")
    bord.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement("div");
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index===0){
            snakeElement.classList.add("head");
        }
        else{
            snakeElement.classList.add("snakebody")
        }
        bord.appendChild(snakeElement);
    });
    // display the food
    snakeFood=document.createElement("div");
    snakeFood.style.gridRowStart=food.y;
    snakeFood.style.gridColumnStart=food.x;
    snakeFood.classList.add("food")
    bord.appendChild(snakeFood);
}

window.requestAnimationFrame(main);
window.addEventListener("keydown",(e)=>{
    // console.log(e);
    direction={x:0,y:1}
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("arrowup");
            direction.x=1;
            direction.y=-1
            break;
        case "ArrowDown":    
            console.log("ArrowDown");
            direction.x=-1;
            direction.y=1;
            break;
        case "ArrowLeft":    
            console.log("Arrowleft");
            direction.x=-1;
            direction.y=0;
            break;
        case "ArrowRight":    
            console.log("Arrowright");
            direction.x=1;
            direction.y=0;
            break;    
        default:
            break;
    }
})




