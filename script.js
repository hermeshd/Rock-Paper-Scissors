var options = [
    "rock",
    "paper",
    "scissors"
];

//Counter of how many times has a player won
var HumanWins = 0;
var PCWins = 0;

//Function to define what the computer plays
function computerPlay(arr) {
    var move = arr[Math.floor(Math.random() * arr.length)];
    console.log("PC plays: " + move);
    return move;
}

//Function to define which one wins
function playGame(playerMove, pcMove) {

    console.log("Human plays: " + playerMove);

    switch (playerMove) {
        case "rock":
            if (pcMove === "rock") {
                console.log("It's a draw :D");
                break;
            } else if (pcMove === "scissors") {
                console.log("You win! Rock beats Scissors!");
                HumanWins = HumanWins + 1;
                break;
            } else if (pcMove === "paper") {
                console.log("You lose! Paper beats Rock!");
                PCWins = PCWins + 1;
                break;
            }
        case "paper":
            if (pcMove === "rock") {
                console.log("You win! Paper beats Rock!");
                HumanWins = HumanWins + 1;
                break;
            } else if (pcMove === "scissors") {
                console.log("You lose! Scissors beat Paper");
                PCWins = PCWins + 1;
                break;
            } else if (pcMove === "paper") {
                console.log("It's a draw :D");
                break;
            }
        case "scissors":
            if (pcMove === "rock") {
                console.log("You lose! Rock beats Scissors");
                PCWins = PCWins + 1;
                break;
            } else if (pcMove === "scissors") {
                console.log("It's a draw :D");
                break;
            } else if (pcMove === "paper") {
                console.log("You win! Scissors beat Paper");
                HumanWins = HumanWins + 1;
                break;
            }
    }
}

//Loop to play the game up to five times
function bestOutOfThree() {
    for (let i = 0; i < 5; i++) {
        
        var input = prompt("Please make your move: ");

        if (input.toLowerCase() !== "rock" && input.toLowerCase() !== "paper" && input.toLowerCase() !== "scissors") {
            alert("Invalid play");
        }

        playGame(input.toLowerCase(), computerPlay(options));

        if (HumanWins === 3) {
            console.log("The Human is the winner");
            console.log(HumanWins);
            console.log(PCWins);
            break;
        }
        
        if (PCWins === 3) {
            console.log("The PC is the winner")
            console.log(HumanWins);
            console.log(PCWins);
            break;
        }

        
    }
}

bestOutOfThree();