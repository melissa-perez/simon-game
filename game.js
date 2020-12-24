const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []

let randomNumber = nextSequence(); 
let randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

console.log(gamePattern);


//Game functions

function nextSequence() {
    return Math.floor((Math.random() * 4));;
}
