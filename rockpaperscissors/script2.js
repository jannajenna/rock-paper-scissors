window.addEventListener("load", start);

let player = document.querySelector("#player1");
let computer = document.querySelector("#player2");

function start() {
  console.log("Welcome to rock, paper, scissors!");
  document.querySelector(".rock").addEventListener("click", rockSelected);
  document.querySelector(".paper").addEventListener("click", paperSelected);
  document.querySelector(".scissors").addEventListener("click", scissorsSelected);
}

//Get player selection

function rockSelected() {
  console.log("player  rock");
  player = "rock";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("rock");
  computerChoice();
}

function paperSelected() {
  console.log("player  paper");
  player = "paper";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("paper");
  computerChoice();
}

function scissorsSelected() {
  console.log("player scissors");
  player = "scissors";
  player1.classList.value = "";
  player1.classList.add("player");
  player1.classList.add("scissors");
  computerChoice();
}

function computerChoice() {
  /*  console.log("computer choice"); */

  //random number
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  console.log(randomChoice);

  if (randomChoice === 1) {
    computer == "rock";
    console.log("computer rock");
    computer.classList.value = "";
    computer.classList.add("player");
    computer.classList.add("rock");
  } else if (randomChoice === 2) {
    computer == "paper";
    console.log("computer paper");
    computer.classList.value = "";
    computer.classList.add("player");
    computer.classList.add("paper");
  } else {
    computer == "scissors";
    console.log("computer scissors");
    computer.classList.value = "";
    computer.classList.add("player");
    computer.classList.add("scissors");
  }

  shakeHands();
  //random number
  //animation
  //gameResult -->showResult (hands changin)  that includes restartfunction at the end
}

function shakeHands() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector(".player").addEventListener("animationend", gameResult);
}

function gameResult() {
  console.log("game ends");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (player == computer) {
    tier();
  } else if ((player == "rock") & (computer == "scissors") || (player == "paper") & (computer == "rock") || (player == "scissors") & (computer == "paper")) winner();
  else looser();
}

function tier() {
  console.log("tier");
  ocument.querySelector("#draw").classList.remove("hidden");
  start();
}

function winner() {
  console.log("you win");
  document.querySelector("#win").classList.remove("hidden");
  start();
}
function looser() {
  console.log("you loose");
  document.querySelector("#lose").classList.remove("hidden");
  start();
}
