// Select page grid container for display of information
const pageGridContainer = document.querySelector(".page-grid-container");
const pageContent = document.querySelectorAll(".page-content");

// set const for api endpoint
const apiEndpoint = `https://sv-reqres.now.sh/api`;

// When the page loads, the default query will be for all listings, events, and offers
const defaultQuery = "/all";

//Get all items
const itemsPerPage = `/?per_page=20`

// Get data from the requested API endpoint: listings, events, and offers
async function getData(query) {
    if(query === "/all") {
        try {
            let mergedData;
            let data = await Promise.all([
                getData("/listings", itemsPerPage),
                getData("/events", itemsPerPage),
                getData("/offers", itemsPerPage),
            ])
            //load listing data then events data and then offers data into mergedData array
            mergedData = [].concat(...data)
            return mergedData;
        } catch (err) {
            console.log(err);
        }
    } else {
        try{
            const response = await fetch(apiEndpoint + query + itemsPerPage);
            const data = await response.json();
            return data.data;
        } catch {
            console.log("Could not get data.");
        }
    }//end if/else
}//end function getData()

async function shuffleData(query) {
    const data = await getData(query);

    //shuffle all data retrieved from the API and slice off the first 15 items that will be used to populate the displayed page.
    //Every time a user refreshes the page, new listings, offers, and events will appear.
    //NOTE: this randomization of data is not fastest (time complexity: O(N log N), however, it is simple, as it lets us use array properties and methods.
    let shuffledData = data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, 15);
    
    return shuffledData;

}

// Display the retrieved data from getData()
async function displayData(query) {
    try {
        const data = await shuffleData(query);
        pageContent.forEach((photo, index) => 
            (photo.innerHTML = `
            <img onerror="this.src='./images/fallback.jpg'"
            src="${data[index].mediaurl}"
            alt="photo"
            class="photo-img img-${index}">
            </img>
            <div class="container">
                <h2 class="title"><span class="title-number">0${index + 1}. </span><strong>${data[index].title}<strong></h2>
            </div>`)    
        );
    } catch(err) {
        console.log(err);
    }
}//end displayData()

//displayData() will execute immediately after index.html is parsed
displayData(defaultQuery);