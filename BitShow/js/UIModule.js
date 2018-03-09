const UIModule = (function(){

    function displayShows(tvShows){
       
        tvShows.forEach(function (element) {
           
            var d = $('<div>');
            var picture = $('<img>');
            var link = $('<a>');
            $(picture).attr("src", element.image);
            $(link).attr('href', `showInfoPage.html/?${element.id}`);
            $(d).attr('class','col-4');
            $(picture).css('width', '100%');
            $(d).css('text-align', 'center');
            $(link).text(element.name);
            $(d).append(picture);
            $(d).append(link);
            console.log(link);
            $('.row').append(d);

        });
    }

    return {
        displayShows : displayShows
    }

})();