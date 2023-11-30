const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.choices');
console.log(userChoice);

// create computer input with math random
function getComputerSelection() {
  let pick = ['rock', 'paper', 'scissors'];
  let random = pick[Math.floor(Math.random() * pick.length)];
  console.log(random);
  computerChoice.innerHTML = random;
  return random;
}
getComputerSelection();

// create player input with using the buttons
// create function to play a round using buttons reaction
// use round result to decide where the next letter goes
// end game after the 5th letter gets added to loser
