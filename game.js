const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let userChosenColor = null;
let started = false;
let level = 0;

$(document).on("keydown", function () {
  if (!started) {
    started = true;
    nextSequence();
    $(".gameDirections").text("Level " + level);
  }
});

$("#red").on("click", function () {
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$("#yellow").on("click", function () {
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$("#green").on("click", function () {
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$("#blue").on("click", function () {
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

//Game functions
/**
 * Generates a random number to choose the next color in sequence.
 * Stores the result in gamePattern.
 * @param {none} No params.
 * @return {none} No return value.
 */
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  ++level;
  $(".gameDirections").text("Level " + level);
  playSound(randomChosenColor);
  animatePress(randomChosenColor);
  gamePattern.push(randomChosenColor);
}

/**
 * Resets the game variables to default values.
 * @param {none} No params.
 * @return {none} No return value.
 */
function startOver() {
  gamePattern = [];
  started = false;
  level = 0;
  userClickedPattern = [];
}

/**
 * Plays the associated sound related to the button color.
 *
 * @param {string} The color of the button clicked.
 * @return {none} No return value.
 */
function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

/**
 * Animates the current button by applying/removing a class.
 *
 * @param {string} The color of the button clicked.
 * @return {none} No return value.
 */
function animatePress(currentColor) {
  $("#" + currentColor).addClass(currentColor + "-" + "pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass(currentColor + "-" + "pressed");
  }, 500);
}

/**
 * Checks the user's last input against the pattern at tje same level.
 *
 * @param {int} The last guess index of the user.
 * @return {none} No return value.
 */
function checkAnswer(currentLevel) {
  if (!started) {
    return;
  }
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $(".gameDirections").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
