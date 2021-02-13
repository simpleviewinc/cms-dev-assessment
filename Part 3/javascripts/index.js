// Select page grid container for display of information
const pageGridContainer = document.querySelector(".page-grid-container");
const pageContent = document.querySelectorAll(".page-content");

// set const for api endpoint
const apiEndpoint = `https://sv-reqres.now.sh/api`;

// When the page loads, the default query will be for all listings
const defaultQuery = "/listings";
//Make sure to grab 15 items, since we need a total of 15.
const totalItemsToGet = `/?per_page=15`

// Get data from the requested API endpoint: listings, events, and offers
async function getData(query) {
        try{
            const response = await fetch(apiEndpoint + query + totalItemsToGet);
            const data = await response.json();
            return data.data;
        } catch {
            console.log("Could not get data.");
        }
}//end function getData()

// Display the retrieved data from getData()
async function displayData(query) {
    try {
        const data = await getData(query);
        pageContent.forEach((photo, index) => 
            (photo.innerHTML = `
            <img onerror="this.src='../images/fallback.jpg'"
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