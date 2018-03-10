const UIModule = (function () {

    function displayShows(tvShows) {

        tvShows.forEach(function (element) {

            var d = $('<div>');
            var picture = $('<img>');
            var link = $('<a>');
            $(picture).attr("src", element.image);
            $(link).attr('href', `showInfoPage.html#${element.id}`);
            $(d).attr('class', 'col-4');
            $(picture).css('width', '100%');
            $(d).css('text-align', 'center');
            $(link).text(element.name);
            $(d).append(picture);
            $(d).append(link);
            // console.log(link);
            $('.row').append(d);

        });
    }

    function displayShow(show) {

        var d1 = $('<div>');
        var title = $('<h1>');
        var picture1 = $('<img>');
        var details = $('<p>');
        $(title).text(show.name);
        $(picture1).attr('src', show.image);
        $(details).html(show.summary);
        $(d1).append(title);
        $(d1).append(picture1);
        $(d1).append(details);
        $('#info').append(d1);

        show.seasons.forEach(function (element) {
            var uList = $('<ul>');
            var list = $('<li>');
            $(list).text(`${element.premiereDate} - ${element.endDate}`);
            $(uList).append(list);
            $(d1).append(uList);

        })

        show.casts.forEach(function(element){
            var castList = $('<ul>');
            var cList = $('<li>');
            $(cList).text(element.name);
            $(castList).append(cList);
            $(d1).append(castList);
        })
       

    }
    function makeSearchList(movieName,id){
        var optionList =$('<option>');
        $(optionList).text(movieName);
        $('#search-list').append(optionList);
    }

    return {
        displayShows: displayShows,
        displayShow: displayShow,
        makeSearchList: makeSearchList
    }



})();