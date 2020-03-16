
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

            //Randomizer
            function shuffle(arra1) {
                var ctr = arra1.length, temp, index;

                // While there are elements in the array
                while (ctr > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * ctr);
                    // Decrease ctr by 1
                    ctr--;
                    // And swap the last element with it
                    temp = arra1[ctr];
                    arra1[ctr] = arra1[index];
                    arra1[index] = temp;
                }
                return arra1;
            }
            var myArray = (results);
            console.log(shuffle(myArray));


            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item1Title").text(results[0].title);
                $("#item1Description").text(results[0].description);

                $(".item2Title").text(results[1].title);
                $("#item2Description").text(results[1].description);

                $(".item3Title").text(results[2].title);
                $("#item3Description").text(results[2].description);


                $(".item4Title").text(results[3].title);
                $("#item4Description").text(results[3].description);


                $(".item5Title").text(results[4].title);
                $("#item5Description").text(results[4].description);


                $(".item6Title").text(results[5].title);
                $("#item6Description").text(results[5].description);



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
            // Randomizer
            function shuffle(arra1) {
                var ctr = arra1.length, temp, index;

                // While there are elements in the array
                while (ctr > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * ctr);
                    // Decrease ctr by 1
                    ctr--;
                    // And swap the last element with it
                    temp = arra1[ctr];
                    arra1[ctr] = arra1[index];
                    arra1[index] = temp;
                }
                return arra1;
            }
            var myArray = (results);
            console.log(shuffle(myArray));

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item7Title").text(results[0].title);
                $("#item7Description").text(results[0].description);
                console.log(results[1].description);
                $(".item8Title").text(results[1].title);
                $("#item8Description").text(results[1].description);


                $(".item9Title").text(results[2].title);
                $("#item9Description").text(results[2].description);


                $(".item10Title").text(results[3].title);
                $("#item10Description").text(results[3].description);


                $(".item11Title").text(results[4].title);
                $("#item11Description").text(results[4].description);


                $(".item12Title").text(results[5].title);
                $("#item12Description").text(results[5].description);
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
            // Randomizer
            function shuffle(arra1) {
                var ctr = arra1.length, temp, index;

                // While there are elements in the array
                while (ctr > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * ctr);
                    // Decrease ctr by 1
                    ctr--;
                    // And swap the last element with it
                    temp = arra1[ctr];
                    arra1[ctr] = arra1[index];
                    arra1[index] = temp;
                }
                return arra1;
            }
            var myArray = (results);
            console.log(shuffle(myArray));

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
                $(".item13Title").text(results[0].title);
                $("#item13Description").text(results[0].description);
                console.log(results[1].description);

                $(".item14Title").text(results[1].title);
                $("#item14Description").text(results[1].description);


                $(".item15Title").text(results[2].title);
                $("#item15Description").text(results[2].description);


                $(".item16Title").text(results[3].title);
                $("#item16Description").text(results[3].description);

                $(".item17Title").text(results[4].title);
                $("#item17Description").text(results[4].description)
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
