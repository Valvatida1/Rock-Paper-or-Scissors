const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput
} else { 
  console.log('Error, please try again');
}
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
    console.log('rock')
    break;
    case 1:
    console.log('paper')
    break;
    case 2:
    console.log('scissors')
    break;
  }

const determineWInner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice)
  return 'It is a tie';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper'){
    return 'you loser! the computer won';
  } else {
    return 'Well done!, you won this time'
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'You loser! the computer won'
  } else {
    return 'Well done! you won this time'
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'You loser, the computer won'
  } else {
    return ' You win'
  }
if (userChoice === 'bomb') {
  return 'You win cheater!'
}
}
const playGame = () => {
  const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('tu has sacado: ' + userChoice);
console.log('El ordenador ha sacado: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
}
playGame()
};


