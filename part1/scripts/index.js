$(document).ready(function() {

        let listingsURL = "https://sv-reqres.now.sh/api/listings?page=1";
        
        // send request for listings data from API
        $.ajax({
            url: listingsURL,
            method: "GET"
        }).then(function(response) {
            
            // display response
            setDisplay(response);
        });

});

function setDisplay(data) {
    console.log(data);
    let listingData = data.data;
    console.log(listingData);

    for(let i = 1; i <= listingData.length; i++) {
        let title = listingData[i-1].title;
        let description = listingData[i-1].description;
        let imgURL = listingData[i-1].mediaurl;
        let titleIdString = `#cardTitle${i}`;
        let imgIdString = `#cardImg${i}`;
        let textIdString = `#cardText${i}`;
        $(titleIdString).text(title);
        $(textIdString).text(description);
        $(imgIdString).attr("src", imgURL);
        $(imgIdString).attr("onerror", "imgError(this)");
    }

    // workaround for last div
    $("#cardTitle6a").text(listingData[listingData.length-1].title);
    $("#cardText6a").text(listingData[listingData.length-1].description);
}

// displays the backup image for broken images that do not load
function imgError(image) {
    console.log("fallback image loaded");
    console.log(image);
    image.onerror = "";
    image.src = "./images/fallback.jpg";
    return true;
}