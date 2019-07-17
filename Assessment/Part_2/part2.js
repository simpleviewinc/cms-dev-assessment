var queryURLListings = "https://sv-reqres.now.sh/api/listings/?per_page=7";
var queryURLEvents = "https://sv-reqres.now.sh/api/events/?per_page=7";
var queryURLOffers = "https://sv-reqres.now.sh/api/offers/?per_page=7";
var allData = [];
var allDataFilled = false;
var pageState = "all";



/* function so we can check to see if an image is broken and if so fallback to provided image url
 * solution fully explained in this stack overflow post:
 * https://stackoverflow.com/questions/980855/
 */

fixBrokenImages = function( url ){
    var img = document.getElementsByTagName('img');
    var i=0, l=img.length;
    for(;i<l;i++){
        var t = img[i];
        if(t.naturalWidth === 0){
            //this image is broken
            t.src = url;
        }
    }
}

// function to query our API and get data for the page

getData = function(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
    
            for (var i = 0; i < response.data.length; i++) {
                if (allData.length <= ((response.data.length * 3) - 1)) {
                    allData.push(response.data[i]);
                }
            }

            if (pageState === "all") {
                displayCards(allData);
            }

            else {
                displayCards(response.data);
            }
        });
    }


// function that will generate our cards for us on the page

displayCards = function(storageArray) {

    $(".wrapper").empty();

    console.log(storageArray.length);

        for (var j = 0; j < storageArray.length; j++) {

            var newCard = $("<div class='card'>");
                
            newCard.append("<img src='" + storageArray[j].mediaurl + "' alt='" + storageArray[j].title + "'>");
            newCard.append("<span class='title'>" + storageArray[j].title + "</span>");
            newCard.append("<div class='description'>" + storageArray[j].description + "</div>");
            newCard.append("<button class='readMore'>Read More</button>");

            $(".wrapper").append(newCard);

        }

    fixBrokenImages('assets/fallback.jpg')

    }
    
$( document ).ready(function () {

    getData(queryURLListings);
    getData(queryURLEvents);
    getData(queryURLOffers);

    $("button.all").focus();
});

$("#listings").click(function () {
    pageState = "listings";
    getData(queryURLListings)
})

$("#events").click(function () {
    pageState = "events";
    getData(queryURLEvents)
})

$("#offers").click(function () {
    pageState = "offers";
    getData(queryURLOffers)
})

$("#all").click(function () {
    displayCards(allData);
})

$(document).on("click", "button.readMore", function() {
    window.open("http://www.google.com");
})
    
    



