document.getElementById('getAll').addEventListener('click',fetchAllData);
document.getElementById('getListings').addEventListener('click',fetchData);
document.getElementById('getEvents').addEventListener('click',fetchData);
document.getElementById('getOffers').addEventListener('click',fetchData);
let allButton = document.getElementById('getAll');
let listingsButton = document.getElementById("getListings");
let eventsButton = document.getElementById("getEvents");
let offersButton = document.getElementById("getOffers");

async function fetchData() {
    let apiEndpoint = '';
    let element = document.getElementById(this.id);
    element.classList.add("active");
    switch(this.id){
        case 'getListings':
            apiEndpoint = 'https://sv-reqres.now.sh/api/listings';
            allButton.classList.remove("active");
            eventsButton.classList.remove("active");
            offersButton.classList.remove("active");
            break;
        case 'getEvents':
            apiEndpoint = 'https://sv-reqres.now.sh/api/events';
            allButton.classList.remove("active");
            listingsButton.classList.remove("active");
            offersButton.classList.remove("active");
            break;
        case 'getOffers':
            apiEndpoint = 'https://sv-reqres.now.sh/api/offers';
            allButton.classList.remove("active");
            eventsButton.classList.remove("active");
            listingsButton.classList.remove("active");
            break;
        default:
            apiEndpoint = 'https://sv-reqres.now.sh/api/listings';
    }
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    let output = '';
    data.data.forEach((item) => {
        output += `
            <div class="grid-item">
                <img class="grid-item-img" src = ${item.mediaurl} onerror="this.onerror=null;this.src='img/fallback.jpg';" >
                <div class="grid-item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="read-more"><a href="#">Read More</a></div>
            </div>
        `;
    });
    document.getElementById('output').innerHTML = output;
}

async function fetchAllData(){
    try{
        allButton.classList.add("active");
        listingsButton.classList.remove("active");
        eventsButton.classList.remove("active");
        offersButton.classList.remove("active");
        let [listings, events, offers] = await Promise.all([
            fetch('https://sv-reqres.now.sh/api/listings'),
            fetch('https://sv-reqres.now.sh/api/events'),
            fetch('https://sv-reqres.now.sh/api/offers')
        ]);
        let listingData = await listings.json();
        let eventData = await events.json();
        let offerData = await offers.json();
        let data = [];
        data.push.apply(data, listingData.data);
        data.push.apply(data, eventData.data);
        data.push.apply(data, offerData.data);
        let output = '';
        let count = 0;
        data.forEach((item) => {
            output += `
                <div class="grid-item">
                    <img class="grid-item-img" src = ${item.mediaurl} onerror="this.onerror=null;this.src='img/fallback.jpg';" >
                    <div class="grid-item-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                    <div class="read-more"><a href="#">Read More</a></div>
                </div>
            `;
            count++;
        });
        document.getElementById('output').innerHTML = output;
    }
    catch(err) {
        console.log(err);
    }
}

fetchAllData()

