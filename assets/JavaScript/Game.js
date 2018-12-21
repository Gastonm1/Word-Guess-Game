var guessesLeft = 10;
var winCounter = 0;
var userGuess = "";
var underscore = [];

document.getElementById("RemainingGuesses").innerHTML =
  "You have " + guessesLeft + " guesses left!";
document.getElementById("Wins").innerHTML =
  "You have won " + winCounter + " games!";

//Rules & Formatting
//===============================================================================================================
function startGame() {
  // Create an array of words
  var marvelMovies = ["hulk", "thor", "avengers", "antman", "spiderman"];
  // Choose Movie randomly
  var randMovie = marvelMovies[Math.floor(Math.random() * marvelMovies.length)];

  console.log(randMovie);

  //Create underscores based on length of Movie

  for (var i = 0; i < randMovie.length; i++) {
    // Create underscores for the length of the random Movie
    underscore.push(" _ ");
  }

  //Display underscores on browser here
  document.getElementById("Underscore").innerHTML = underscore.join(" ");
  console.log(underscore);

  //Alerts
  function winLose(rightLetter) {
    if (rightLetter === randMovie.length) {
      alert("You made Stan Lee proud!");
    } else if (guessesLeft === 0) {
      alert("Stan Lee is not satisfied!");
    }
  }

  //Game for user starts below
  //=========================================================================================
  //Obtain user guess
  var rightLetter = [];
  var wrongLetter = [];

  document.addEventListener("keydown", function(event) {
    userGuess = event.key;
    console.log(event.key);

    //Check if letter exists inside of word, if so fill in the blank, if not subtract on GuessLeft
    // If User guess is right
    //If user guess is wrong

    if (randMovie.indexOf(userGuess) > -1) {
      // If the user guessed a correct letter
      for (var i = 0; i < randMovie.length; i++) {
        // For every letter in randMovie
        if (randMovie[i] === userGuess) {
          // If the user guessed one of the letters
          console.log(randMovie[i]);
          //underscore[i] = userGuess
          console.log(underscore);
          rightLetter.push(userGuess);
          underscore[randMovie.indexOf(userGuess)] = userGuess;
          winCounter++;
          if (winCounter === randMovie.length) {
            alert("You made Stan Lee proud!");
          }
          //winLose(rightLetter.length);
        }
      }
    } else {
      // if the user guesses a wrong letter
      wrongLetter.push(userGuess);
      guessesLeft--;
      console.log(guessesLeft);
      winLose();
    }

    document.getElementById("Underscore").innerHTML = rightLetter.join("");
    document.getElementById("RemainingGuesses").innerHTML = guessesLeft;
    document.getElementById("Wins").innerHTML = winCounter;
  });
}

startGame();

// Todo:
// When the user guesses a correct letter, does the new 'underscore' value show on the page?
// What happens when the user guesses a full movie title?
// Win counter needs to only display when game is won,
