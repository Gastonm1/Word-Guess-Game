// Create an array of words
var MarvelMovies = ['Iron Man', 'Incredible Hulk', 'Thor', 'Captain America', 'Avengers', 'Guardians of the Galaxy', 'Ant-Man', 'Doctor Strange', 'Black Panther', 'Spider-Man'];
// Choose Movie randomly
var ChoosenMovie = MarvelMovies[Math.floor(Math.random() * MarvelMovies.length)];
function showMovies(){
    document.getElementById(MarvelMovies).innerHTML = MarvelMovies[rand];
}
showMovies();

console.log(ChoosenMovie);
//Create underscores based on length of word
//Obtain users guess
// Check if guess is correct
// if right, push to underscores and correct array
//If wrong, push to wrong array