var $placeHolders = document.getElementById("place-holders")
var $guessedLetters = document.getElementById("guessed-letters")
var $numWins = document.getElementById("num-wins")
var $numLosses = document.getElementById("num-losses")
var $guessesLeft = document.getElementById("guesses-left")
var $newGameButton = document.getElementById("new-game-button")


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

// var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];



// console.log(randomWord);

var wins = 0;
var losses = 0;
var guessesLeft = 8;
var pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];;
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var gameRunning = false;

pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];


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



// NEW GAME FUNCTION

function newGame () {
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];


    //GENERATE RANDOM WORD
   pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];


    //CREATE FOR LOOP TO GIVE PICKED WORD ITS UNDERSCORES AND SPACING WHERE NECESSARY
    for (i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholderArr.push(" ");
        } else {
            pickedWordPlaceholderArr.push("_")
        }
    }

    $guessesLeft.textContent = guessesLeft;
    $placeHolders.textContent = pickedWordPlaceholderArr.join(" ");
    $lettersGuessed.textContent = incorrectLetterBank;


}

$newGameButton.addEventListener("click", newGame);