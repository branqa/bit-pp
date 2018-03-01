// objekat koji moze da predstavlja film

function Movie(movieTitle, movieLength, movieGenre) {
  this.movieTitle = movieTitle;
  this.movieLength = movieLength;
  this.movieGenre = movieGenre;
}

Movie.prototype.getData = function() {
  var firstLetter = this.movieGenre.charAt(0).toUpperCase();
  var lastLetter = this.movieGenre
    .charAt(this.movieGenre.length - 1)
    .toUpperCase();
  return (
    this.movieTitle + ", " + this.movieLength + ", " + firstLetter + lastLetter
  );
};

function Program(date) {
  this.date = date;
  this.listOfMovies = allMovies;
}

Program.prototype.getData = function() {
  var lengthOfAll = 0;
  var dataAboutMovies = "";
  var numOfMovies = this.listOfMovies.length;
  for (var i = 0; i < this.listOfMovies.length; i++) {
      lengthOfAll += parseInt(this.listOfMovies[i].movieLength);
    
    return (
      this.date + ", " + numOfMovies + " movies, program duration " + lengthOfAll + "\n"
    );
  }
};
