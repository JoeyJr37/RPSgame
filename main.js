/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-alert */
/* eslint-disable quotes */

/**
 * Document Query Selectors
 */
const gamePlayButton = document.querySelector("#gamePlayButton");
const gameButton = document.querySelector("#game");
const playerDisplayScore = document.querySelector("#playerScore");
const computerDisplayScore = document.querySelector("#computerScore");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");

let computer_score = 0;
let player_score = 0;

/**
 * Reveals Game Board
 */
const revealGame = () => {
  gameButton.style.visibility = "visible";
  computerDisplayScore.innerHTML = computer_score;
  playerDisplayScore.innerHTML = player_score;
};

/**
 * Determine Winner of Game
 */
const determineWinner = () => {
  if (player_score === 5) {alert("Player 1 wins!");}
  else if (computer_score === 5) {alert ("Computer wins!");}
  else {alert(`Player has ${player_score} and Computer has ${computer_score}`);};
};

/* function that sets validatedPlayerSelection to rock */
const rockChoice = () => {
  const validatedPlayerSelection = "Rock";
  oneRound(computerPlay(), validatedPlayerSelection);
  determineWinner();
};

/* function that sets validatedPlayerSelection to paper */
const paperChoice = () => {
  const validatedPlayerSelection = "Paper";
  oneRound(computerPlay(), validatedPlayerSelection);
  determineWinner();
};

/* function that sets validatedPlayerSelection to scissors */
const scissorChoice = () => {
  const validatedPlayerSelection = "Scissors";
  oneRound(computerPlay(), validatedPlayerSelection);
  determineWinner();
};

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
};

/*this function adds a point to the computer score after a player loss */
const lose = () => {
  computer_score+= 1;
  computerDisplayScore.textContent = computer_score;
};

/**
 * Play One Round
 * @param {String} computerSelection 
 * @param {String} validatedPlayerSelection 
 */
const oneRound = (computerSelection, validatedPlayerSelection) => {
  computerSelection = computerPlay();
  if ((computerSelection === 'Paper') && (validatedPlayerSelection === 'Rock')) {
    alert('Paper covers Rock! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Rock') && (validatedPlayerSelection === 'Scissors')) {
    alert('Rock breaks Scissors! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Scissors') && (validatedPlayerSelection === 'Paper')) {
    alert('Scissors cuts Paper! Computer wins 1 point!');
    lose();
  } else if ((computerSelection === 'Paper') && (validatedPlayerSelection === 'Scissors')) {
    alert('Scissors cuts Paper! You win 1 point!');
    win();
  } else if ((computerSelection === 'Rock') && (validatedPlayerSelection === 'Paper')) {
    alert('Paper covers Rock! You win 1 point!');
    win();
  } else if ((computerSelection === 'Scissors') && (validatedPlayerSelection === 'Rock')) {
    alert('Rock breaks Scissors! You win 1 point!');
    win();
  } else if (computerSelection === validatedPlayerSelection) {
    alert(`${computerSelection} is the same as ${validatedPlayerSelection}. It's a tie!`);
  } else { alert('Error! Please try again!'); }
};

/**
 * Event Listeners
 */
gamePlayButton.addEventListener("click", revealGame);
rockButton.addEventListener("click", rockChoice);
paperButton.addEventListener("click", paperChoice);
scissorButton.addEventListener("click", scissorChoice);
