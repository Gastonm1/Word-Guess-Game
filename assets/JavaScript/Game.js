
// Create an array of words
var MarvelMovies = ['Iron Man', 'Incredible Hulk', 'Thor', 'Captain America', 'Avengers', 'Guardians of the Galaxy', 'Ant-Man', 'Doctor Strange', 'Black Panther', 'Spider-Man'];
// Choose Movie randomly
var randMovie = MarvelMovies[Math.floor(Math.random() * MarvelMovies.length)];

//Display chosen movie on page
var generateUnderscore = () => {
    for (var i=0; i < randMovie.length; i++) {
    }   
    document.querySelector(".Underscore").innerHTML = randMovie;
}
generateUnderscore();

//Create underscores based on length of word
var underscore = "";
    for (var i= 0; i< randMovie.length; i++) {
        underscore = underscore + " _ ";
    }
    document.querySelector(".Underscore").innerHTML = underscore;
console.log(underscore);

//Obtain users guess
document.addEventListener("keydown", function(event){
    console.log(event.key);
})

if (randMovie.indexOf(randMovie['i']) > -1) 
{
    for (var i=0; i <randMovie.length; i++)
    {
         if(randMovie.charAt('i') === underscore)

            underscore[i] = randMovie[i]
    }
}

// if userguess is right, display to underscore with letter
// If userguess is wrong, remove one value from remaining guesses //