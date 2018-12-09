// Create an array of words
var MarvelMovies = ['Iron Man', 'Incredible Hulk', 'Thor', 'Captain America', 'Avengers', 'Guardians of the Galaxy', 'Ant-Man', 'Doctor Strange', 'Black Panther', 'Spider-Man'];
// Choose Movie randomly
var randMovie = MarvelMovies[Math.floor(Math.random() * MarvelMovies.length)];
// Selected 'Iron Man'
//Create underscores based on length of word
var generateUnderscore = () => {
    for (var i=0; i < randMovie.length; i++) {
    }   
    console.log(document.querySelector(".Underscore").innerHTML = randMovie);

}
console.log(generateUnderscore());

//value of underscore

//Obtain users guess
document.addEventListener("keydown", function(event){
    console.log(event.key);
});
// Check if guess is correct
// if right, push to underscores and correct array
//If wrong, push to wrong array


// how do i create a string of underscores?
("_" + "_")  //concatinate string using for loop
// once i have the string of underscores how do i add it the div?
// once a user guesses how to add that to the string?