let listing_data = "";

$("#btn").on("click", function(e){
    e.preventDefault();
    listing_data = $('#Search').val().trim();
    $(".navbar").empty();

    getlistingdata();
    console.log(listing_data);
});

// AJAX
function getlistingdata(){
    const URL = 'https://sv-reqres.now.sh/'
};

// Get
$.ajax({
    url: url,
    type: "GET",
}).then((data) => {
    console.log(data)
});

// Grabbing Info
let hotelname = $("<h3>")
    .attr("class", "hotelname")
    .text("hotelname: " + data.title);

let description = $("<h3>")
    .attr("class", "description")
    .text("description:" + data.description);

// Append
$(".jumbotron").append(hotelname, description);

let secondURL = "https://sv-reqres.now.sh/api/listings"

$.ajax({
    method: "GET",
    url: secondURL,
}).then((response) => {
    console.log(response);
})