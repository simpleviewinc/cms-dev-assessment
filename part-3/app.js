$(document).ready(function(){
 // Define the variables.
  var results = [];
  var selection = '';

  // All button is selected.
  $(".button-bar").on("click", "#btnAll", function(event) {
    event.preventDefault();
    $("#main").empty();
    $('h1').text('');
    // jQuery's $.when() method, which takes a list of "Deferred" objects  
    // and then provides a single callback.
    $.when(
      // Get the Listings
      $.ajax({
        url: "https://sv-reqres.now.sh/api/listings",
        method: "GET"
      }),
      // Get the Events
      $.ajax({
        url: "https://sv-reqres.now.sh/api/events",
        method: "GET"
      }),
      // Get the Offers
      $.ajax({
        url: "https://sv-reqres.now.sh/api/offers",
        method: "GET"
      }),
    ).then(function(results1, results2, results3) {
      //
      // Put all the individual results into the single results array.
      results = results1[0].data.concat(results2[0].data, results3[0].data);
      selection = 'All Data';
      displayData( results, selection );
    })
  });

  // Listings button is selected.
  $(".button-bar").on("click", "#btnListings", function(event) {
    event.preventDefault();
    // Clear previous results
    $("#main").empty();
    $('h1').text('');
    //
    // Get the Listings
    $.ajax({
      url: "https://sv-reqres.now.sh/api/listings",
      method: "GET"
    })
    .then(function(results1) {
      //
      results = results1.data;
      selection = 'Listings';
      displayData( results, selection );
    })
  });

  // Events button is selected.
  $(".button-bar").on("click", "#btnEvents", function(event) {
    event.preventDefault();
    // Clear previous results
    $("#main").empty();
    $('h1').text('');
    // 
    // Get the Events
    $.ajax({
      url: "https://sv-reqres.now.sh/api/events",
      method: "GET"
    })
    .then(function(results1) {
      //
      results = results1.data;
      selection = 'Events';
      displayData( results, selection );
    })
  });

  // Offers button is selected.
  $(".button-bar").on("click", "#btnOffers", function(event) {
    event.preventDefault();
    // Clear previous results
    $("#main").empty();
    $('h1').text('');
    // 
    // Get the Offers
    $.ajax({
      url: "https://sv-reqres.now.sh/api/offers",
      method: "GET"
    })
    .then(function(results1) {
      //
      results = results1.data;
      selection = 'Offers';
      displayData( results, selection );
    })
  });

  //
  // This function displays the results of the api calls.
  function displayData( results, selection ){
    // Create a variable to store the resulting array of data.
    // and the listing image.
    const listingArray = results;
    var listingImage = null;
    $('h1').text(selection);
    for (var i = 0; i < results.length; i++){
      //
      // If the image retrieved from the API is null substitute the
      // fallback image. I added this in case the API doesn't have an image.
      // I also added a alternate on the img tag in case there is an image, but
      // it will not display.
      if( listingArray[i].mediaurl ) {
        listingImage = listingArray[i].mediaurl;
      }
      else {
        listingImage = '../comps/fallback.jpg';
      };
      // Dynamically create the  divs and other elements for the web page.
      const gridDiv = $('<div>').addClass('grid-item id=item'+[i+1] );
      const imgDiv = $('<img>').addClass('item-img id=item-img-'+[i+1] )
                               .attr('src', listingImage);
      const textDiv = $('<div>').addClass('text');
      const title = $('<h3>').text(listingArray[i].title);
      const description = $('<p>').text(listingArray[i].description);
      //
      gridDiv.append(imgDiv);
      gridDiv.append(textDiv);
      gridDiv.append(title);
      gridDiv.append(description);
      $('#main').append(gridDiv);
      //
      // This function will load a fallback image if there is an error loading
      // the image selected from the API.
      $("img").on("error", function(){
        $(this).attr( "src", '../comps/fallback.jpg' );
      });
      //
      listingImage = null;
    }
  };

});
