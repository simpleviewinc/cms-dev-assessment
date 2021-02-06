function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const createGrid = (data) => {
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
 
    document.querySelector("#append").appendChild(container);
    let theRow;
    let rowCount = 0;
    let boxCount = 1;
    let buttonCount = 1;
    var uniqueId = "index-1";
    var queryId = "#index-1" ;
    data.map((item, index) => {
        const descriptionStart = item.description.substring(0, 150);
        const descriptionEnd = item.description.substring(150);
        let buttonText;
        moreIndex = "more-" + index.toString();
        buttonIndex = "button-" + index.toString();
        if(index%3===0){
            rowCount++;
            theRow =  document.createElement('div');
            theRow.className = 'row'
            theRow.id = "index-" + rowCount.toString();
            queryId = "#index-" + rowCount.toString();
            document.querySelector(".container").appendChild(theRow);
            console.log("the rowCount is incrementing " + rowCount);
        }

        if(boxCount === 1) {
            toInsert =  `
            <div class="col-6-lg col-4-md">
            <img src="${item.mediaurl}" 
                  onError="this.src = '../comps/fallback.jpg'"
            ></img>
            <h4>${item.title}</h4>
            <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
            <button onclick=readMore(${index}) class="my-button-2" id="${buttonIndex}">Read More</button>
            </div>
        `;
        } else if(boxCount === 6){
               toInsert =  `
                <div class="col-3-lg" id="md-hack">

                    <img src="${item.mediaurl}" 
                        onError="this.src = '../comps/fallback.jpg'"
                        style="height:500px;"
                        id="md-hack"
                        ></img>
                </div>
                <div class="col-3-lg" id="md-hack">
                    <h4>${item.title}</h4>
                    <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                    <button onclick=readMore(${index}) class="my-button-2" id="${buttonIndex}">Read More</button>
                </div>

                <div class="col-4-md" id="lg-hack">
                    <img src="${item.mediaurl}" id="lg-hack"
                        onError="this.src = '../comps/fallback.jpg'"
                    ></img>
                    <h4>${item.title}</h4>
                    <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                    <button onclick=readMore(${index}) class="my-button-2" id="${buttonIndex}">Read More</button>
                 </div>
            `;
            
        } else {
            toInsert =  `
            <div class="col-3-lg col-4-md">
                <img src="${item.mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                ></img>
                <h4>${item.title}</h4>
                <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                <button onclick=readMore(${index}) class="my-button-2" id="${buttonIndex}">Read More</button>
            </div>
        `;
        }
        if(boxCount === 6){
            boxCount = 1;
        } else {
            boxCount++;
        }
        uniqueId= "index-" + rowCount.toString();
        queryId = "#index-" + rowCount.toString();
        document.querySelector(queryId).insertAdjacentHTML("beforeend", toInsert);
    })
}

async function fetchListings(){
    const response = await fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'});
    const toJson = await response.json();
    const data = toJson.data;
    console.log("this is the data async", data);
    //we need to change this to get all
    const finished =  await createGrid(data);

}

async function fetchEvents(){
    const response = await fetch("https://sv-reqres.now.sh/api/events", {mode: 'cors'});
    const toJson = await response.json();
    const data = toJson.data;
    console.log("this is the events", data);
    const finished =  await createGrid(data);

}


async function fetchOffers(){
    const response = await fetch("https://sv-reqres.now.sh/api/offers", {mode: 'cors'});
    const toJson = await response.json();
    const data = toJson.data;
    console.log("this is the events", data);
    const finished = await createGrid(data);

}

async function fetchAll(){
    const listingsResponse = await fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'});
    const listingsJSON = await listingsResponse.json();
    const listingsData = listingsJSON.data;

    const eventsResponse = await fetch("https://sv-reqres.now.sh/api/events", {mode: 'cors'});
    const eventsJSON = await eventsResponse.json();
    const eventsData = eventsJSON.data;

    const offersResponse = await fetch("https://sv-reqres.now.sh/api/offers", {mode: 'cors'});
    const offersJSON = await offersResponse.json();
    const offersData = offersJSON.data;
    const data = [...offersData, ...eventsData, ...listingsData];
    console.log("this is all the data in fetchAll ", data);
    const finished =  await createGrid(data);
}
const unnapend = true;
fetchListings();

console.log("loaded");


function eventsTrigger(){
    fetchEvents();x
}

function listingsTrigger(){
    fetchListings();
}

function offersTrigger(){
    fetchOffers();
}

function allTrigger(){
    fetchAll();
}

function readMore(index){
    const moreQueryString = "more-" + index.toString();
    const buttonQueryString = "button-" + index.toString();
    console.log("this is the hidden text ", moreQueryString);
    console.log("this is the button ", buttonQueryString);
    console.log("this is the hidden text element ", document.getElementById(moreQueryString));
    console.log("this is the button element ", document.getElementById(buttonQueryString));
    if(document.getElementById(moreQueryString).style.display === 'inline'){

        document.getElementById(moreQueryString).style.display = 'none';
        document.getElementById(buttonQueryString).innerHTML='Read More';

    }else{  

        document.getElementById(moreQueryString).style.display='inline';
        document.getElementById(buttonQueryString).innerHTML='Read Less';
    } 
}

// document.addEventListener('click', function (event) {
//     event.preventDefault();
// 	// If the clicked element doesn't have the right selector, bail
// 	if (event.target.matches(".listings")){
//         fetchLists();
//     } else if(event.target.matches(".events")){
//         fetchEvents();
//     } else if(event.target.matches(".offers")){
//         fetchOffers();
//     } else if(event.target.matches(".all")){
//         fetchLists();
//         unnappend=false;
//         fetchEvents(unnappend);
//         fetchOffers(unnappend);
//     } else {
//         return;
//     }


	// Log the clicked element in the console
// 	console.log(event.target);

// }, false);