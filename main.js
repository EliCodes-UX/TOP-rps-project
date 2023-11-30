const computerChoice = document.querySelector('.computer-choice-display');
const playerSelection = document.querySelectorAll('.user-choice');
const userDisplay = document.querySelector('.user-choice-display');
const userScoreDisplay = document.querySelector('.user-score');
const computerScoreDisplay = document.querySelector('.computer-score');
let gamePlay = document.querySelector('.winner');

let userScore = 0;
let computerScore = 0;
let maxScore = 5;

function getComputerSelection() {
  let pick = ['rock', 'paper', 'scissors'];
  let random = pick[Math.floor(Math.random() * pick.length)];
  console.log(random);
  computerChoice.innerHTML = random;
  return random;
}

playerSelection.forEach(userChoice => {
  userChoice.addEventListener('click', function (e) {
    choice = e.target.id;
    userDisplay.innerHTML = choice;
    console.log(choice);
    let computerSelection = getComputerSelection();
    playRound(choice, computerSelection);
    isGameOver();
  });
});

function playRound(playerSelection, computerSelection) {
  let roundWinner;

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
    gamePlay.innerHTML = 'choose again';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    roundWinner = 'player';
    gamePlay.innerHTML = 'you win';
  } else {
    roundWinner = 'computer';
    gamePlay.innerHTML = 'you lost';
  }

  // Update scores based on the round winner
  if (roundWinner === 'player') {
    userScore++;
  } else if (roundWinner === 'computer') {
    computerScore++;
  }

  // Update score display
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;

  console.log(roundWinner);

  if (
    parseInt(userScore.innerHTML) === maxScore ||
    parseInt(computerScore.innerHTML) === maxScore
  ) {
    isGameOver();
  }
}

console.log(playerSelection.id);

// end game after the 5th point gets added to winner

const isGameOver = () => {
  alert('game over');
};
