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
});
// Check if guess is correct
if 
// if right, push to underscores and correct array
//If wrong, push to wrong array


// how do i create a string of underscores?
("_" + "_")  //concatinate string using for loop
// once i have the string of underscores how do i add it the div?
// once a user guesses how to add that to the string?

var changeMe = 0;
console.log(changeMe); // 0

var iAmAFunction = () => {
 changeMe = 2   
}

console.log(changeMe); // 0
console.log(iAmAFunction()); // undefined
console.log(changeMe); // 2