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



const revealGame = () => {
  gameButton.style.visibility = "visible";
};
gamePlayButton.addEventListener("click", revealGame);

/* set playerScore and computerScore to 0 */
playerDisplayScore.value = 1;
computerDisplayScore.value = 1;

/* function to determine winner (first to 5 points) */
const determineWinner = () => {
  if (playerDisplayScore.textContent === "5") {alert("Player 1 wins!");}
  else if (computerDisplayScore.textContent === "5") {alert ("Computer wins!");}
  else {alert(`Player has ${playerDisplayScore.value - 1} and Computer has ${computerDisplayScore.value - 1}`);};
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

/* These are buttons for RPS game v2 */
rockButton.addEventListener("click", rockChoice);

paperButton.addEventListener("click", paperChoice);

scissorButton.addEventListener("click", scissorChoice);

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
  /* playerScore++;
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`); */
  playerDisplayScore.textContent = playerDisplayScore.value++;
};

/*this function adds a point to the computer score after a player loss */
const lose = () => {
  /* computerScore++;
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`); */
  computerDisplayScore.textContent = computerDisplayScore.value++;
};

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

