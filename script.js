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




//Ici pour transformer les deux choix en constante
let computerSelection = getComputerChoice(myChoices);

//Ici pour determiner le gagnant de la ronde
function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return ("Tie");
    } else if (playerChoice === "rock" && computerSelection === "paper" ) {
        return ('Paper beats rock, you lose!');
    } else if (playerChoice === "rock" && computerSelection === "scissors" ) {
        return ('Rock beats scissors, you win!');
    } else if (playerChoice === "paper" && computerSelection === "scissors" ) {
        return ('Scissors beat paper, you lose!');
    } else if (playerChoice === "paper" && computerSelection === "rock" ) {
        return ('Paper beats rock, you win!');
    } else if (playerChoice === "scissors" && computerSelection === "paper" ) {
        return ('Scissors beats paper, you win!');
    } else if (playerChoice === "scissors" && computerSelection === "rock" ) {
        return ('Rock beats scissors, you lose!'); }
}


        
    
//Fonction test pour ajouter d'autre rondes

function game() {
    for (let i = 0; i < 5; i++)
    if (i < 6) {
        let playerPrompt = prompt("Rock, paper or scissors?");
        let playerChoice = playerPrompt.toLowerCase();
        getComputerChoice(myChoices);
        playRound(playerChoice, computerSelection);
        console.log(playerChoice);
        console.log(computerSelection);
        console.log(playRound(playerChoice, computerSelection));


    }  else if (i > 6) {
        console.log("fin du jeu")
    } 
}

game();