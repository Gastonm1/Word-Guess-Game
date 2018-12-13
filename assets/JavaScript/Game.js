var GuessesLeft = 10;
var winCounter = 0;

document.getElementById("RemainingGuesses").innerHTML= "You have " + GuessesLeft + " guesses left!";
document.getElementById("Wins").innerHTML= "You have won " + winCounter + " games!";

// Create an array of words
var MarvelMovies = ['hulk', 'thor', 'avengers', 'antman', 'spiderman'];
// Choose Movie randomly
var randMovie = MarvelMovies[Math.floor(Math.random() * MarvelMovies.length)];
console.log(randMovie);
//Display chosen movie on page
var generateUnderscore = () => {
    for (var i = 0; i < randMovie.length; i++) {
    }
    document.querySelector(".Underscore").innerHTML = randMovie;
}
generateUnderscore();

//Create underscores based on length of word
var underscore = [];
for (var i = 0; i < randMovie.length; i++) {
    underscore = underscore + " _ ";

}

document.querySelector(".Underscore").innerHTML = underscore;
console.log(underscore);

function winLose() {
    if (UserGuess === randMovie.length) {
        alert('You made Stan Lee proud!')

    }
    else if (GuessesLeft === 0) {
        alert('Stan Lee is not satisfied!');
    }
}

var UserGuess = '';
var WrongLetter = [];

//Obtain user guess
document.addEventListener("keydown", function (event) {
    UserGuess = event.key;
    console.log(event.key);

    //Check if letter exists inside of word, if so fill in the blank, if not subtract on GuessLeft

    if (randMovie.indexOf(UserGuess) > -1) { // If the user guessed a correct letter
        for (var i = 0; i < randMovie.length; i++) { // For every letter in randMovie
            if (randMovie.charAt(i) === UserGuess) { // If the user guessed one of the letters
                underscore[i] = UserGuess
                console.log(underscore);

                winCounter++;
                winLose();

            }
        }
    } else { // if the user guesses a wrong letter
        WrongLetter.push(UserGuess);
        GuessesLeft--;
        console.log(GuessesLeft)
        winLose();
    }
    document.querySelector('#RemainingGuesses').innerHTML = GuessesLeft
    document.querySelector('.Underscore').innerHTML = underscore
    document.querySelector('#Wins').innerHTML = winCounter
})



// Todo:
// When the user guesses a correct letter, does the new 'underscore' value show on the page?
// What happens when the user guesses a full movie title?
// Win counter needs to only display when game is won,