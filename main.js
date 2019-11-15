/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-alert */
/* eslint-disable quotes */

/**
 * Document Query Selectors
 */
const gamePlayButton = document.querySelector("#gamePlayButton");
const game = document.querySelector("#game");
const gameButtons = document.querySelector("#gameButtons");
const newGameButton = document.querySelector("#newGameButton");
const playerDisplayScore = document.querySelector("#playerScore");
const computerDisplayScore = document.querySelector("#computerScore");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");

let computer_score = 0;
let player_score = 0;
let winner;

/**
 * Reveals Game Board
 */
const revealGame = () => {
  game.style.visibility = "visible";
  computerDisplayScore.innerHTML = computer_score;
  playerDisplayScore.innerHTML = player_score;
};

/**
 * Reset Game
 */
const resetGame = () => {
	computer_score = 0;
	player_score = 0;
	computerDisplayScore.innerHTML = computer_score;
	playerDisplayScore.innerHTML = player_score;
	newGameButton.style.visibility = "hidden";
	let winnerText = document.querySelector("h2");
	game.removeChild(winnerText);
	gameButtons.style.visibility = "visible";
}

/**
 * Determine Winner of Game
 */
const determineWinner = () => {
  if (player_score === 5) {
	let winner = "Player 1";
	return winner;
  }
  else if (computer_score === 5) {
	let winner = "Computer";
	return winner;
  }
  else {
    return false;
  };
};

/**
 * Announce Winner of Game
 */
const announceWinner = () => {
if (!determineWinner()) {
	alert (`Player has ${player_score} and Computer has ${computer_score}`);}
else {
	let winner = determineWinner();
	let winnerText = document.createElement("h2");
	winnerText.innerHTML = `${winner} is the winner!`;
	winnerText.style.color = "red";
	winnerText.style.fontSize = "32px";
	game.appendChild(winnerText);
	gameButtons.style.visibility = "hidden";
	newGameButton.style.visibility = "visible";};
};

/*
 * Determine computer selection
 */
const computerPlay = () => {
  const computerValue = Math.floor((Math.random()) * 3);
  let computerChoice;
  switch (computerValue) {
    default: computerChoice = 'Error! Something went wrong!';
      break;
    case 0: computerChoice = 'Rock';
      break;
    case 1: computerChoice = 'Scissors';
      break;
    case 2: computerChoice = 'Paper';
      break;
  }
  return computerChoice;
};

/*this function adds a point to the player score after a victory */
const win = () => {
  player_score += 1;
  playerDisplayScore.textContent = player_score;
  announceWinner();
};

/*this function adds a point to the computer score after a player loss */
const lose = () => {
  computer_score+= 1;
  computerDisplayScore.textContent = computer_score;
  announceWinner();
};

/**
 * Play One Round
 * @param {String} computerSelection 
 * @param {String} playerSelection 
 */
const oneRound = (computerSelection, playerSelection) => {
  if ((computerSelection === 'Paper') && (playerSelection === 'Rock')) {
    alert('Paper covers Rock! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Rock') && (playerSelection === 'Scissors')) {
    alert('Rock breaks Scissors! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Scissors') && (playerSelection === 'Paper')) {
    alert('Scissors cuts Paper! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Paper') && (playerSelection === 'Scissors')) {
    alert('Scissors cuts Paper! You win 1 point!');
    win();
  } else if ((computerSelection === 'Rock') && (playerSelection === 'Paper')) {
    alert('Paper covers Rock! You win 1 point!');
    win();
  } else if ((computerSelection === 'Scissors') && (playerSelection === 'Rock')) {
    alert('Rock breaks Scissors! You win 1 point!');
    win();
  } else if (computerSelection === playerSelection) {
    alert(`${computerSelection} is the same as ${playerSelection}. It's a tie!`);
  } else { alert('Error! Please try again!'); }
};

/**
 * Event Listeners
 */
gamePlayButton.addEventListener("click", revealGame);
rockButton.addEventListener("click", () => {oneRound(computerPlay(), "Rock")});
paperButton.addEventListener("click", () => {oneRound(computerPlay(), "Paper")});
scissorButton.addEventListener("click", () => {oneRound(computerPlay(), "Scissors")});
newGameButton.addEventListener("click", resetGame);