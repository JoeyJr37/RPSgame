/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
/* eslint-disable no-alert */
/* eslint-disable quotes */
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

/* this is the main function that completes a 5 round game of Rock, Paper 

Scissors, keeps the scores of each player, validates the user input and declares 

a winner */

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

/*this function adds a point to the player score after a victory */
  const win = () => {
    playerScore++;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  };

/*this function adds a point to the computer score after a player loss */
  const lose = () => {
    computerScore++;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  };

/* this function validates the user Input */
const validate = (userInput) => {
userInput = prompt("Rock, Paper or Scissors?");
let lowerCaseUserInput = userInput.toLowerCase();
let firstLetterCapitalized = lowerCaseUserInput.charAt(0).toUpperCase();
let restOfWord = lowerCaseUserInput.slice(1);
let validatedInput = firstLetterCapitalized + restOfWord;
return validatedInput;
};

/*this for loop determines the rounds played and declares the outcome of each 

round by comparing the randomized computer value with the user input */

  for (let i = 1; i < 6; i++) {
    console.log(`Round: ${i}`);
    const oneRound = (computerSelection, validatedPlayerSelection) => {
      computerSelection = computerPlay();
      console.log('Computer choice complete!');
      validatedPlayerSelection = validate();
      if ((computerSelection === 'Paper') && (validatedPlayerSelection === 

'Rock')) {
        alert('Paper covers Rock! Computer wins 1 point!');
        lose();
      } else if ((computerSelection === 'Rock') && (validatedPlayerSelection === 

'Scissors')) {
        alert('Rock breaks Scissors! Computer wins 1 point!');
        lose();
      } else if ((computerSelection === 'Scissors') && (validatedPlayerSelection 

=== 'Paper')) {
        alert('Scissors cuts Paper! Computer wins 1 point!');
        lose();
      } else if ((computerSelection === 'Paper') && (validatedPlayerSelection 

=== 'Scissors')) {
        alert('Scissors cuts Paper! You win 1 point!');
        win();
      } else if ((computerSelection === 'Rock') && (validatedPlayerSelection === 

'Paper')) {
        alert('Paper covers Rock! You win 1 point!');
        win();
      } else if ((computerSelection === 'Scissors') && (validatedPlayerSelection 

=== 'Rock')) {
        alert('Rock breaks Scissors! You win 1 point!');
        win();
      } else if (computerSelection === validatedPlayerSelection) {
        alert(`${computerSelection} is the same as ${validatedPlayerSelection}.  
        It's a tie!`);
      } else { alert('Error! Please try again!'); }
    };
    oneRound();
  }
  console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`);
  if (playerScore > computerScore) { console.log("You win the game!"); } else { 

console.log("Computer wins the game!"); }
};

game();
