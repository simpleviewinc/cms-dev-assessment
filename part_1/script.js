// AUTHOR: Nicolas Blanchard
// Simpleview CMS Assessment (part 1)
// 5/5/21-5/7/21
// nickyblanch@email.arizona.edu



function display_listings() {
    // This function requests the API for the object containing the data.
    // It then displays the retrieved data on an HTML page.
    // It has no input parameters and no return values.


    $(document).ready(function () {
        $.get("https://sv-reqres.vercel.app/api/listings", function (data, status) {

            // Display the data once it is retrieved
            // Create a new HTML Div element for each item in the information array
            var i;
            for (i = 0; i < data.data.length; i++) {

                // This is the string of HTML elements that is added to the page. It is long and cumbersome - perhaps there is a way I can separate it into multiple lines to increase readability?
                var t = $("<div class = 'item' id='item'><img src ='" + data.data[i].mediaurl + "' class='img' id='img' onerror=\"this.src = 'fallback.jpg';\"><div class='button' id='button'>Read More</div></img>" + "</br><p class = 'title'>" + data.data[i].title + "</p></br><p class = 'description'>" + data.data[i].description + "</p></div>");
                $('#node').append(t);
            }
        });
    });
}



function remove_elements() {
    // Clear the previous elements
    $(document).ready(function () {
        $(".item").remove();
    });
}