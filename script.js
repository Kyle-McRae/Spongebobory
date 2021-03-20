// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const numButtons = 6;
const spongebobSound = new Audio();

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;
var interval;
var timeLeft = 10;

function startGame(patternLen) {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  clueHoldTime = 1000;

  // swap the Start and Stop buttons
  document.getElementById("easyBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  createRandomPattern(patternLen);
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("easyBtn").classList.remove("hidden");
  document.getElementById("medBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  stopInterval();
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function createRandomPattern(patternLen) {
  pattern = new Array(patternLen);
  for (let i = 0; i <= pattern.length - 1; i++) {
    pattern[i] = Math.ceil(Math.random() * numButtons);
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime *= 0.9;
  let delay = nextClueWaitTime; //set delay to initial wait time
  console.log(progress);
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
    setTimeout(startInterval, delay);
}

function startInterval(){
  if(interval != null){
    return;
  }
  timeLeft = pattern.length + 4;
  document.getElementById('timer').innerHTML = timeLeft.toFixed(1);
  interval = setInterval(updateTimer, 100);
}

function stopInterval(){
  clearInterval(interval);
  interval = null;
  document.getElementById('timer').innerHTML = null;
}

function updateTimer(){
  timeLeft -= 0.1;
  document.getElementById('timer').innerHTML = timeLeft.toFixed(1);
  if(timeLeft <= 0){
    strike('timeout');
  }
}

function guess(btn) {
  console.log("User guessed: " + btn);
  if (!gamePlaying || interval == null) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      stopInterval();
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  } else {
    strike('badguess');
  }
}

function strike(reason) {
  stopInterval();
  if (strikes == 2) {
    loseGame();
  } else {
    strikes += 1;
    alert(
      strikeMessage[reason] + " You're on strike " +
        strikes + 
        ".\nThe pattern will play again, listen closely."
    );
    playClueSequence();
  }
}

const strikeMessage = {
'timeout': "you ran out of time!",
'badguess': "Wrong answer!"
}

function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}
function winGame() {
  stopGame();
  alert("Congratulations! You Won!");
}

const audioMap = {
  1: "spongebob",
  2: "squidward",
  3: "patrick",
  4: "plankton",
  5: "gary",
  6: "krabs"
};
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 534.4,
  6: 602.6
};
function playSound(btn, len) {
  document.getElementById(audioMap[btn] + "Audio").play();
  tonePlaying = true;
  setTimeout(function() {
    stopSound(btn);
  }, len);
}
function startSound(btn) {
  if (!tonePlaying) {
    document.getElementById(audioMap[btn] + "Audio").play();
    tonePlaying = true;
  }
}
function stopSound(btn) {
  document.getElementById(audioMap[btn] + "Audio").pause();
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
