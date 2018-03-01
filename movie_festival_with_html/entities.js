
// objekat koji moze da predstavlja film

function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;

}

Movie.prototype.getData = function () {
    var firstLetter = this.movieTitle.charAt(0).toUpperCase();
    var lastLetter = this.movieTitle.charAt(this.movieTitle - 1).toUpperCase();
    return firstLetter + lastLetter + ', ' + this.movieLength + ', ' + this.movieGenre;
}