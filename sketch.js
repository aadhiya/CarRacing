var canvas, backgroundimage;
var database, gameState = 0, playerCount = 0, form, player, game;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img, groundimg, trackimg;

function preload(){
    car1img = loadImage("../car1.png");
    car2img = loadImage("../car2.png");
    car3img = loadImage("../car3.png");
    car4img = loadImage("../car4.png");
    groundimg = loadImage("../ground.png");
    trackimg = loadImage("../track.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start()
}

function draw()
{
    if(playerCount == 4)
    {
        game.update(1);
    }
    if(gameState ==1)
    {
        clear();
        game.play();
    }
    if(gameState == 2)
    {
        game.end();
    }
}