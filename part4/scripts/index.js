let currentPage = 1;
const maxPages = 4;
let dataToDisplay = [];

$(document).ready(function() {

    $("#container2").hide();
    $("#container3").hide();
    $("#container4").hide();
    
    getDataFromAPI();

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

function setDisplay(displayData) {

    // randomize the order of the elements in displayData
    let randomSort = displayData.sort(func);  
    
    console.log(randomSort);

    // iterate through listingData and assign content to all the cards
    for(let i = 1; i <= randomSort.length; i++) {
        let title = randomSort[i-1].title;
        let description = randomSort[i-1].description;
        let imgURL = randomSort[i-1].mediaurl;
        let titleIdString = `#cardTitle${i}`;
        let imgIdString = `#img${i}`;
        $(titleIdString).text(title);
        $(imgIdString).attr("src", imgURL);
        $(imgIdString).attr("onerror", "imgError(this)");
    }

}

function func(a, b) {  
    return 0.5 - Math.random();
}  

// displays the backup image for broken images that do not load
function imgError(image) {
    console.log("fallback image loaded");
    console.log(image);
    image.onerror = "";
    image.src = "./images/fallback.jpg";
    return true;
}


function getAllRequests() {
    let requests = [];

    for(let i = 1; i < 5; i++) {
        // requests.push(fetch('https://sv-reqres.now.sh/api/listings?page=' + i));
        requests.push($.ajax({
            url: 'https://sv-reqres.now.sh/api/listings?page=' + i,
            method: "GET"
        }));
    }

    return requests;   
}

async function getDataFromAPI(index) {
    const responses = await Promise.all(getAllRequests());
    let result = [];

    // concatenate all pages of data together into one array
    responses.forEach(element => {
        result = result.concat(element.data);
    });
    console.log(result);

    dataToDisplay = result;
    setDisplay(dataToDisplay);
}

