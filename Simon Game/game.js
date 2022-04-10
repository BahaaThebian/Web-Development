var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var gameStarted= false;
var level=0;
function nextSequence(){
  userClickedPattern=[];
  gameStarted=true;
  $("#level-title").html("Level "+level);
  level++;
  var randomNumber=Math.floor(4*Math.random());
  var randomChosenColour=buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}



$(".btn").click(function(){
  var userChosenColour=this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}

$(document).keydown(function(){
  if(!gameStarted){
    nextSequence();
  }
});

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("success");
    if(currentLevel==level-1){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();
  }
}
function startOver(){
  level=0;
  gamePattern=[];
  gameStarted=false;
}
