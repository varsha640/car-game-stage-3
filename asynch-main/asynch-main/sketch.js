var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;

var database;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

     database = firebase.database();

   game=new Game();
   game.getState();
   game.start();
   

}

function draw(){
 if(playerCount===4)  {
   game.update(1)
 } 
 if(gameState===1){
   clear()
   game.play()
 }
}