var queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=20";
var data = [];
var shuffledData = [];
var page = 1;

// does our API call on page load and pushes data into object for further use.

$( document ).ready(function() {
    $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

            for (var j = 0; j < response.data.length; j++) {
                data[j] = response.data[j];
            }

        shuffledData = shuffle(data);

        generateImage(shuffledData);

    });

});

/* function that will shuffle our array of populated data from API
 * inspired by this stack overflow post:
 * https://stackoverflow.com/questions/2450954/
 */

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

// function that checks what page we're on and creates the grid appropriately to follow proper pattern

function generateImage(data) {
    if (page == 1) {
        $('.wrapper').css({"grid-template-columns": "1fr 1fr",
                           "-ms-grid-columns": "1fr 1fr"});
        var newColumn1 = $("<div class='pageOneColumnOne'>");
        var newColumn2 = $("<div class='pageOneColumnTwo'>");
        $('.wrapper').append(newColumn1);
        $('.wrapper').append(newColumn2);
        
        for (var i = 0; i < 2; i++) {
            createImage(i, ".pageOneColumnOne");
            
        }
        
        for (var i = 2; i < 5; i++) {
            createImage(i, ".pageOneColumnTwo");
        }
    }
    
    if (page == 2) {
        $(".wrapper").css({"grid-template-columns": "1fr 1fr 1fr",
                           "-ms-grid-columns": "1fr 1fr 1fr"});
        var newColumn3 = $("<div class='pageTwoColumnOne'>");
        var newColumn4 = $("<div class='pageTwoColumnTwo'>");
        var newColumn5 = $("<div class='pageTwoColumnThree'>");
        $('.wrapper').append(newColumn3);
        $('.wrapper').append(newColumn4);
        $('.wrapper').append(newColumn5);
    
        for (var i = 5; i < 7; i++) {
            createImage(i, ".pageTwoColumnOne");
        }
        
        for (var i = 7; i < 9; i++) {
            createImage(i, ".pageTwoColumnTwo");
        }
    
        for (var i = 9; i < 10; i++) {
            createImage(i, ".pageTwoColumnThree");
        }
    
    }
    
    if (page == 3) {
        $('.wrapper').css({"grid-template-columns": "1fr 1fr",
                           "-ms-grid-columns": "1fr 1fr"});
        var newColumn6 = $("<div class='pageThreeColumnOne'>");
        var newColumn7 = $("<div class='pageThreeColumnTwo'>");
        $('.wrapper').append(newColumn6);
        $('.wrapper').append(newColumn7);
    
        for (var i = 10; i < 12; i++) {
            createImage(i, ".pageThreeColumnOne");
        }
    
        for (var i = 12; i < 13; i++) {
            createImage(i, ".pageThreeColumnTwo");
        }
    }
    
    if (page == 4) {
        $('.wrapper').css({"grid-template-columns": "1fr 1fr",
                           "-ms-grid-columns": "1fr 1fr"});
        var newColumn8 = $("<div class='pageFourColumnOne'>");
        var newColumn9 = $("<div class='pageFourColumnTwo'>");
        $('.wrapper').append(newColumn8);
        $('.wrapper').append(newColumn9);
    
        for (var i = 13; i < 14; i++) {
            createImage(i, ".pageFourColumnOne");
        }
    
        for (var i = 14; i < 15; i++) {
            createImage(i, ".pageFourColumnTwo");
        }
    }
    
    fixBrokenImages('assets/fallback.jpg');
}

/* function so we can check to see if an image is broken and if so fallback to provided image url
 * solution fully explained in this stack overflow post:
 * https://stackoverflow.com/questions/980855/
 */

fixBrokenImages = function( url ){
    var img = document.getElementsByTagName('img');
    var i=0, l=img.length;
    for(;i<l;i++){
        var t = img[i];
        if(t.naturalWidth === 0){
            //this image is broken
            t.src = url;
        }
    }
}

// function that will create and fill our image container and title container with data from data 
// object and append appropriately.

function createImage(index, location) {
    var newDiv = $("<div>");
    var titleDiv = $("<div class='title'>0" + (index + 1) + ". <span>" + data[index].category.subcatname + "</span></div>");
    newDiv.append(titleDiv);
    newDiv.append("<img src='" + data[index].mediaurl + "' alt='" + data[index].category.subcatname + "'>");
    $(location).append(newDiv);
}

// On click events to cycle to next/previous pages and reset the grid on the wrapper.
$(document).on("click", "button#next", function() {
    console.log("click");
    $('.wrapper').attr('grid-template-columns', '');
    $('.wrapper').empty();

        if (page == 4) {
            page = 1;
        }
        else {
            page++;
        }

    generateImage(shuffledData);
});

$(document).on("click", "button#prev", function() {
    console.log("Prev Clicked");
    $('.wrapper').attr('grid-template-columns', '');
    $('.wrapper').empty();

        if (page == 1) {
            page = 4;
        }
        else {
            page--;
        }

    generateImage(shuffledData);
})

