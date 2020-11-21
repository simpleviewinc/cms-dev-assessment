// globals for APIs
const listingsURL = "https://sv-reqres.now.sh/api/listings";
const eventsURL = "https://sv-reqres.now.sh/api/events";
const offersURL = "https://sv-reqres.now.sh/api/offers";



async function getContent(cat){

    if(cat == "all"){
        // fetch data
        const listings = await (await fetch(listingsURL)).json();
        const events = await (await fetch(eventsURL)).json();
        const offers = await (await fetch(offersURL)).json();
        // array of all data arrays
        allData = [ listings.data, events.data, offers.data];
        // clear out grid
        document.getElementById("grid").innerHTML = "";
        // populate pagge using insertAdjacentHTML
        for(var i = 0; i < allData.length; i++){
            for(var j = 0; j < allData[i].length; j++){
                const { mediaurl, title, description } = allData[i][j];
                if(j != 5){
                    var card = `
                    <div class="card card${j+1}">
                    <img class="card-img" id="card${j+1}-img" src="${mediaurl}" 
                    onerror="this.onerror=null;this.src='fallback.jpg';" alt="fallback">
                    <div class="button-container">
                    <div class="read-more-container">
                    <button class="read-more"> Read More</button>
                    </div>
                    </div>
                    <h4 class="card-title" id="card${j+1}-title">${title}</h4>
                    <p class="card-des" id="card${j+1}-des">${description}</p>
                    </div>
                    `
                    const div = document.getElementById("grid");
                    div.insertAdjacentHTML('beforeend', card);
                } else { // card 6 is narrow
                    var card = `
                    <div class="card card6">
                    <img class="card6-img-narrow" id="card6-img" src="${mediaurl}" 
                    onerror="this.onerror=null;this.src='fallback.jpg';" alt="fallback">
                    <div class="card6-txt-container">
                    <div class="button-container">
                    <div class="read-more-container">
                    <button class="read-more"> Read More</button>
                    </div>
                    </div>
                    <h4 class="card-title" id="card6-title">${title}</h4>
                    <p class="card-des" id="card6-des">${description}</p>
                    </div>
                    </div>
                    `
                    const div = document.getElementById("grid");
                    div.insertAdjacentHTML('beforeend', card);
                }
            }
        }
        // quick easy way to change button colors would need loop or better
        // way if there are hundreds of buttons
        document.getElementById("all-button").className = "nav-button nav-button-selected"
        document.getElementById("offers-button").className = "nav-button";
        document.getElementById("events-button").className = "nav-button";
        document.getElementById("listings-button").className = "nav-button";
    } else{

        // quick easy way to change button colors would need loop or better
        // way if there are hundreds of buttons
        document.getElementById("all-button").className = "nav-button";
        if(cat == "listings"){
            document.getElementById("listings-button").className = "nav-button nav-button-selected";
            document.getElementById("offers-button").className = "nav-button";
            document.getElementById("events-button").className = "nav-button";
        } else if(cat == "events"){
            document.getElementById("events-button").className = "nav-button nav-button-selected";
            document.getElementById("offers-button").className = "nav-button";
            document.getElementById("listings-button").className = "nav-button";
        } else if(cat == "offers"){
            document.getElementById("offers-button").className = "nav-button nav-button-selected";
            document.getElementById("events-button").className = "nav-button";
            document.getElementById("listings-button").className = "nav-button";
        }

        // clear grid
        document.getElementById("grid").innerHTML = "";
        const url = "https://sv-reqres.now.sh/api/".concat(cat);
        const urlData = await (await fetch(url)).json();
        const data = urlData.data;
        // populate webpage with content
        for(var i = 0; i < data.length; i++){
            if(i != 5){
                const { mediaurl, title, description } = data[i];
                var card = `
                <div class="card card${i+1}">
                <img class="card-img" id="card${i+1}-img" src="${mediaurl}" 
                onerror="this.onerror=null;this.src='fallback.jpg';" alt="fallback">
                <div class="button-container">
                <div class="read-more-container">
                <button class="read-more"> Read More</button>
                </div>
                </div>
                <h4 class="card-title" id="card${i+1}-title">${title}</h4>
                <p class="card-des" id="card${i+1}-des">${description}</p>
                </div>
                `
                const div = document.getElementById("grid");
                div.insertAdjacentHTML('beforeend', card);
            } else { // card 6 is narrow
                const { mediaurl, title, description } = data[i];
                console.log("MADE IT");
                var card = `
                <div class="card card${i+1}">
                <img class="card6-img-narrow" id="card6-img" src="${mediaurl}" 
                onerror="this.onerror=null;this.src='fallback.jpg';" alt="fallback">
                <div class="card6-txt-container">
                <div class="button-container">
                <div class="read-more-container">
                <button class="read-more"> Read More</button>
                </div>
                </div>
                <h4 class="card-title" id="card6-title">${title}</h4>
                <p class="card-des" id="card6-des">${description}</p>
                </div>
                </div>
                `
                const div = document.getElementById("grid");
                div.insertAdjacentHTML('beforeend', card);
            }
        }

    }
}

getContent("all");