$(document).ready(function() {

    function displayListings() {

        var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=20"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            // Loop through listings
            for (var i = 0; i<response.data.length; i++) {

                // Create div to hold listings
                var listingDiv = $('<div class="item">');

                // Use title and description for each listing
                var title = response.data[i].title;
                var description = response.data[i].description;

                // Append listings to div
                listingDiv.append(
                    '<div class="image-container">' +
                        '<img class="cover" src="../comps/fallback.jpg"></a>' +
                    '</div>' +
                    '<div>' +
                        '<h3>' + title + '</h3>' +
                        '<p class="text">' + description + '</p>' +
                    '</div>'
                );

                // Display listings div on page
                $('.grid-container').append(listingDiv);
            }

        });
    }

    displayListings();

});