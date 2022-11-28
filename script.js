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
let playerScore = 0;
let computerScore = 0;
const victoryScore = 5;

// Fonction pour faire rouler la ronde
function genericRound(choice) {
    playerChoice = choice;
    let computerSelection = getComputerChoice(myChoices); 
    document.getElementById("demo").innerHTML = playRound(playerChoice, computerSelection);
    document.getElementById("pscore").innerHTML = playerScore ; 
    document.getElementById("cscore").innerHTML = computerScore ;
    
    const result = checkForVictory();
    if (result) { 
        alert(result) 
        playerScore = 0;
        computerScore = 0;
        };
    

}

// Fonction pour declencher le message de victoire

function checkForVictory(){
    if (playerScore === victoryScore) {
    return "YOU WIN!"
    }
    else if (computerScore === victoryScore) {
    return "YOU LOSE!"
    }
}


//Les boutons peuvent etre cliques et renvoient la reponse du joueur
rock.addEventListener("click", (e)=>{ 
    genericRound("rock");
    
});

paper.addEventListener("click", (e)=>{ 
    genericRound("paper");
});

scissors.addEventListener("click", (e)=>{ 
    genericRound("scissors");
});

   





//Ici pour transformer les deux choix en constante
let computerSelection = getComputerChoice(myChoices);

//Ici pour determiner le gagnant de la ronde
function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return ("Tie");
    } else if (playerChoice === "rock" && computerSelection === "paper" ) {
        computerScore = computerScore + 1;
        return 'Paper beats rock, you lose!';  
    
    } else if (playerChoice === "rock" && computerSelection === "scissors" ) {
        playerScore = playerScore + 1;
        return 'Rock beats scissors, you win!'; 
    
    } else if (playerChoice === "paper" && computerSelection === "scissors" ) {
        computerScore = computerScore + 1;
        return 'Scissors beat paper, you lose!'; 
        
    } else if (playerChoice === "paper" && computerSelection === "rock" ) {
        playerScore = playerScore + 1;
        return 'Paper beats rock, you win!'; 
   
     } else if (playerChoice === "scissors" && computerSelection === "paper" ) {
        playerScore = playerScore + 1;
        return 'Scissors beats paper, you win!'; 
    
    } else if (playerChoice === "scissors" && computerSelection === "rock" ) {
        computerScore = computerScore + 1;
        return 'Rock beats scissors, you lose!';
        }
        
}




