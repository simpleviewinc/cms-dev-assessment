const MAX_CARDS = 15;
let dataToDisplay = [];

$(document).ready(function() {

        let listingsURL = "https://sv-reqres.now.sh/api/listings?page=1";
        let eventsURL = "https://sv-reqres.now.sh/api/events?page=1";
        let offersURL = "https://sv-reqres.now.sh/api/offers?page=1";

        // send request for listings data from API
        $.ajax({
            url: listingsURL,
            method: "GET"
        }).then(function(response) {
            // tag listings with type "listing"            
            let listingsData = response.data;
            listingsData.forEach(el => {
                el.type = "listing";
            })

            dataToDisplay = dataToDisplay.concat(listingsData);

            // send request for events data from API
            $.ajax({
                url: eventsURL,
                method: "GET"
            }).then(function(eventsResponse) {
                // tag events with type "event"            
                let eventsData = eventsResponse.data;
                eventsData.forEach(el => {
                    el.type = "event";
                })

                dataToDisplay = dataToDisplay.concat(eventsData);

                // send request for offers data from API
                $.ajax({
                    url: offersURL,
                    method: "GET"
                }).then(function(offersResponse) {

                    // tag offers with type "offer"            
                    let offersData = offersResponse.data;
                    offersData.forEach(el => {
                        el.type = "offer";
                    })

                    dataToDisplay = dataToDisplay.concat(offersData);

                    console.log(dataToDisplay);

                    // display response
                    setDisplay(dataToDisplay, "all");
                });
            });
        });


    // the button onclick events
    $("#allBtn").click(function(){
        setDisplay(dataToDisplay, "all");
        $(".toggleBtn").css('background-color','lightgrey');
        $(".toggleBtn").css('color','black');
        $(this).css('background-color','purple');
        $(this).css('color','white');
    });

    $("#listingsBtn").click(function(){
        setDisplay(dataToDisplay, "listing");
        $(".toggleBtn").css('background-color','lightgrey');
        $(".toggleBtn").css('color','black');
        $(this).css('background-color','purple');
        $(this).css('color','white');
    });

    $("#eventsBtn").click(function(){
        setDisplay(dataToDisplay, "event");
        $(".toggleBtn").css('background-color','lightgrey');
        $(".toggleBtn").css('color','black');
        $(this).css('background-color','purple');
        $(this).css('color','white');
    });

    $("#offersBtn").click(function(){
        setDisplay(dataToDisplay, "offer");
        $(".toggleBtn").css('background-color','lightgrey');
        $(".toggleBtn").css('color','black');
        $(this).css('background-color','purple');
        $(this).css('color','white');
    });



});

function setDisplay(displayData, filter) {
    console.log(displayData);

    // filter events to only display the type selected, if one type was chosen
    if(filter === "event") {
        displayData = displayData.filter(element => element.type === "event");
    } else if(filter === "offer") {
        displayData = displayData.filter(element => element.type === "offer");
    } else if (filter === "listing") {
        displayData = displayData.filter(element => element.type === "listing");
    }

    // display all cards first, we will hide the unneeded ones later
    for(let i = 1; i <= MAX_CARDS; i++) {
        let cardString = `.card${i}`;
        $(cardString).show();
    }


    for(let i = 1; i <= displayData.length; i++) {
        let title = displayData[i-1].title;
        let description = displayData[i-1].description;
        let imgURL = displayData[i-1].mediaurl;
        let titleIdString = `#cardTitle${i}`;
        let imgIdString = `#cardImg${i}`;
        let textIdString = `#cardText${i}`;
        $(titleIdString).text(title);
        $(textIdString).text(description);
        $(imgIdString).attr("src", imgURL);
        $(imgIdString).attr("onerror", "imgError(this)");
    }

    // (clunky but functional) workaround for 6th div
    $("#cardTitle6a").text(displayData[5].title);
    $("#cardText6a").text(displayData[5].description);

    let windowsize = $(window).width();
    if(windowsize > 640 && windowsize < 1025) {
        $("#card7").hide();
        console.log("hiding");
    }



    // hide cards that aren't needed for length of data
    if(displayData.length < MAX_CARDS) {
        for(let i = 8; i <= MAX_CARDS; i++) {
            let cardString = `.card${i}`;
            $(cardString).hide();
        }
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


