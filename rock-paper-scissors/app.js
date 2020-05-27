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
// console.log(compChoice());
function win() {
  //   console.log('Win');

  userScore++;
  userScoreDom.innerHTML = userScore;
  resultDom.innerHTML = 'You Win!!! Way to go!! ';
  console.log('User' + userScore);
}

function lose() {
  console.log('Loser');
  compScore++;
  resultDom.innerHTML = "Computer get's a point. You Lose!!! ";
  console.log('User' + userScore);
  compScoreDom.innerHTML = compScore;
  console.log('Computer' + compScore);
}

function draw(user, computer) {
  resultDom.innerHTML = "It's a Draw!!! ";
  console.log('User' + userScore);
  console.log('DRAW');
}

function game(userChoice) {
  const computerChoice = compChoice();
  //   console.log('I choose ' + userChoice);
  //   console.log('Computer chose ' + computerChoice);
  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      win();
      //console.log('You Win!!!');
      break;
    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
      lose();
      //console.log('You Lose');
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw();
      //console.log('DRAW');
      break;
  }
}

function main() {
  rockDom.addEventListener('click', function () {
    //console.log('This is a ROCK');
    game('Rock');
  });

  paperDom.addEventListener('click', function () {
    //console.log('This is PAPER');
    game('Paper');
  });

  scissorsDom.addEventListener('click', function () {
    //console.log('These are Scissors!');
    game('Scissors');
  });
}

main();