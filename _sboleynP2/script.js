var queryUrlListings = "https://sv-reqres.now.sh/api/listings/";
var queryUrlEvents = "https://sv-reqres.now.sh/api/events/";
var queryUrlOffers = "https://sv-reqres.now.sh/api/offers/";

$(document).ready(function () {

  console.log("script.js is running");

  var placeHold = 'https://via.placeholder.com/500x500';
  var allData = []
  var handleButton = function (queryURL) {

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(answer => {
      var datum = answer.data;
      // var sixData = [];

      for (var i = 0; i < 6; i++) {
        var _event = datum[i]
        var eventObj = {
          title: _event.title,
          url: _event.mediaurl,
          desc: _event.description
        }
        allData.push(eventObj);
        $(".img" + i).css("background-image", "url(" + _event.mediaurl + ")");
        $(".img" + i).css("background-size", "cover")

        // console.log(_event.mediaurl)
        $(".fillHeader_" + i).text(_event.title);
        $(".fillText_" + i).text(_event.description);
      };
      console.log(allData);
      // return (sixData);
    });
  };
  var getListings = handleButton(queryUrlListings);
  var getEvents = handleButton(queryUrlEvents);
  var getOffers = handleButton(queryUrlOffers);

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

  $("#allButton").click(event => {
    // show all listing items
    handleAll();
  });

  var handleAll = function(){
    $(".container").empty(); 

    console.log(allData);

    allData.forEach(item => {
      console.log(item.title);
      var itsy = allData.indexOf(item);
      var div1 = $("<div class='containerItem'>");
      var sec = $("<section>");
      div1.append(sec);
      var div2 = $("<div class='defaultImg'>");
      sec.append(div2);
      var div3 = $("<div class='containerImg img"+itsy+"'>")
      div2.append(div3);
      var div4 = $("<div class='text'>");
      sec.append(div4);
      var div5 = $("<div class='shadow'>");
      div4.append(div5);
      var header4 = $("<h4 class='fillHeader_"+itsy+"'>");
      div4.append(header4);
      var textP = $("<p class='fillText_"+itsy+"'>")
      div4.append(textP);
      $(".container").append(div1);
    })
    
    allData.forEach(item =>{
      var itsy = allData.indexOf(item);
      console.log(itsy);
      $(".img" + itsy).css("background-image", "url(" + item.mediaurl + ")");
      $(".img" + itsy).css("background-size", "cover")

      // console.log(_event.mediaurl)
      $(".fillHeader_" + itsy).text(item.title);
      $(".fillText_" + itsy).text(item.description);
    })
  }

});

