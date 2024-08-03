//Player 1 Dice Roll

var randomNumber1= (Math.floor(Math.random()*6))+1;
var randomDiceImage = "dice"+ randomNumber1 +".png"; //Random diceimage name selector between Dice1 -Dice6.png
var randomImageSource = "images/"+ randomDiceImage; //Selects soruce of images as images/Dice1.png-Dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//Player 2 Dice Roll

var randomNumber2 = (Math.floor(Math.random()*6))+1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Change h1 tag based on dice roll
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} 
else{
    document.querySelector("h1").innerHTML = "It is a draw!"
}
