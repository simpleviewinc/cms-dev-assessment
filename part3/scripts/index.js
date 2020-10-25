let currentPage = 1;
const maxPages = 4;
let dataToDisplay = [];

$(document).ready(function() {

    $("#container2").hide();
    $("#container3").hide();
    $("#container4").hide();

    let listingsURL = "https://sv-reqres.now.sh/api/listings?page=1";
    
    // send request for listings data from API
    $.ajax({
        url: listingsURL,
        method: "GET"
    }).then(function(response) {
        
        console.log(response);
        dataToDisplay = dataToDisplay.concat(response.data);
        
        listingsURL = "https://sv-reqres.now.sh/api/listings?page=2";
        $.ajax({
            url: listingsURL,
            method: "GET"
        }).then(function(p2res) {

            console.log(p2res.data);
            dataToDisplay = dataToDisplay.concat(p2res.data);

            listingsURL = "https://sv-reqres.now.sh/api/listings?page=3";
            $.ajax({
                url: listingsURL,
                method: "GET"
            }).then(function(p3res) {
                console.log(p3res.data);
                dataToDisplay = dataToDisplay.concat(p3res.data);

                setDisplay(dataToDisplay);
            });
        });
    });


    // the button onclick events
    $("#prevBtn").click(function(){
        let currentPageStr = `#container${currentPage}`;
        $(currentPageStr).hide();
        currentPage--;

        if(currentPage === 0) {
            currentPage = maxPages;
        }

        currentPageStr = `#container${currentPage}`;
        $(currentPageStr).show();
    });

    $("#nextBtn").click(function(){
        let currentPageStr = `#container${currentPage}`;
        $(currentPageStr).hide();
        currentPage++;
        
        if(currentPage > maxPages) {
            currentPage = 1;
        }

        currentPageStr = `#container${currentPage}`;
        $(currentPageStr).show();
    });

});

function setDisplay(listingData) {

    // iterate through listingData and assign content to all the cards
    for(let i = 1; i <= listingData.length; i++) {
        let title = listingData[i-1].title;
        let description = listingData[i-1].description;
        let imgURL = listingData[i-1].mediaurl;
        let titleIdString = `#cardTitle${i}`;
        let imgIdString = `#img${i}`;
        let textIdString = `#cardText${i}`;
        $(titleIdString).text(title);
        $(textIdString).text(description);
        $(imgIdString).attr("src", imgURL);
        $(imgIdString).attr("onerror", "imgError(this)");
    }

}

// displays the backup image for broken images that do not load
function imgError(image) {
    console.log("fallback image loaded");
    console.log(image);
    image.onerror = "";
    image.src = "./images/fallback.jpg";
    return true;
}