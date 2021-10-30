const rocker = document.querySelector('#rock');
rocker.addEventListener('click', () => {
  game("Rock");
});

const paperer = document.querySelector('#paper');
paperer.addEventListener('click', () => {
  game("Paper");
});

const scissorer = document.querySelector('#scissors');
scissorer.addEventListener('click', () => {
  game("Scissors");
});

let playerScore = 0, cpuScore = 0;
let winner = false;

function game(playerChoice){
    //let playerChoice = window.prompt("Rock, Paper, or Scissors?")
  let cpuChoice = computerPlay();

  const display = document.querySelector('.display');
  switch(rps(playerChoice, cpuChoice)){
    case -1:
      //Tie
      //console.log(`${playerChoice} and ${cpuChoice}, no points!`)
      display.textContent = `${playerChoice} and ${cpuChoice}, no points!`;
      break;
    case 0:
      //Lose
      //console.log(`${cpuChoice} beats ${playerChoice}, score to the CPU!`)
      display.textContent = `${cpuChoice} beats ${playerChoice}, score to the CPU!`;
      cpuScore++;
      break;
    case 1:
      //Win
      //console.log(`${playerChoice} beats ${cpuChoice}, score to you!`)
      display.textContent = `${playerChoice} beats ${cpuChoice}, score to you!`;
      playerScore++;
      break;
  }
  if(playerScore >=5){
    display.textContent = `The Player wins!`;
  }
  else if(cpuScore >= 5){
    display.textContent += `The Computer wins!`;
  }
}

function rps(playerSelection, computerSelection){
  let results = -1;

  if(!(playerSelection === computerSelection)){
    if(playerSelection === "Rock"){
      if(computerSelection === "Scissors")
        results = 1;
      else
        results = 0;
    }
    else if(playerSelection === "Paper"){
      if(computerSelection === "Rock")
        results = 1;
      else
        results = 0;
    }
    else{
      if(computerSelection === "Paper")
        results = 1;
      else
        results = 0;
    }
  }
  return results;
}

function computerPlay(){
  let cpu = Math.floor(Math.random() * 3)
  switch(cpu){
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}