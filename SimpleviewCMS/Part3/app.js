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

let columnItems = new Array();
let pageList = new Array();
let currentPage = 1;
let rowsPerPage = 3;
let numberOfPages = '';
let count = 0;

//Create Columns for each value in the Listings array
async function renderPlaces() {
    let places = await getPlaces(),
        placesArr = places.data;

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center';
        let id = col.id = 'col' + count;
        count++;

        col.innerHTML = `<img class="placeImage" src="${placesArr[i].mediaurl}" onerror="this.src='./images/fallback.png'" >
    <h3>${placesArr[i].title}</h3>
    <p>${placesArr[i].description}</p><p class="read read-more" onclick="readMore()"><a class="read-button" href="#">Read More</a></p>`;

        if (i <= 2) {
            document.getElementById('firstRow').appendChild(col);
        } else {
            document.getElementById('secondRow').appendChild(col);
        }
    }
    placesArr.forEach((listing, i) => {
        newCol(i);
    });

}

//Create Columns for each value in the Events array
async function renderEvents() {
    let events = await getEvents(),
        eventsArr = events.data;

    eventsArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center';
        let id = col.id = 'col' + count;
        columnItems.push(id);
        count++;
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

//Create Columns for each value in the Options array
async function renderOffers() {
    let offers = await getOffers(),
        offersArr = offers.data;

    offersArr.forEach((listing, i) => {
        newCol(i);
    });

    function newCol(i) {
        let col = document.createElement('div');
        col.className = 'col column col-md-6 col-lg-4 text-center';
        let id = col.id = 'col' + count;
        columnItems.push(id);
        count++;
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

//Hacky Pagination. After realizing too late that this function was being impeded by the way I'd initially written the app, I decided it would be better to hack it out with the current build and circle back if I had the time to rebuild. Pagination is challenging with this build because I'm creating and rendering the HTML in the same function. I'd like to save the innerHTML for these rows in an array, and assign them with more control. This would allow me to iterate through the array in my pagination functions.

document.getElementById('button1').addEventListener('click', function () {
    document.getElementById('firstRow').classList.remove('inactive')
    document.getElementById('secondRow').classList.remove('inactive')
    document.getElementById('thirdRow').classList.remove('inactive')

    document.getElementById('fourthRow').classList.add('inactive')
    document.getElementById('fifthRow').classList.add('inactive')
    document.getElementById('sixthRow').classList.add('inactive')
});

document.getElementById('button2').addEventListener('click', function () {
    document.getElementById('firstRow').classList.add('inactive')
    document.getElementById('secondRow').classList.add('inactive')
    document.getElementById('thirdRow').classList.add('inactive')

    document.getElementById('fourthRow').classList.remove('inactive')
    document.getElementById('fifthRow').classList.remove('inactive')
    document.getElementById('sixthRow').classList.remove('inactive')
});