$(document).ready(function() {

    // Color active button
    var header = document.getElementById("buttons-div");
    var btns = header.getElementsByClassName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    // Display all on page load
    displayListings();
    displayEvents();
    displayOffers();
    
    // Display all when 'All' clicked
    $("#display-all").on("click", function(event) {
        event.preventDefault();
        $('.grid-container').empty();
        displayListings();
        displayEvents();
        displayOffers();
    });

    // Display listings only when 'Listings' clicked
    $("#display-listings").on("click", function(event) {
        event.preventDefault();
        $('.grid-container').empty();
        displayListings();
    });

    // Display events only when 'Events' clicked
    $("#display-events").on("click", function(event) {
        event.preventDefault();
        $('.grid-container').empty();
        displayEvents();
    });

    // Display offers only when 'Offers' clicked
    $("#display-offers").on("click", function(event) {
        event.preventDefault();
        $('.grid-container').empty();
        displayOffers();
    });

    function displayListings() {

        var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=20"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Loop through listings
            for (var i = 0; i<response.data.length; i++) {

                // Create div to hold listings
                var displayDiv = $('<div class="item">');

                // Use image, title and description for each listing
                var image = response.data[i].mediaurl;
                var title = response.data[i].title;
                var description = response.data[i].description;

                // Use fallback image if none rendered
                var fallback = "'../comps/fallback.jpg'";

                // Append listings to div
                displayDiv.append(
                    '<div class="image-container">' +
                        '<img class="cover" src="' + image + '" onerror="this.src=' + fallback + '"/>' +
                    '</div>' +
                    '<div>' +
                        '<h3>' + title + '</h3>' +
                        '<p class="text">' + description + '</p>' +
                    '</div>' 
                );

                // Display listings div on page
                $('.grid-container').append(displayDiv);
            }

        });
    }

    function displayEvents() {

        var queryURL = "https://sv-reqres.now.sh/api/events/?per_page=20"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Loop through events
            for (var i = 0; i<response.data.length; i++) {

                // Create div to hold events
                var displayDiv = $('<div class="item">');

                // Use image, title and description for each event
                var image = response.data[i].mediaurl;
                var title = response.data[i].title;
                var description = response.data[i].description;

                // Use fallback image if none rendered
                var fallback = "'../comps/fallback.jpg'";

                // Append events to div
                displayDiv.append(
                    '<div class="image-container">' +
                        '<img class="cover" src="' + image + '" onerror="this.src=' + fallback + '"/>' +
                    '</div>' +
                    '<div>' +
                        '<h3>' + title + '</h3>' +
                        '<p class="text">' + description + '</p>' +
                    '</div>'
                );

                // Display events div on page
                $('.grid-container').append(displayDiv);
            }

        });
    }

    function displayOffers() {

        var queryURL = "https://sv-reqres.now.sh/api/offers/?per_page=20"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Loop through offers
            for (var i = 0; i<response.data.length; i++) {

                // Create div to hold offers
                var displayDiv = $('<div class="item">');

                // Use image, title and description for each offer
                var image = response.data[i].mediaurl;
                var title = response.data[i].title;
                var description = response.data[i].description;

                // Use fallback image if none rendered
                var fallback = "'../comps/fallback.jpg'";

                // Append offers to div
                displayDiv.append(
                    '<div class="image-container">' +
                        '<img class="cover" src="' + image + '" onerror="this.src=' + fallback + '"/>' +
                    '</div>' +
                    '<div>' +
                        '<h3>' + title + '</h3>' +
                        '<p class="text">' + description + '</p>' +
                    '</div>'
                );

                // Display offers div on page
                $('.grid-container').append(displayDiv);
            }

        });
    }

});