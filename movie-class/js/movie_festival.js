// list of all movies
var allMovies = [];

//create movie button
document.querySelector('#button-movie').addEventListener('click', createMovie);


function createMovie() {
    //read the entered data
    var movieTitleItem = document.querySelector('.movie-title');
    var movieTitle = movieTitleItem.value;
    var movieLengthItem = document.querySelector('.movie-length');
    var movieLength = movieLengthItem.value;
    var movieSelect = document.querySelector('.genre-list');
    var movieGenreIndex = movieSelect.selectedIndex;
    var movieGenre = movieSelect.options[movieGenreIndex].value;

    //validation
    var errorMessage = document.querySelector('.movie-error');
    var error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title',
        INSERT_LENGTH: 'Please check the movie length',
        INSERT_GENRE: 'Please select the movie genre'
    }

    function validation(movieTitle, movieLength, movieGenre) {
        if (movieTitle == '') {
            return error.INSERT_TITLE;
        } else if (isNaN(movieLength) || movieLength <= 0) {
            return error.INSERT_LENGTH;
        } else if (movieGenre == '-') {
            return error.INSERT_GENRE;
        }

        return error.OK;
    }

    var printMessage;
    var validationMessage = validation(movieTitle, movieLength, movieGenre);

    if (validationMessage == error.INSERT_TITLE) {
        document.querySelector('.movie-error').innerHTML = '';
        printMessage = document.createTextNode(error.INSERT_TITLE);

    } else if (validationMessage == error.INSERT_LENGTH) {
        document.querySelector('.movie-error').innerHTML = '';
        printMessage = document.createTextNode(error.INSERT_LENGTH);

    } else if (validationMessage == error.INSERT_GENRE) {
        document.querySelector('.movie-error').innerHTML = '';
        printMessage = document.createTextNode(error.INSERT_GENRE);
    }

    if (validationMessage == error.OK) {
        // create movie 
        var movie = new Movie(movieTitle, movieLength, movieGenre);

      //show movie in the list of movies
        allMovies.push(movie);
        movieTitleItem.value = "";
        movieLengthItem.value = "";
        movieSelect.value = "-";
        printMessage = document.createTextNode(error.OK);

        var showMovieList = document.querySelector('ul');
        var newLi = document.createElement('li');
        var newMovie = document.createTextNode(movie.getData());
        newLi.appendChild(newMovie);
        showMovieList.appendChild(newLi);

        // updating length of all movies
        var lengthOfAllMovie = 0;
        for (var i = 0; i < allMovies.length; i++) {
            lengthOfAllMovie += parseInt(allMovies[i].movieLength);
        }
  
        //show the length of all movies 
        document.querySelector('.movie-error').innerHTML = '';
        var allLength = document.querySelector('.all');
        allLength.textContent = lengthOfAllMovie;

    }

    errorMessage.appendChild(printMessage);

    //add created movies in the select list
    var listOfMovies = document.querySelector('.list-of-movies');
    var newOptionMovie = document.createElement('option');
    var selectMovie = document.createTextNode(movie.getData());
    newOptionMovie.value = movie.movieId;
    newOptionMovie.appendChild(selectMovie);
    listOfMovies.appendChild(newOptionMovie);

}

//list of all programs
var allPrograms =  [];

//create program button
document.querySelector('#button-program').addEventListener('click', createProgram);


function createProgram() {
    // read the entered data
    var dateItem = document.querySelector('.date');
    var date = dateItem.value;

    //validation
    function validation(date) {

        if(date == '') {
            return 'Missing date';
        } else{ 
            return 'OK';
        }
    }

    var validationMessage = validation(date);
    var divMessage1 =  document.querySelector('#print-message1');

    if (validationMessage == 'OK'){
    document.querySelector('#print-message1').innerHTML = '';
    printMessage1=document.createTextNode('OK');
    divMessage1.appendChild(printMessage1);

    // create new program
    var program = new Program (date);
    allPrograms.push(program);
    var newProgram = document.querySelector('.program-field');
    var newLi = document.createElement('li');
    var textDateProgram = document.createTextNode(program.getData());
    newLi.setAttribute('data-id', program.programId);
    newLi.appendChild(textDateProgram);
    newProgram.appendChild(newLi);

    // add program in the program list
    var listOfPrograms = document.querySelector('.list-of-programs');
    var newOptionProgram = document.createElement('option');
    newOptionProgram.value= program.programId;
    var selectProgram = document.createTextNode(program.getData());
    newOptionProgram.appendChild(selectProgram);
    listOfPrograms.appendChild(newOptionProgram);
  
   } else {
    document.querySelector('#print-message1').innerHTML = '';
    printMessage1=document.createTextNode('Missing date'); 
    divMessage1.appendChild(printMessage1);
   }

}

// add movie to program button
document.querySelector('#button-program-list').addEventListener('click', addMovieToProgram);

function addMovieToProgram() {
    var movie = document.querySelector('.list-of-movies').value;
    var program = document.querySelector('.list-of-programs').value;

    for (var i = 0; i<allPrograms.length; i++){
        if (allPrograms[i].programId==program){
            var programObject = allPrograms[i];
    }
}

    for (var i = 0; i<allMovies.length; i++){
        if (allMovies[i].movieId==movie){
            var movieObject = allMovies[i];
    }
}
    programObject.addMovie(movieObject);

    var selectedProgram = document.querySelector('li[data-id="'+ program + '"]');
    selectedProgram.textContent = programObject.getData();

}
