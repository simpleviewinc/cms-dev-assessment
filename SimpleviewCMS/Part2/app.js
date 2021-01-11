async function getPlaces() {
    let url = 'https://sv-reqres.now.sh/api/listings';

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

async function getEvents() {
    let url = 'https://sv-reqres.now.sh/api/events';

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

async function getOffers() {
    let url = 'https://sv-reqres.now.sh/api/offers';

    try {
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}


//Create Columns for each value in the Places array
async function renderPlaces() {
    let places = await getPlaces(),
        placesArr = places.data,
        count = 0,
        row = document.createElement('div');

    row.className = "row";

    placesArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center'

        col.innerHTML = `<img class="placeImage" src="${placesArr[i].mediaurl}" onerror="this.src='./images/fallback.png'" >
    <h3>${placesArr[i].title}</h3>
    <p>${placesArr[i].description}</p><p class="read read-more" onclick="readMore()"><a class="read-button" href="#">Read More</a></p>`;
        if (i <= 2) {
            document.getElementById('firstRow').appendChild(col);
        } else {
            document.getElementById('secondRow').appendChild(col);
        }
    }
}

//Create Columns for each value in the Events array
async function renderEvents() {
    let events = await getEvents(),
        eventsArr = events.data,
        count = 0,
        row = document.createElement('div');
    row.className = "row";

    eventsArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center'
        console.log(eventsArr[i].title)
        console.log(i)
        col.innerHTML = `<img class="eventsImage" src="${eventsArr[i].mediaurl}" onerror="this.src='./images/fallback.png'" >
    <h3>${eventsArr[i].title}</h3>
    <p>${eventsArr[i].description}</p><p class="read read-more" onclick="readMore()"><a class="read-button" href="#">Read More</a></p>`;
        if (i <= 2) {
            document.getElementById('thirdRow').appendChild(col);
        } else {
            document.getElementById('fourthRow').appendChild(col);
        }
    }
}

//Create Columns for each value in the Offers array
async function renderOffers() {
    let offers = await getOffers(),
        offersArr = offers.data,
        row = document.createElement('div');
    row.className = "row";

    console.log(offersArr);

    offersArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center'
        console.log(offersArr[i].title)
        console.log(i)
        col.innerHTML = `<img class="offersImage" src="${offersArr[i].mediaurl}" onerror="this.src='./images/fallback.png'" >
    <h3>${offersArr[i].title}</h3>
    <p>${offersArr[i].description}</p><p class="read read-more" onclick="readMore()"><a class="read-button" href="#">Read More</a></p>`;
        if (i <= 2) {
            document.getElementById('fifthRow').appendChild(col);
        } else {
            document.getElementById('sixthRow').appendChild(col);
        }
    }
}


renderPlaces();
renderEvents();
renderOffers();


//Create "Read More" effect
function readMore() {
    const link = document.querySelector('.read');
    link.classList.toggle('read-more');
    const column = document.querySelector('.column');
    column.classList.toggle('col');
}