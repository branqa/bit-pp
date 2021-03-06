class CreateMovie {

    constructor(name, length, genre){
    this.movieName = name;
    this.movieLength = length;
    this.movieGenre = genre;
    this.movieId = ((() => {
        const number = Math.floor(89999 * Math.random() +10000);
        return number;
    })) ();
}

getData() {
    const ge = this.movieGenre.charAt(0).toUpperCase() + this.movieGenre.charAt(this.movieGenre.length - 1).toUpperCase();
    const movieData = `${this.movieName}, ${this.movieLength}min, ${ge}`;
    return movieData;
}
}


class Program{

    constructor(date) {
    this.date = date,
    this.listOfMovie = [],
    this.programId = ((() => {
        const number = Math.floor(89999 * Math.random() +10000);
        return number;
    })) ();
};


totalNumberOfMovies() {
    return this.listOfMovie.length
};


getData() {
    const date = this.date;
    let programLength = 0;
    const numberOfMovie = this.listOfMovie.length;
    // if(this.listOfMovie.length == 0) {
    // aboutMovies = 'Program to be announced';
    // }
    this.listOfMovie.forEach(element => {
        programLength += parseInt(element.movieLength);
    });
    
    return `${date}, ${numberOfMovie} movies , duration: ${programLength} min `;
};


addMovie(movie) {
    let counter = 0;
    let totalLength = 0;
    for ( let i = 0; i < this.listOfMovie.length; i++) {
        if(movie.movieName == this.listOfMovie[i].movieName ) {
            return "Movie already in program"; 
        } 
        totalLength += parseInt(this.listOfMovie[i].movieLength) ;
        if (movie.genre == this.listOfMovie[i].genre) {
            counter++;
        }    
    }
    if (counter < 4 && totalLength < (10 * 60)) {
        this.listOfMovie.push(movie);
    } else {
        return 'More then 8h of movies or more than 4 of same genre'
    }
};

}