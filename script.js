// Fonction test pour appeler au hasard roche, papier ou ciseau

let myChoices = [
    "rock",         // myChoices[0]
    "paper",        // myChoices[1]
    "scissors"      // myChoices[2]
]

function getComputerChoice(arr) {
    array_length = arr.length; // Combien de positions dans le array?
    value = Math.random() * array_length; // Choisir un nombre entre 0 et array_length
    indexValue = Math.floor(value); // Arrondir le nombre choisi vers le bas (pas de valeur décimale)
    return arr[indexValue];
}
//Garder le score test
let playerScore = 0
let computerScore = 0



//Ici pour transformer les deux choix en constante
let computerSelection = getComputerChoice(myChoices);

//Ici pour determiner le gagnant de la ronde
function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return ("Tie");
    } else if (playerChoice === "rock" && computerSelection === "paper" ) {
        computerScore = computerScore + 0.5;
        return 'Paper beats rock, you lose!';  
    
    } else if (playerChoice === "rock" && computerSelection === "scissors" ) {
        playerScore = playerScore + 0.5;
        return 'Rock beats scissors, you win!'; 
    
    } else if (playerChoice === "paper" && computerSelection === "scissors" ) {
        computerScore = computerScore + 0.5;
        return 'Scissors beat paper, you lose!'; 
        
    } else if (playerChoice === "paper" && computerSelection === "rock" ) {
        playerScore = playerScore + 0.5;
        return 'Paper beats rock, you win!'; 
   
     } else if (playerChoice === "scissors" && computerSelection === "paper" ) {
        playerScore = playerScore + 0.5;
        return 'Scissors beats paper, you win!'; 
    
    } else if (playerChoice === "scissors" && computerSelection === "rock" ) {
        computerScore = computerScore + 0.5;
        return 'Rock beats scissors, you lose!';
        }
        
}


        

//Fonction test pour ajouter d'autre rondes

function game() {
    for (let i = 0; i < 6; i++)
    if (i < 5) {
        let playerPrompt = prompt("Rock, paper or scissors?");
        let playerChoice = playerPrompt.toLowerCase();
        let computerSelection = getComputerChoice(myChoices);
        playRound(playerChoice, computerSelection);
        console.log(playerChoice);
        console.log(computerSelection);
        console.log(playRound(playerChoice, computerSelection));
        console.log('Player Score = ' + playerScore + ' ' + 'Computer Score = ' + computerScore);

    }  else if (i === 6) {
        console.log("fin du jeu")
    } 
}

game();


