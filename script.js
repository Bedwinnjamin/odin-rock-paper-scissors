function game(){
  let winner = false;
  let playerScore = 0, cpuScore = 0;
  while(!winner){
    let playerChoice = window.prompt("Rock, Paper, or Scissors?")
    let cpuChoice = computerPlay();

    switch(rps(playerChoice, cpuChoice)){
      case -1:
        //Tie
        console.log(`${playerChoice} and ${cpuChoice}, no points!`)
        break;
      case 0:
        //Lose
        console.log(`${cpuChoice} beats ${playerChoice}, score to the CPU!`)
        cpuScore++;
        break;
      case 1:
        //Win
        console.log(`${playerChoice} beats ${cpuChoice}, score to you!`)
        playerScore++;
        break;
    }
    if(playerScore >=5){
      console.log("The Player Wins!")
    }
    else if(cpuScore >= 5){
      console.log("The Computer Wins!")
    }
  }
}

function rps(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  
  let results = -1;

  if(!(playerSelection === computerSelection)){
    if(playerSelection === "rock"){
      if(computerSelection === "scissors")
        results = 1;
      else
        results = 0;
    }
    else if(playerSelection === "paper"){
      if(computerSelection === "rock")
        results = 1;
      else
        results = 0;
    }
    else{
      if(computerSelection === "paper")
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
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

game();