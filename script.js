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

//Fonction test pour jouer une ronde complete


//Ici la fenetre pour que le joueur fasse son choix
let playerPrompt = prompt("Rock, paper or scissors?");

let playerChoice = playerPrompt.toLowerCase();


//Ici pour transformer les deux choix en constante
const computerSelection = getComputerChoice(myChoices);

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

playRound(playerChoice, computerSelection);
        
    


 