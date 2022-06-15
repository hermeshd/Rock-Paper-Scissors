var game = [
    "Rock",
    "Paper",
    "Scissors"
];

function computerPlay(arr) {
    var play = arr[Math.floor(Math.random() * arr.length)];
    console.log(play);
}

computerPlay(game);