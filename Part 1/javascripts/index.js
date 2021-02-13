// Select grid container for display of information
const gridContainer = document.querySelector(".grid-container");
// set const for api endpoint
const apiEndpoint = `https://sv-reqres.now.sh/api/listings`;

// Get data from the API endpoint
async function getData() {
    gridContainer.innerHTML = "<h1>Loading Data...</h1>"
    try{
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data.data;
    } catch {
        console.log("Could not get data.");
    }
    
}//end function getData()

// Display the retrieved data from getData()
async function displayData() {
    try {
        const data = await getData();
        const htmlContent = data
        .map((listing, index) => 
            `<div class="listing data-listing-${index}">
                <img onerror="this.src='/images/fallback.jpg'" src=${listing.mediaurl} alt="Listing photo" class="listing-image image-${index}"></img>
                <div class="container container-${index}">
                    <h2><strong>${listing.title}</strong></h2>
                    <p class="listing-description description-${index}">${listing.description}</p>
                </div>
            </div>`
        )
        .join("");
        gridContainer.innerHTML = htmlContent;
    } catch(err) {
        console.log(err);
    }
}//end displayData()

//displayData() will execute immediately after index.html is parsed
displayData();
