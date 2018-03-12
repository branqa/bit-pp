function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    // this.addMovie = function (movie) {
    //     this.listOfMovies.push(movie);
    //     this.totalNumOfMovies++;
    // }
    // this.getData = function () {
    //     var lengthOfAll = 0;
    //     var dataAboutMovies = '';
    //     for (var i = 0; i < this.listOfMovies.length; i++) {
    //         lengthOfAll += parseInt(this.listOfMovies[i].length);
    //         dataAboutMovies += this.listOfMovies[i].getData() + '\n';
    //     }


    //     return this.date + ', program duration ' + lengthOfAll + '\n' + dataAboutMovies;

    // }

}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNumOfMovies++;
}

Program.prototype.getData = function () {
    var lengthOfAll = 0;
    var dataAboutMovies = '';
    for (var i = 0; i < this.listOfMovies.length; i++) {
        lengthOfAll += parseInt(this.listOfMovies[i].length);
        dataAboutMovies += this.listOfMovies[i].getData() + '\n';
    }
    


    return this.date + ', program duration ' + lengthOfAll + '\n' + dataAboutMovies;

}

module.exports = {Program}