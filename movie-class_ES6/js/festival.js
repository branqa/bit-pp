const movieList = [];


document.querySelector('#movieButton').addEventListener('click', createMovie);

function createMovie() {

    const movieTitle = document.querySelector('#title');
    const movieLength = document.querySelector('#length');
    const movieGenre = document.querySelector('#genre');

    const titleValue = movieTitle.value;
    const lengthValue = movieLength.value;
    const genreValue = movieGenre.value;

    const error = {
        OK: '',
        INSERT_TITLE: 'Missing title!',
        INSERT_LENGTH: 'Missing length!',
        INSERT_GENRE: 'Missing genre!'
    };

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

    const validationResult = validation(titleValue, lengthValue, genreValue);

    if (validationResult != error.OK) {
        var message = validationResult;
    }

    if (validationResult == error.OK) {
        const movie = new CreateMovie(titleValue, lengthValue, genreValue);
        movieList.push(movie);

        const movieIndex = movie.movieId;
        var message = error.OK;

        const movieInfo = movie.getData();

        var movieText = document.createTextNode(movieInfo);
        const ul = document.querySelector('#movieUl');
        const li = document.createElement('li');
        li.appendChild(movieText);
        ul.appendChild(li);
        document.querySelector("#errorMessage").innerHTML = '';

        var movieText = document.createTextNode(movieInfo);
        const select = document.querySelector('#movieSelect');
        const option = document.createElement('option');
        option.appendChild(movieText);
        option.value = movieIndex;
        select.appendChild(option);
    }

    const text = document.createTextNode(message);
    const errorDiv = document.querySelector("#errorMessage");
    errorDiv.appendChild(text);



    let totalLength = 0;

    for (let i = 0; i < movieList.length; i++) {
        totalLength = parseInt(totalLength) + parseInt(movieList[i].movieLength);
    }

    const allMoviesLength = document.querySelector('#allMoviesText').textContent = totalLength;

    movieTitle.value = "";
    movieLength.value = "";
    movieGenre.value = "-";

}

//create program        


const programList = [];

document.querySelector('#programButton').addEventListener('click', createProgram);

function createProgram() {
    const programDate = document.querySelector('#date');
    const dateValue = programDate.value;

    function validation(dateValue) {
        if (dateValue == '') {
            return 'Insert date!'
        } else {
            return "OK"
        }
    }

    const validationResult = validation(dateValue);

    if (validationResult == 'OK') {
        const program = new Program(dateValue);
        programList.push(program);
        const programIndex = program.programId;

        const programInfo = program.getData();

        var programText = document.createTextNode(programInfo);
        const ul = document.querySelector('#programUl');
        const li = document.createElement('li');
        li.setAttribute('data-programIndex', programIndex);
        li.appendChild(programText);
        ul.appendChild(li);


        var programText = document.createTextNode(programInfo);
        var select = document.querySelector('#programSelect');
        const option = document.createElement('option');
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
    const movieSelect = document.querySelector('#movieSelect');
    const movieIndex = movieSelect.value;
    let movie;
    for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].movieId == parseInt(movieIndex)) {
            movie = movieList[i];
        }
    }

    const programSelect = document.querySelector('#programSelect');
    const programIndex = programSelect.value;
    let program;
    for (var i = 0; i < programList.length; i++) {
        if (programList[i].programId == parseInt(programIndex)) {
            program = programList[i];
        }
    }

    const result = program.addMovie(movie);

    if(result == "Movie already in program"){
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    }
    var li = document.querySelector(`li[data-programIndex = '${programIndex}']`);
    var programInfo = program.getData();
    li.textContent = programInfo;

    if(result == 'More then 8h of movies or more than 4 of same genre'){
        var text = document.createTextNode(result);
        var errorDiv = document.querySelector("#errorText");
        errorDiv.appendChild(text);
    }

    var li = document.querySelector(`li[data-programIndex = '${programIndex}']`);
    var programInfo = program.getData();
    li.textContent = programInfo;
   
    movieSelect.value = "-";
    programSelect.value = "-";
};

// TODO update program data, messages