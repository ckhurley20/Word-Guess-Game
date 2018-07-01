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
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
var gameRunning = false;


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
    $guessedLetters.textContent = incorrectLetterBank;


}



function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1){

        guessedLetterBank.push(letter);

        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

        $placeHolders.textContent = pickedWordPlaceholderArr.join("");
        checkIncorrect(letter);
    }

    else {
        if (!gameRunning) {
            alert("Click the Start a New Game Button");
        }
        else {
            alert("Try a Different Letter");
        }
    }
}


function checkIncorrect(letter) {
    if (
        pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
        && 
        pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1
    ) {
        guessesLeft--;
        incorrectLetterBank.push(letter);
        $guessedLetters.textContent = incorrectLetterBank.join(" ");
        $guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

// CHECK FOR LOSS
function checkLoss(){
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $numLosses.textContent = losses;
        alert("You Lost! Try Again");
    }
    checkWin();
}

//  CHECK FOR WIN
function checkWin() {
    if(pickedWord.toLowerCase() === pickedWordPlaceholderArr.join("").toLowerCase()) {
        wins++;
        gameRunning = false;
        $numWins.textContent = wins;
        alert("You Won! Click Start a New Game Button");
    }
}



$newGameButton.addEventListener("click", newGame);

document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}