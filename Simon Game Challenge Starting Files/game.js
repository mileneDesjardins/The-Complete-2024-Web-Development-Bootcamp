var gamePattern = [];

var userClickedPattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeTo(100, 0.3, function () {
    $(this).fadeTo(500, 1.0);
  });

  playSound(randomChosenColour);
}

$(".btn").click(function (event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  var colorAudio = new Audio("sounds/" + name + ".mp3");
  colorAudio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour)
    .addClass("pressed")
    .dequeue()
    .delay(100)
    .queue(function () {
      $(this).removeClass("pressed");
    });
}
