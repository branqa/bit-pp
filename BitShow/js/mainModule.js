const mainModule = (function (dataModule, UIModule) {

    function init() {
        var request = $.ajax({
            url: `http://api.tvmaze.com/shows`,
            method: "GET"
        });
        request.done(function (msg) {
            let tvShow = new dataModule.TvShows();
            for (let i = 0; i < 50; i++) {

                var show = new dataModule.Show(msg[i].id, msg[i].name, msg[i].image.medium, msg[i].summary);
                tvShow.addShow(show);
            }
            // console.log(tvShow.shows);
            UIModule.displayShows(tvShow.shows);


        });

        $('#search_box').keyup(function(event){
            var value =this.value;
            var request = $.ajax({
                url: `http://api.tvmaze.com/search/shows?q=${value}`,
                method: "GET"
            });
            request.done(function (msg) {
                msg.forEach(element => {
                    let movieName = element.show.name;
                    let id = element.show.id;
                    UIModule.makeSearchList(movieName, id);
                });
               
            })
            $('#search_box').change(function(event){
               var id =this.value;
               console.log(event);
            //    window.location.href = `showInfoPage.html#${id}`;
            })
        })
    }



    function infoPage() {
        var id = window.location.hash.slice(1);
        var request = $.ajax({
            url: `http://api.tvmaze.com/shows/${id}`,
            method: "GET",
            data: {
                embed: ['seasons', 'cast']
            }
        });

        request.done(function (msg) {
            let show = new dataModule.Show(msg.id, msg.name, msg.image.original, msg.summary);

            for (let i = 0; i < msg._embedded.seasons.length; i++) {
                let seasonInfo = new dataModule.Season(msg._embedded.seasons[i].premiereDate, msg._embedded.seasons[i].endDate);
                show.addSeason(seasonInfo);
            }
            
            for (let i = 0; i < msg._embedded.cast.length; i++) {
                let castInfo = new dataModule.Cast(msg._embedded.cast[i].person.name);
                show.addCast(castInfo);
            }
            // console.log(show);
            UIModule.displayShow(show);

        })

    }


    return {
        init: init,
        infoPage: infoPage
    }


})(dataModule, UIModule);