const UIModule = (function() {
  function displayShows(tvShows) {
    tvShows.forEach(function(element) {
      var d = $("<div>");
      var picture = $("<img>");
      var link = $("<a>");
      $(link).attr("class", "one-movie");
      $(link).attr("href", `showInfoPage.html#${element.id}`);
      $(picture).attr("src", element.image);
      $(d).attr("class", "col-4");
      $(picture).css("width", "100%");
      $(d).css("text-align", "center");
      $(link).append(picture);
      $(link).append(element.name);
      $(d).append(link);
      $(".row").append(d);
    });
  }

  function displayShow(show) {
    var d1 = $("<div>");
    $(d1).attr("class", "row");
    var title = $("<h1>");
    var picture1 = $("<img>");
    var pictureDiv = $("<div>");
    $(pictureDiv).attr("class", "col-8");
    $(pictureDiv).append(picture1);
    var infoDiv = $("<div>");
    $(infoDiv).attr("class", "col-4");

    var details = $("<p>");
    $(title).text(show.name);
    $(picture1).attr("src", show.image);
    $(picture1).css("width", "100%");
    $(details).html(show.summary);
    $("#info").append(title);
    $(d1).append(pictureDiv);

    $("#info").append(d1);
    var seasonTitle = $("<h3>");
    $(infoDiv).append(seasonTitle);
    var count = 0;
    var uList = $("<ul>");
    show.seasons.forEach(function(element) {
      var list = $("<li>");
      $(list).text(`${element.premiereDate} - ${element.endDate}`);
      count++;

      $(uList).append(list);
      $(infoDiv).append(uList);
    });
    seasonTitle.text(`Seasons (${count})`);
    var castTitle = $("<h3>");
    castTitle.text("Cast");
    $(infoDiv).append(castTitle);

    var castList = $("<ul>");
    show.casts.forEach(function(element) {
      var cList = $("<li>");
      $(cList).text(element.name);
      $(castList).append(cList);
      $(infoDiv).append(castList);
    });

    $(d1).append(infoDiv);
    $(d1).append(details);
  }
  function makeSearchList(movieName, id) {
    let searchList = $('#search-list');
    var optionList = $(`<option class = "optionStyle">${name}</option>`);
    optionList.attr('value', movieName);
    optionList.attr('data-id', id);
    $("#search-list").append(optionList);
  }

  return {
    displayShows: displayShows,
    displayShow: displayShow,
    makeSearchList: makeSearchList
  };
})();
