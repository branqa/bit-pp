
function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    // this.getData = function () {
    //     return this.title + ', ' + this.length + ', ' + genre.getData();
    // }
}

Movie.prototype.getData = function () {
    this.getData = function () {
        return this.title + ', ' + this.length + ', ' + this.genre.getData();
    }
}

module.exports = {Movie}