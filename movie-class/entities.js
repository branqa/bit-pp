// objekat koji moze da predstavlja film

function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
    this.movieId = Math.floor(89999*Math.random()+10000);

}

Movie.prototype.getData = function () {
    var firstLetter = this.movieGenre.charAt(0).toUpperCase();
    var lastLetter = this.movieGenre.charAt(this.movieGenre.length - 1).toUpperCase();
    return this.movieTitle + ', ' + this.movieLength + ', ' + firstLetter + lastLetter;
}

function Program(date) {
    this.date = date;
    this.listOfMovies =[];
    this.programId = Math.floor(89999*Math.random()+10000);
}



Program.prototype.getData = function() {
    var totalLengthOfMovies =0;
    var totalNumbOfMovies = this.listOfMovies.length;

    if (totalNumbOfMovies == 0){
        return this.date + ' ,program to be anounced';
    }
    else {
    for (var i=0;i<this.listOfMovies.length;i++){
        totalLengthOfMovies+=parseInt(this.listOfMovies[i].movieLength);
    }

    return this.date + ', ' + totalNumbOfMovies + ' movies, duration: ' + totalLengthOfMovies;
}
}


Program.prototype.addMovie = function(movie){
    listOfMovies = this.listOfMovies.push(movie);
}




