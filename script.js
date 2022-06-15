var options = [
    "rock",
    "paper",
    "scissors"
];

//Function to define what the computer plays
function computerPlay(arr) {
    var move = arr[Math.floor(Math.random() * arr.length)];
    console.log("PC plays: " + move);
    return move;
}

//Function to define which one wins
function playGame(playerMove, pcMove) {
    switch (playerMove) {
        case "rock":
            if (pcMove === "rock") {
                console.log("It's a draw :D");
                break;
            } else if (pcMove === "scissors") {
                console.log("You win! Rock beats Scissors!");
                break;
            } else if (pcMove === "paper") {
                console.log("You lose! Paper beats Rock!");
                break;
            }
        case "paper":
            if (pcMove === "rock") {
                console.log("You win! Paper beats Rock!");
                break;
            } else if (pcMove === "scissors") {
                console.log("You lose! Scissors beat Paper");
                break;
            } else if (pcMove === "paper") {
                console.log("It's a draw :D");
                break;
            }
        case "scissors":
            if (pcMove === "rock") {
                console.log("You lose! Rock beats Scissors");
                break;
            } else if (pcMove === "scissors") {
                console.log("It's a draw :D");
                break;
            } else if (pcMove === "paper") {
                console.log("You win! Scissors beat Paper");
                break;
            }
    }
}

var input = prompt("Please make your move: ");

if (input.toLowerCase() !== "rock" && input.toLowerCase() !== "paper" && input.toLowerCase() !== "scissors" ) {
    alert("Invalid play");
}

playGame(input.toLowerCase(), computerPlay(options));
