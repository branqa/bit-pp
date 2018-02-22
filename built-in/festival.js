
(function () {
    console.log('Hi');

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name.charAt(0).toUpperCase();
            var lastLetter = this.name.charAt(this.name.length - 1).toUpperCase();
            return firstLetter + lastLetter;
        }

    }
    var genre = new Genre('action');
    var genre1 = new Genre('comedy');
    var genre2 = new Genre('drama');
    // console.log(genre1.getData());


    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.getData = function () {
            return this.title + ', ' + this.length + ', ' + genre.getData();
        }
    }

    var movie1 = new Movie('Hobbit', '240min', genre1);
    var movie2 = new Movie('Lucy', '130 min', genre);
    //console.log(movie1.getData());
   

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumOfMovies = 0;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumOfMovies++;
        }
        this.getData = function () {
            var lengthOfAll = 0;
            var dataAboutMovies = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                lengthOfAll += parseInt(this.listOfMovies[i].length);
                dataAboutMovies += this.listOfMovies[i].getData() + '\n';
            }


            return this.date + ', program duration ' + lengthOfAll + '\n' + dataAboutMovies;

        }

    }
    var program1 = new Program(new Date(2018, 05, 06));
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    //  console.log(program1.getData());


    function Festival(nameOfFest) {
        this.nameOfFest = nameOfFest;
        this.listOfProg = [];
        this.numAllPr = 0;
        this.addProgram = function (program) {
            this.listOfProg.push(program);
            this.numAllPr++;
        }
        this.getData = function () {
            var numOfAllMovies = 0;
            var allPrListed = '';

            for (var i = 0; i < this.listOfProg.length; i++) {
                numOfAllMovies += this.listOfProg[i].totalNumOfMovies;
                allPrListed += this.listOfProg[i].getData() + '\n';

            }

            return this.nameOfFest + ' has ' + numOfAllMovies + ' movie titles \n' + allPrListed;
        }


    }

    var festival1 = new Festival('Cannes fest');
    festival1.addProgram(program1);
    // console.log(festival1.getData());

    var createMovie = function(title, length, genre) {
        var genre1 = new Genre(genre);
        var newMovie =new Movie (title, length, genre1) ;
        return newMovie;
    }

    var IT = createMovie('IT', '220 min', 'action');
    console.log(IT.getData());




})()


