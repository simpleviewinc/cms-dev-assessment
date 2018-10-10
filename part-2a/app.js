$(document).ready(function(){
    //
    // Ajax query to fetch the listing data.
    // Get the Query URL for the API.
    var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=20";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done( results => {
        //
        // Create a variable to store the resulting array of data.
        // and the listing image.
        const listingArray = results.data;
        var listingImage = null;
        for (var i = 0; i < results.data.length; i++){
            //
            // If the image retrieved from the API is null substitute the
            // fallback image. I added this in case the API doesn't have an image.
            // I also added a alternate on the img tag in case there is an image, but
            // it will not display.
            listingImage = listingArray[i].mediaurl;
            if( listingArray[i].mediaurl ) {
                listingImage = listingArray[i].mediaurl;
            }
            else {
                listingImage = '../comps/fallback.jpg';
            };
            // Dynamically create the  divs and other elements for the web page.
            const gridDiv = $('<div>').addClass('grid-item id=item'+[i+1] );
            const imgDiv = $('<img>').addClass('image id=item-img-'+[i+1] )
                                    .attr('src', listingImage);
            const textDiv = $('<div>').addClass('text');
            const title = $('<h3>').text(listingArray[i].title).appendTo(textDiv);
            const description = $('<p>').text(listingArray[i].description)
                                        .attr('id', 'text' + (i+1)).appendTo(textDiv);
            //
            gridDiv.append(imgDiv);  
            gridDiv.append(textDiv);    
            $('#main').append(gridDiv);
            //
            // This function will load a fallback image if there is an error loading
            // the image selected from the API.
            $("img").on("error", function(){
                $(this).attr( "src", '../comps/fallback.jpg' );
            });
            //
            listingImage = null;
      };
    });

});
