function getComputerChoice() {
    let choices  = ["rock", "paper", "scissors"]
    let compChoice = Math.floor(Math.random() * 3) 
    return (choices[compChoice])
  }
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    // All situations where human draws, set `score` to 0
    let score
  
    
    console.log(playerChoice === computerChoice)  
    if (playerChoice === computerChoice) {
      score = 0
    }
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if (playerChoice === "rock" && computerChoice === "scissors" ) {
      score = 1    
    }
  
    else if (playerChoice === "paper" && computerChoice === "rock" ) {
      score = 1    
    }
  
    else if (playerChoice === "scissors" && computerChoice === "paper" ) {
      score = 1    
    }
  
    // Otherwise human loses (aka set score to -1)
    else {
      score = -1
    }
  
    // return score
    return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    
    console.log(score)
  
    let plyscore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
  
    if (score == -1) {
      result.innerText = "You Lose!"
    }
  
    if (score == 0) {
      result.innerText = "It's a Draw"
    }
  
    if (score == 1) {
      result.innerText = "You Win!"
    }
    plyscore.innerText = `${Number(plyscore.innerText) + score}`
    hands.innerText = `You : ${playerChoice}   vs   Bot : ${computerChoice}`
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    const finalCompChoice = getComputerChoice()
    const finalScore = getResult(playerChoice.value, finalCompChoice)
    showResult(finalScore,playerChoice.value, finalCompChoice)
  }
  
  
  
  function playGame() {
    
    let rpsBtn = document.querySelectorAll('.rpsButton')
    
    rpsBtn.forEach(Btn => {
      Btn.onclick = () => onClickRPS(Btn)
    })
   
    let ending = document.getElementById('endGameButton')
    ending.onclick = () => endGame()
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
    
    let plyscore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
  
    plyscore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
    
  }
  playGame()
