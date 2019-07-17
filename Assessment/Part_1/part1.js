var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=20";

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {


    for (var i = 0; i < response.data.length; i++) {
        var newCard = $("<div class='card'>");
            newCard.append("<img src='" + response.data[i].mediaurl + "' alt='" + response.data[i].title + "'>");
            newCard.append("<span class='title'>" + response.data[i].title + "</span>");
            newCard.append("<div class='description'>" + response.data[i].description + "</div>");


        $(".wrapper").append(newCard);

        fixBrokenImages('assets/fallback.jpg');

    };

});

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