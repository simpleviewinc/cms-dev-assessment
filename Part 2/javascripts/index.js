// Select grid container for display of information
const gridContainer = document.querySelector(".grid-container");

// Select nav buttons
const navButtons = document.querySelectorAll(".nav-btn");

// set const for api endpoint
const apiEndpoint = `https://sv-reqres.now.sh/api`;

// When the page loads, the default query will be for all listings, events, and offers
const defaultQuery = "/all";

// Get data from the requested API endpoint: listings, events, and offers
async function getData(query) {
    gridContainer.innerHTML = "<h1>Loading Data...</h1>"
    if(query === "/all") {
        try {
            let mergedData;
            let data = await Promise.all([
                getData("/listings"),
                getData("/events"),
                getData("/offers"),
            ])
            //load listing data then events data and then offers data into mergedData array
            mergedData = [].concat(...data)
            return mergedData;
        } catch (err) {
            console.log(err);
        }
    } else {
        try{
            const response = await fetch(apiEndpoint + query);
            const data = await response.json();
            return data.data;
        } catch {
            console.log("Could not get data.");
        }
    }//end if/else
    
    
}//end function getData()

// Display the retrieved data from getData()
async function displayData(query) {
    try {
        const data = await getData(query);
        const htmlContent = data
        .map((listing, index) => 
            `<div class="listing data-listing-${index}" onMouseEnter="handleMouseEnter(${index})" onMouseLeave="handleMouseLeave(${index})">
                <img onerror="this.src='/images/fallback.jpg'" src=${listing.mediaurl} alt="Listing photo" class="listing-image image-${index}"></img>
                <div class="container container-${index}">
                    <h2><strong>${listing.title}</strong></h2>
                    <p class="listing-description description-${index} show-less">${listing.description}</p>
                    <button onClick="handleReadMoreClick(this, ${index})" class="read-more-button read-more-button-${index}">Read More</button>
                </div>
            </div>`
        )
        .join("");
        gridContainer.innerHTML = htmlContent;
    } catch(err) {
        console.log(err);
    }
}//end displayData()



//Add a a click event listener for each nav button
//Once a button is clicked, it will call displayData() and pass it the button's value as a query variable to retrieve the desired information from the API endpoint 
navButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        displayData("/" + event.target.value);
        //Remove active-button styling from all buttons
        navButtons[0].classList.remove("initial-active-button");    
        navButtons[0].classList.remove("active-button");
        navButtons[1].classList.remove("active-button"); 
        navButtons[2].classList.remove("active-button"); 
        navButtons[3].classList.remove("active-button"); 
        //Add active-button styling to clicked button
        button.classList.add("active-button");
    });
});

//show Read More button when mouse enters a listing, event, or offers post
function handleMouseEnter(index) {
    let readMoreButton = document.querySelector(`.read-more-button-${index}`);
    readMoreButton.style.visibility = "visible";
}//end handleMouseEnter()

//hide Read More button when mouse enters a listing, event, or offers post
function handleMouseLeave(index) {
    let readMoreButton = document.querySelector(`.read-more-button-${index}`);
    readMoreButton.style.visibility = "hidden";
}//end handleMouseLeave()

//Handle the Read More button click
function handleReadMoreClick(element, index) {
    //Get the listing description. Since it is the element before the "Read More" button we can use .previousElementSibling
    let listingDescription = document.querySelector(`.description-${index}`);
    if(listingDescription.classList.contains("show-less")) {
        listingDescription.classList.remove("show-less");
        element.innerText = "Reduce";
    } else {
        listingDescription.classList.add("show-less");
        element.innerText = "Read More";
    }//end if/else
}//end of handReadMoreClick()

//displayData() will execute immediately after index.html is parsed
displayData(defaultQuery);