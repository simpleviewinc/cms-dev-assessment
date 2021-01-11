//After realizing in section 3 that manipulating my data as a whole would be challenging, I decided I needed to try another build. I didn't feel that randomization would be possible in my first attempt. My goal here was to create a large array with each of my columns inside.

let apiData = [];
let placesArr = '';
let eventsArr = '';
let offersArr = '';
let newCol = '';
let columnArr = [];

console.log(placesArr);

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

async function createData() {
    let places = await getPlaces();
    let events = await getEvents();
    let offers = await getOffers();

    placesArr = places.data;
    eventsArr = events.data;
    offersArr = offers.data;

    console.log(placesArr);
}
createData();

console.log(columnArr);


function placesTemplate(placesArr, i) {
    //If possible, this would take the category and add it to the selector. <img src=${categoryArr[i]}/>

    console.log(placesArr[0])
    let content = `
        <img class="img" src="${placesArr[0].mediaurl}"/>
        <h3 class="title">${placesArr[0].title}</h3>
        <p class="description">${placesArr[0].description}</p>
        <p class="read-more">Test Read More</p>
    `;
    let col = document.createElement('div');
    col.innerHTML = content;

    // document.getElementById('container').appendChild(col);
    columnArr.push(col);
}

columnArr = [
    `<img class="img" src="${placesArr[0].mediaurl}"/>
    <h3 class="title">${placesArr[0].title}</h3>
    <p class="description">${placesArr[0].description}</p>
    <p class="read-more">Test Read More</p>`,

    `<img class="img" src="${placesArr[0].mediaurl}"/>
    <h3 class="title">${placesArr[0].title}</h3>
    <p class="description">${placesArr[0].description}</p>
    <p class="read-more">Test Read More</p>`,

    `<img class="img" src="${placesArr[0].mediaurl}"/>
    <h3 class="title">${placesArr[0].title}</h3>
    <p class="description">${placesArr[0].description}</p>
    <p class="read-more">Test Read More</p>`,

    `<img class="img" src="${placesArr[0].mediaurl}"/>
        <h3 class="title">${placesArr[0].title}</h3>
        <p class="description">${placesArr[0].description}</p>
        <p class="read-more">Test Read More</p>`
]

function populatePlacesTemplate() {
    placesArr.forEach(placesTemplate());
}

function populateEventsTemplate() {
    placesArr.forEach((i) => {
        placesTemplate(events, i);
    });
}

function populateOffersTemplate() {
    placesArr.forEach((i) => {
        placesTemplate(offers, i);
    });
}

//Remaining Functions
// organizeTheHtml()
// readMore()
// paginate()
// randomize()

//If I could get all of the columns into an array, I'd populate the HTML by iterating through the array in my paginate function. I'd do 3 columns per row, and 3 rows per page. I could also randomize my HTML using Math.random.