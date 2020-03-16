
//attach gif to button
$(document).ready(function () {

    // Grabbing and storing the dataproperty value from the button
    var gif = $(this).attr("data-name");
    // Constructing a queryURL using the gif input
    var queryURL = "https://sv-reqres.now.sh/api/listings";
    // Performing an AJAX request with the queryURL
    var ajax1 = $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            console.log(response);
            console.log(results[0].title);

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item1Title").text(results[0].title);
                $("#item1Description").text(results[0].description);
                $(".item1url").text(results[0].weburl);

                $(".item2Title").text(results[1].title);
                $("#item2Description").text(results[1].description);
                $(".item2url").text(results[1].weburl);


                $(".item3Title").text(results[2].title);
                $("#item3Description").text(results[2].description);
                $(".item3url").text(results[2].weburl);


                $(".item4Title").text(results[3].title);
                $("#item4Description").text(results[3].description);
                $(".item4url").text(results[3].weburl);


                $(".item5Title").text(results[4].title);
                $("#item5Description").text(results[4].description);
                $(".item5url").text(results[4].weburl);


                $(".item6Title").text(results[5].title);
                $("#item6Description").text(results[5].description);
                $(".item6url").text(results[5].weburl);
            }

        })
    var ajax2 = $.ajax({
        url: "https://sv-reqres.now.sh/api/events",
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            console.log(response);

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item7Title").text(results[0].title);
                $("#item7Description").text(results[0].description);
                $(".item7url").text(results[0].startDate);

                console.log(results[1].description);
               
                $(".item8Title").text(results[1].title);
                $("#item8Description").text(results[1].description);
                $(".item8url").text(results[1].startDate);


                $(".item9Title").text(results[2].title);
                $("#item9Description").text(results[2].description);
                $(".item9url").text(results[2].startDate);


                $(".item10Title").text(results[3].title);
                $("#item10Description").text(results[3].description);
                $(".item10url").text(results[3].startDate);


                $(".item11Title").text(results[4].title);
                $("#item11Description").text(results[4].description);
                $(".item11url").text(results[4].startDate);


                $(".item12Title").text(results[5].title);
                $("#item12Description").text(results[5].description);
                $(".item12url").text(results[5].startDate);

                console.log(results[0]);
            }
        });



    var ajax3 = $.ajax({
        url: "https://sv-reqres.now.sh/api/offers",
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            // storing the data from the AJAX request in the results variable
            var results = response.data;
            console.log(response);

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item13Title").text(results[0].title);
                $("#item13Description").text(results[0].description);
                $(".item13url").text(results[3].redeemstart);

               
                console.log(results[1].description);
console.log(results[1].mediaurl);
                $(".item14Title").text(results[1].title);
                $("#item14Description").text(results[1].description);
                $(".item14url").text(results[3].redeemstart);


                $(".item15Title").text(results[2].title);
                $("#item15Description").text(results[2].description);
                $(".item15url").text(results[3].redeemstart);


                $(".item16Title").text(results[3].title);
                $("#item16Description").text(results[3].description);
                $(".item16url").text(results[3].redeemstart);

                $(".item17Title").text(results[4].title);
                $("#item17Description").text(results[4].description)
                $(".item17url").append(results[3].redeemstart);

                $(".item18Title").text(results[5].title);
                $("#item18Description").text(results[5].description)
                $(".item18url").append(results[3].redeemstart);

                console.log(results[0]);
            }
        });
});



filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
