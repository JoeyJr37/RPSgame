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
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const win = () => {
    playerScore++;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  };
  const lose = () => {
    computerScore++;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  };

  for (let i = 1; i < 6; i++) {
    console.log(`Round: ${i}`);
    const oneRound = (computerSelection, playerSelection) => {
      computerSelection = computerPlay();
      console.log('Computer choice complete!');
      playerSelection = prompt('Rock, Paper or Scissors?');
      let lowerCasePlayerSelection = playerSelection.toLowerCase();
      const validatedPlayerSelection = lowerCasePlayerSelection + playerSelection.slice(1);
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
        alert(`${computerSelection} is the same as ${validatedPlayerSelection}.  
        It's a tie!`);
      } else { alert('Error! Please try again!'); }
    };
    oneRound();
  }
  console.log(`Final Score: Player: ${playerScore} Computer: ${computerScore}`);
  if (playerScore > computerScore) { console.log("You win the game!"); } else { console.log("Computer wins the game!"); }
};

game();
