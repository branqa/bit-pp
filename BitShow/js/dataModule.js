const dataModule = (function (){

    class Season {
        constructor(startDate, endDate){
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }

    class Cast {
        constructor(name){
            this.name = name;
        }
    }

    class Show {
        constructor(id, name, image, summary){
            this.id = id;
            this.name = name;
            this.image = image;
            this.summary = summary;
            this.seasons = [];
            this.casts = [];
        }
        addSeason(season){
            this.seasons.push(season);
        }

        addCast(cast){
            this.cast.push(cast);
        }
    }

    class TvShows {
        constructor(){
            this.limit = 50;
            this.shows = [];
        }
        addShow(show){
            this.shows.push(show);
        }
    }
    
    return {
        Season : Season,
        Cast : Cast,
        Show : Show,
        TvShows : TvShows
    }
    




}) ();
