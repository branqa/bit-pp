
        console.log('Hi');

        


        

        
    


    function Festival(nameOfFest) {
        this.nameOfFest = nameOfFest;
        this.listOfProg = [];
        this.numAllPr = 0;
        // this.addProgram = function (program) {
        //     this.listOfProg.push(program);
        //     this.numAllPr++;
        // }
        // this.getData = function () {
        //     var numOfAllMovies = 0;
        //     var allPrListed = '';

        //     for (var i = 0; i < this.listOfProg.length; i++) {
        //         numOfAllMovies += this.listOfProg[i].totalNumOfMovies;
        //         allPrListed += this.listOfProg[i].getData() + '\n';

        //     }

        //     return this.nameOfFest + ' has ' + numOfAllMovies + ' movie titles \n' + allPrListed;
        // }


    }

    Festival.prototype.addProgram = function(program){
          this.listOfProg.push(program);
          this.numAllPr++;
    }

    Festival.prototype.getData = function () {
         var numOfAllMovies = 0;
         var allPrListed = '';

         for (var i = 0; i < this.listOfProg.length; i++) {
             numOfAllMovies += this.listOfProg[i].totalNumOfMovies;
             allPrListed += this.listOfProg[i].getData() + '\n';

         }

         return this.nameOfFest + ' has ' + numOfAllMovies + ' movie titles \n' + allPrListed;
         
    }

   

    

    module.exports =  {Festival}


