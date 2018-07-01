var placeHolders = document.getElementById("#place-holders")
var lettersGuessed = document.getElementById("#letters-guessed")
var numWins = document.getElementById("#num-wins")
var numLosses = document.getElementById("#num-losses")
var guessesRemaining = document.getElementById("#guesses-remaining")


var wordBank = [
    "Tom Brady", 
    "Julian Edelman", 
    "Chris Hogan", 
    "Rob Gronkowski", 
    "Donta Hightower", 
    "Sony Michel", 
    "James White", 
    "Stephon Gilmore", 
    "Patrick Chung", 
    "Devin McCourty",
    "Matthew Slater",
    "Rex Burkhead"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// console.log(randomWord);

var wins = 0;
var losses = 0;

var userChoices =[
    "a", "A",
    "b", "B",
    "c", "C",
    "d", "D",
    "e", "E",
    "f", "F",
    "g", "G",
    "h", "H",
    "i", "I",
    "j", "J",
    "k", "K",
    "l", "L",
    "m", "M",
    "n", "N", 
    "o", "O",
    "p", "P",
    "q", "Q",
    "r", "R",
    "s", "S",
    "t", "T",
    "u", "U",
    "v", "V",
    "w", "W", 
    "x", "X",
    "y", "Y",
    "z", "Z",
]

var lettersGuessed = [];
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

    //   console.log(userGuess);

      lettersGuessed.push(userGuess);

    };

    console.log(lettersGuessed);

    