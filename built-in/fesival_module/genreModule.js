function Genre(name) {
    this.name = name;
    // this.getData = function () {
    //     var firstLetter = this.name.charAt(0).toUpperCase();
    //     var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
    //     return firstLetter + lastLetter;
    // }

}

Genre.prototype.getData = function () {
    var firstLetter = this.name.charAt(0).toUpperCase();
    var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
    return firstLetter + lastLetter;
}
var genre = new Genre('action');
var genre1 = new Genre('comedy');
var genre2 = new Genre('drama');

module.exports = {Genre}