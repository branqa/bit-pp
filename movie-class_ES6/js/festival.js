var movieList = [];


document.querySelector('#movieButton').addEventListener('click', createMovie);

function createMovie() {

    var movieTitle = document.querySelector('#title');
    var movieLength = document.querySelector('#length');
    var movieGenre = document.querySelector('#genre');

    var titleValue = movieTitle.value;
    var lengthValue = movieLength.value;
    var genreValue = movieGenre.value;

    var error = {
        OK: '',
        INSERT_TITLE: 'Missing title!',
        INSERT_LENGTH: 'Missing length!',
        INSERT_GENRE: 'Missing genre!'
    }

    function validation(titleValue, lengthValue, genreValue) {
        if (titleValue != "") {
            if (parseInt(lengthValue) > 0 && parseInt(lengthValue) < 240) {
                if (genreValue != '-') {
                    return error.OK;
                }
                return error.INSERT_GENRE;
            }
            return error.INSERT_LENGTH;
        }
        return error.INSERT_TITLE;
    }

    var validationResult = validation(titleValue, lengthValue, genreValue);

    if (validationResult != error.OK) {
        var message = validationResult;
    }

    if (validationResult == error.OK) {
        var movie = new CreateMovie(titleValue, lengthValue, genreValue);
        movieList.push(movie);

        var movieIndex = movie.movieId;
        var message = error.OK;

        var movieInfo = movie.getData();

        var movieText = document.createTextNode(movieInfo);
        var ul = document.querySelector('#movieUl');
        var li = document.createElement('li');
        li.appendChild(movieText);
        ul.appendChild(li);
        document.querySelector("#errorMessage").innerHTML = '';

        var movieText = document.createTextNode(movieInfo);
        var select = document.querySelector('#movieSelect');
        var option = document.createElement('option');
        option.appendChild(movieText);
        option.value = movieIndex;
        select.appendChild(option);
    }

    var text = document.createTextNode(message);
    var errorDiv = document.querySelector("#errorMessage");
    errorDiv.appendChild(text);



    var totalLength = 0;

    for (var i = 0; i < movieList.length; i++) {
        totalLength = parseInt(totalLength) + parseInt(movieList[i].movieLength);
    }

    var allMoviesLength = document.querySelector('#allMoviesText').textContent = totalLength;

    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "-";

}

//create program        


var programList = [];

document.querySelector('#programButton').addEventListener('click', createProgram);

function createProgram() {
    var programDate = document.querySelector('#date');
    var dateValue = programDate.value;

    function validation(dateValue) {
        if (dateValue == '') {
            return 'Insert date!'
        } else {
            return "OK"
        }
    }

    var validationResult = validation(dateValue);

    if (validationResult == 'OK') {
        var program = new Program(dateValue);
        programList.push(program);
        var programIndex = program.programId;

        var programInfo = program.getData();

        var programText = document.createTextNode(programInfo);
        var ul = document.querySelector('#programUl');
        var li = document.createElement('li');
        li.setAttribute('data-programIndex', programIndex);
        li.appendChild(programText);
        ul.appendChild(li);


        var programText = document.createTextNode(programInfo);
        var select = document.querySelector('#programSelect');
        var option = document.createElement('option');
        option.appendChild(programText);
        option.value = programIndex;
        select.appendChild(option);
    }
    select.value = '-';
}


//Add movie to program  

document.querySelector('#addMovieToProgram').addEventListener('click', addMovieToProgram);

function addMovieToProgram() {
    document.querySelector("#errorText").innerHTML = '';
    var movieSelect = document.querySelector('#movieSelect')
    var movieIndex = movieSelect.value;
    var movie;
    for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].movieId == parseInt(movieIndex)) {
            movie = movieList[i];
        }
    }

    var programSelect = document.querySelector('#programSelect');
    var programIndex = programSelect.value;
    var program;
    for (var i = 0; i < programList.length; i++) {
        if (programList[i].programId == parseInt(programIndex)) {
            program = programList[i];
        }
    }

    var result = program.addMovie(movie);

    if(result == "Movie already in program"){
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    }
    var li = document.querySelector("li[data-programIndex = '" + programIndex + "']");
    var programInfo = program.getData();
    li.textContent = programInfo;

    if(result == 'More then 8h of movies or more than 4 of same genre'){
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    }

    var li = document.querySelector("li[data-programIndex = '" + programIndex + "']");
    var programInfo = program.getData();
    li.textContent = programInfo;
   
    movieSelect.value = "-";
    programSelect.value = "-";
};

// TODO update program data, messages