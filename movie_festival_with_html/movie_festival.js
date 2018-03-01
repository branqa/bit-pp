var allMovies = [];
var listOfPrograms = [];


// funkcionalnost interfejsa
// add movie funkcionalnost

document.querySelector("#button-movie").addEventListener("click", createMovie);
// 1) procitati unete podatke

function createMovie() {
  var movieTitleItem = document.querySelector(".movie-title");
  var movieTitle = movieTitleItem.value;
  var movieLengthItem = document.querySelector(".movie-length");
  var movieLength = movieLengthItem.value;
  var movieSelect = document.querySelector(".genre-list");
  var movieGenreIndex = movieSelect.selectedIndex;
  var movieGenre = movieSelect.options[movieGenreIndex].value;

  // console.log(movieTitle, movieLength, movieGenre);

  //2) validacija podataka

  var errorMessage = document.querySelector(".movie-error");

  var error = {
    OK: "OK",
    INSERT_TITLE: "Please insert the title",
    INSERT_LENGTH: "Please check the movie length",
    INSERT_GENRE: "Please select the movie genre"
  };

  function validation(movieTitle, movieLength, movieGenre) {
    // movieLength = parseInt(movieLength);
    if (movieTitle == "") {
      return error.INSERT_TITLE;
    } else if (isNaN(movieLength) || movieLength <= 0) {
      return error.INSERT_LENGTH;
    } else if (movieGenre == "-") {
      return error.INSERT_GENRE;
    }

    return error.OK;
  }

  var printMessage;
  var validationMessage = validation(movieTitle, movieLength, movieGenre);

  if (validationMessage == error.INSERT_TITLE) {
    document.querySelector(".movie-error").innerHTML = "";
    printMessage = document.createTextNode(error.INSERT_TITLE);
  } else if (validationMessage == error.INSERT_LENGTH) {
    document.querySelector(".movie-error").innerHTML = "";
    printMessage = document.createTextNode(error.INSERT_LENGTH);
  } else if (validationMessage == error.INSERT_GENRE) {
    document.querySelector(".movie-error").innerHTML = "";
    printMessage = document.createTextNode(error.INSERT_GENRE);
  }

  if (validationMessage == error.OK) {
    // 3) ako je sve u redu potrebno je napraviti film
    var movie = new Movie(movieTitle, movieLength, movieGenre);

    // 5) prikazati taj u listi filmova
    allMovies.push(movie);
    movieTitleItem.value = "";
    movieLengthItem.value = "";
    movieSelect.value = "-";
    printMessage = document.createTextNode(error.OK);

    var showMovieList = document.querySelector("#movie-ul");

    var newLi = document.createElement("li");
    var newMovie = document.createTextNode(movie.getData());
    newLi.appendChild(newMovie);
    showMovieList.appendChild(newLi);

    // 6) azuriramo duzinu filmova
    var lengthOfAllMovie = 0;
    for (var i = 0; i < allMovies.length; i++) {
      lengthOfAllMovie =
        parseInt(lengthOfAllMovie) + parseInt(allMovies[i].movieLength);
    }

    document.querySelector(".movie-error").innerHTML = "";
    var allLength = document.querySelector(".all");
    allLength.textContent = lengthOfAllMovie;
  }

  errorMessage.appendChild(printMessage);
}

document
  .querySelector("#button-program")
  .addEventListener("click", createProgram);

function createProgram() {
  document.querySelector(".program-list").innerHTML = "";
  var dateItem = document.querySelector(".date");
  var date = dateItem.value;
  var program = new Program(date);
  var numberOfMovies = allMovies.length;
    if (numberOfMovies != 0){
  listOfPrograms.push(program);
  console.log(listOfPrograms);
 
  var programSelect = document.querySelector(".list-of-programs");
  var newOption1 = document.createElement("option");
  for (var i = 0; i < listOfPrograms.length; i++) {
    var newProgram = document.createTextNode(listOfPrograms[i].getData());
     var movieSelect = document.querySelector(".list-of-movies");
     var newOption = document.createElement("option");
     for (var i = 0; i < program.listOfMovies.length; i++) {
       var newMovie = document.createTextNode(program.listOfMovies[i].getData());
     }
     newOption.appendChild(newMovie);
     movieSelect.appendChild(newOption);
     
  }
  newOption1.appendChild(newProgram);
  programSelect.appendChild(newOption1);
    
    
  dateItem.value = "";
  var showProgramList = document.querySelector(".program-list");

  var newProgram = document.createTextNode(program.getData());
  showProgramList.appendChild(newProgram);

  document.querySelector("#movie-ul").innerHTML = "";
  allMovies.splice(0, allMovies.length);
}
   else {
        document.querySelector(".program-list").innerHTML = "Need movies";
         dateItem.value = "";
  }
}
