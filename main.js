const computerChoice = document.querySelector('.computer-choice-display');
const userChoices = document.querySelectorAll('.user-choice');
const userDisplay = document.querySelector('.user-choice-display');
console.log(userChoices);

// create computer input with math random
function getComputerSelection() {
  let pick = ['rock', 'paper', 'scissors'];
  let random = pick[Math.floor(Math.random() * pick.length)];
  console.log(random);
  computerChoice.innerHTML = random;
  return random;
}

// create player input with using the buttons

userChoices.forEach(userChoice => {
  userChoice.addEventListener('click', function (e) {
    choice = e.target.id;
    userDisplay.innerHTML = choice;
    console.log(choice);
    getComputerSelection();
  });
});

// create function to play a round using buttons reaction
// use round result to decide where the next letter goes
// end game after the 5th letter gets added to loser
