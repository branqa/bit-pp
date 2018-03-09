const MainModule = (function (dataModule, UIModule) {
    $(function () {
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
            console.log(tvShow.shows);
            UIModule.displayShows(tvShow.shows);
            // console.log()
        });
    })



})(dataModule, UIModule);