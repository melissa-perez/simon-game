const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = []

let randomNumber = nextSequence(); 
let randomChosenColor = buttonColors[randomNumber];
console.log(randomChosenColor)
gamePattern.push(randomChosenColor);
console.log(("hello"));

$(document).click(function(event) {
    $(".red").css("background-color", "yellow");
});





//Game functions

function nextSequence() {
    return Math.floor((Math.random() * 4));;
}
