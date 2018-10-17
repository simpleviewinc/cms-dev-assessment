var queryURL = "https://sv-reqres.now.sh/api/listings/";

$(document).ready(function() {
    
  // Here we use jQuery to select the header with "click-me" as its ID.
  // Notice that its #clickMe, click, and then the function
  // So $("id|class|element").on("action", function(){});
    console.log("script.js is running");
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(answer => {
      var placeHold = 'https://via.placeholder.com/500x500';
      var listings = answer.data;
      for (var i = 0; i<6; i++){
      var listing = answer.data[i]

      $(".img"+i).css("background-image", "url("+listing.mediaurl+")");
      $(".img"+i).css("background-size", "cover")
      
      console.log(listing.mediaurl)
      
      $(".fillHeader_"+i).text(listing.title);
      $(".fillText_"+i).text(listing.description);
      }
    });
  });