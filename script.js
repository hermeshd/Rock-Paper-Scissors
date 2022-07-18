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

//Event Listener to store Human move
const playButtonRock = document.querySelector(".rock");
const playButtonPaper = document.querySelector(".paper");
const playButtonScissors = document.querySelector(".scissors");

playButtonRock.addEventListener("click", () => playGame("rock", computerPlay(options)));
playButtonPaper.addEventListener("click", () => {
    playGame("paper", computerPlay(options));
});
playButtonScissors.addEventListener("click", () => {
    playGame("scissors", computerPlay(options));
});

//Function to define which one wins each individual match
function playGame(playerMove, pcMove) {


    console.log("Human plays: " + playerMove);

    switch (playerMove) {
        case "rock":
            if (pcMove === "rock") {
                console.log("It's a draw :D");
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "scissors") {
                console.log("You win! Rock beats Scissors!");
                HumanWins = HumanWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "paper") {
                console.log("You lose! Paper beats Rock!");
                PCWins = PCWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            }
        case "paper":
            if (pcMove === "rock") {
                console.log("You win! Paper beats Rock!");
                HumanWins = HumanWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "scissors") {
                console.log("You lose! Scissors beat Paper");
                PCWins = PCWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "paper") {
                console.log("It's a draw :D");
                console.log(HumanWins);
                console.log(PCWins);
                break;
            }
        case "scissors":
            if (pcMove === "rock") {
                console.log("You lose! Rock beats Scissors");
                PCWins = PCWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "scissors") {
                console.log("It's a draw :D");
                console.log(HumanWins);
                console.log(PCWins);
                break;
            } else if (pcMove === "paper") {
                console.log("You win! Scissors beat Paper");
                HumanWins = HumanWins + 1;
                console.log(HumanWins);
                console.log(PCWins);
                break;
            }
    }

    //Determine who's the overall winner
    if (HumanWins === 5) {
        alert("Human is the winner");
    } else if (PCWins === 5) {
        alert("PC Wins");
    }
}


