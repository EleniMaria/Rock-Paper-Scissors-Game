//console.log('Yasu!');

let userScore = 0;
let compScore = 0;
//cache the DOM
const userScoreDom = document.getElementById('user-score');
const compScoreDom = document.getElementById('comp-score');
const scoreBoardDom = document.querySelector('.score-board');
const resultDom = document.querySelector('.result > p');
const rockDom = document.getElementById('Rock');
const paperDom = document.getElementById('Paper');
const scissorsDom = document.getElementById('Scissors');

//event listeners & functions
function compChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
function win(user, computer) {
  const uniqU = user.fontsize(3);
  const uniqC = computer.fontsize(3);
  const userSelect = document.getElementById(user);
  console.log('Win');
  userScore++;
  userScoreDom.innerHTML = userScore;
  resultDom.innerHTML = `You selected
    ${uniqU}, it beats 
    ${uniqC}. You Win!!! Way to go!! `;
  userSelect.classList.add('glow');
  setTimeout(() => userSelect.classList.remove('glow'), 300);
}

function lose(user, computer) {
  const uniqU = user.fontsize(3);
  const uniqC = computer.fontsize(3);
  const userSelect = document.getElementById(user);
  console.log('Loser');
  compScore++;
  compScoreDom.innerHTML = compScore;
  resultDom.innerHTML = `Computer get's a point. 
  ${uniqC} beats ${uniqU}. You Lose!!! `;
  userSelect.classList.add('red');
  setTimeout(() => userSelect.classList.remove('red'), 300);
}

function draw(user) {
  const uniqU = user.fontsize(3);
  resultDom.innerHTML = `It's a Draw!!! You both selected ${uniqU}.`;
  console.log('DRAW');
}

function game(userChoice) {
  const computerChoice = compChoice();
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win(userChoice, computerChoice);
      break;
    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDom.addEventListener('click', () => game('Rock'));

  paperDom.addEventListener('click', () => game('Paper'));

  scissorsDom.addEventListener('click', () => game('Scissors'));
}

main();
