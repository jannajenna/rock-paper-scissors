window.onload = function () {
  console.log("Welcome to rock, paper, scissors!");
  startGame();
};

function startGame() {
  console.log("Game starts");

  document.querySelector(".rock").addEventListener("click", rockSelected);
  document.querySelector(".paper").addEventListener("click", paperSelected);
  document.querySelector(".scissors").addEventListener("click", scissorsSelected);
  /* const clickBtn = document.querySelector("button");
  clickBtn.addEventListener("click", scissorsSelected); */
}

function rockSelected() {
  console.log("rock selected");

  /* const handRock = document.getElementById("player1");
  handRock.classList.add("paper"); */
  document.getElementById("player1").classList.add("rock");
}

function paperSelected() {
  console.log("paper selected");

  /*  const handPaper = document.getElementById("player1");
  handPaper.classList.add("paper"); */
  document.getElementById("player1").classList.add("paper");
}

function scissorsSelected() {
  console.log("scissors selected");

  /*  const handScissors = document.getElementById("player1");
  handScissors.classList.add("scissors"); */
  document.getElementById("player1").classList.add("scissors");
}

/* function getPlayerChoice() {
  getComputerChoice();
}

function getComputerChoice() {
  getResults();
}

function getReseults() {
  --reloadgame--
} */
