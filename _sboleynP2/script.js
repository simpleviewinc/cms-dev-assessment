var queryUrlListings = "https://sv-reqres.now.sh/api/listings/";
var queryUrlEvents = "https://sv-reqres.now.sh/api/events/";
var queryUrlOffers = "https://sv-reqres.now.sh/api/offers/";

$(document).ready(function () {

  console.log("script.js is running");

  var placeHold = 'https://via.placeholder.com/500x500';

  var handleButton = function (queryURL) {

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(answer => {
      var datum = answer.data;

      for (var i = 0; i < 6; i++) {
        var _event = datum[i]
        $(".img" + i).css("background-image", "url(" + _event.mediaurl + ")");
        $(".img" + i).css("background-size", "cover")
        // console.log(_event.mediaurl)
        $(".fillHeader_" + i).text(_event.title);
        $(".fillText_" + i).text(_event.description);
      };
    });
  };

  $("#listButton").click(event => {
    // show all listing items
    handleButton(queryUrlListings);
  });

  $("#eventButton").click(event => {
    // show all listing items
    handleButton(queryUrlEvents);
  });

  $("#offersButton").click(event => {
    // show all listing items
    handleButton(queryUrlOffers);
  });
});