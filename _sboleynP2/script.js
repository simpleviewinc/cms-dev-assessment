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
      $(".container").empty();

      for (var i = 0; i < 6; i++) {
        var div1 = $("<div class='containerItem'>");
        var sec = $("<section>");
        div1.append(sec);
        var div2 = $("<div class='defaultImg'>");
        sec.append(div2);
        var div3 = $("<div class='containerImg img" + i + "'>")
        div2.append(div3);
        var div4 = $("<div class='text'>");
        sec.append(div4);
        var div5 = $("<div class='shadow'>");
        div4.append(div5);
        var header4 = $("<h4 class='fillHeader_" + i + "'>");
        div4.append(header4);
        var textP = $("<p class='fillText_" + i + "'>")
        div4.append(textP);
        $(".container").append(div1);
      }

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

        $(".fillHeader_" + i).text(_event.title);
        $(".fillText_" + i).text(_event.description);
      };
      console.log(allData);
    });
  };

  var handleAll = function () {
    $(".container").empty();

    console.log(allData);

    allData = allData.sort(
      function compare(a,b) {
        if (a.title < b.title)
          return -1;
        if (a.title> b.title)
          return 1;
        return 0;
      }
    );
    
    allData.forEach(item => {
      console.log(item.title);
      var itsy = allData.indexOf(item);
      var div1 = $("<div class='containerItem'>");
      var sec = $("<section>");
      div1.append(sec);
      var div2 = $("<div class='defaultImg'>");
      sec.append(div2);
      var div3 = $("<div class='containerImg img" + itsy + "'>")
      div2.append(div3);
      var div4 = $("<div class='text'>");
      sec.append(div4);
      var div5 = $("<div class='shadow'>");
      div4.append(div5);
      var header4 = $("<h4 class='fillHeader_" + itsy + "'>");
      div4.append(header4);
      var textP = $("<p class='fillText_" + itsy + "'>")
      div4.append(textP);
      $(".container").append(div1);
    })

    allData.forEach(item => {
      var itsy = allData.indexOf(item);
      console.log(itsy);
      $(".img" + itsy).css("background-image", "url(" + item.url + ")");
      $(".img" + itsy).css("background-size", "cover")

      // console.log(_event.mediaurl)
      $(".fillHeader_" + itsy).text(item.title);
      $(".fillText_" + itsy).text(item.desc);
    })
  }

  function load() {
    handleButton(queryUrlListings);
    handleButton(queryUrlEvents);
    handleButton(queryUrlOffers);
  }

  // This part of the code would work to expand each section on hover so the end user can see more info
  // $("body").on("mouseenter", ".containerItem", function () {
  //   $(this).parent().css('grid-auto-rows', 'minmax(100px, auto)')
  //   console.log($(this).parent())})

  // $("body").on("mouseleave", ".containerItem", function () {
  //   // this.last().remove();
  //   $(this).parent().css('grid-auto-rows', 'calc(50vh - 30px)')
  // })


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

  load();
});

