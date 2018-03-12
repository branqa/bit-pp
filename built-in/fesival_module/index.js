const  {Genre} = require('./genreModule');
const  {Movie} = require('./movieModule');
const  {Program} = require('./programModule');
const  {Festival} = require('./festival');

var genre = new Genre('action');
var genre1 = new Genre('comedy');
var genre2 = new Genre('drama');

var createProgram = function (date) {
    var newProgram = new Program(date);
    return newProgram;
}

var createMovie = function (title, length, genre) {
    var genre1 = new Genre(genre);
    var newMovie = new Movie(title, length, genre1);
    return newMovie;
}


    var movie1 = createMovie('IT', '220 min', 'action');
    var movie2 = createMovie('Hobbit', '304min', 'fantasy');

    var festival1 = new Festival('Cannes fest');


    var program1 = createProgram(new Date(2018, 05, 07));
    var program2 = createProgram(new Date(2018, 04, 06)); program1.addMovie(movie1); program1.addMovie(movie2); program2.addMovie(movie1); program2.addMovie(movie2);


    festival1.addProgram(program1); 
    festival1.addProgram(program2);

    console.log(festival1.getData());