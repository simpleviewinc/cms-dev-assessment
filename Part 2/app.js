const cardWrapper = document.querySelector(".card-wrapper");
const buttons = document.querySelector(".buttons");

// Fetching all data
const getAllData = (func, errorFunc) => {
  let listingsAPI = fetch("https://sv-reqres.now.sh/api/listings");
  let eventsAPI = fetch("https://sv-reqres.now.sh/api/events");
  let offersAPI = fetch("https://sv-reqres.now.sh/api/offers");

  Promise.all([listingsAPI, eventsAPI, offersAPI])
    .then(data => Promise.all(data.map(value => value.json())))
    .then(data => func(data[0], data[1], data[2]))
    .catch(error => errorFunc(error))
}

// Fetching listings data
const getListings = (func, funcError) => {
  fetch("https://sv-reqres.now.sh/api/listings")
    .then((res) => res.json())
    .then((listings) => func(listings))
    .catch((error) => funcError(error));
};

// Fetching events data
const getEvents = (func, funcError) => {
  fetch("https://sv-reqres.now.sh/api/events")
    .then((res) => res.json())
    .then((events) => func(events))
    .catch((error) => funcError(error));
};

// Fetching offers data
const getOffers = (func, funcError) => {
  fetch("https://sv-reqres.now.sh/api/offers")
    .then((res) => res.json())
    .then((offers) => func(offers))
    .catch((error) => funcError(error));
};

// Handling all data
const handleAllData = (theListings, theEvents, theOffers) => {
    allCards = '';

    // listings
    theListings.data.forEach((data) => {
      allCards += `
      <div class="card">
        <div class="card_image-container">
        </div>
        <div class="description">
          <h3 class="description_title">${data.title}</h3>
          <p class="description_text">${data.description}</p>
        </div>
        <div class="read_more-btn-wrapper">
          <button type="button" class="read_more-btn">Read More</button>
        </div>
      </div>`;
    });

    // events
    theEvents.data.forEach((data) => {
      allCards += `
      <div class="card">
        <div class="card_image-container">
        </div>
        <div class="description">
          <h3 class="description_title">${data.title}</h3>
          <p class="description_text">${data.description}</p>
        </div>
        <div class="read_more-btn-wrapper">
          <button type="button" class="read_more-btn">Read More</button>
        </div>
      </div>`;
    });

    // offers
    theOffers.data.forEach((data) => {
      allCards += `
      <div class="card">
        <div class="card_image-container">
        </div>
        <div class="description">
          <h3 class="description_title">${data.title}</h3>
          <p class="description_text">${data.description}</p>
        </div>
        <div class="read_more-btn-wrapper">
          <button type="button" class="read_more-btn">Read More</button>
        </div>
      </div>`;
    });

    cardWrapper.innerHTML = allCards;
}

// Handling data individually
const handleData = (listings) => {
  let cards = "";

  listings.data.forEach((data) => {
    cards += `
    <div class="card">
      <div class="card_image-container">
      </div>
      <div class="description">
        <h3 class="description_title">${data.title}</h3>
        <p class="description_text">${data.description}</p>
      </div>
      <div class="read_more-btn-wrapper">
        <button type="button" class="read_more-btn">Read More</button>
      </div>
    </div>`;
  });

  cardWrapper.innerHTML = cards;
};

// Handling action buttons with event delegation
const handleButtons = () => {
  buttons.addEventListener("click", (e) => {
    const button = e.target;

    // get active button
    if (button.matches("button")) {

        // handle "all" button
        if (button.innerText === "All") {
          buttons.querySelector(".active--button").classList.remove("active--button");
          button.classList.add("active--button");
          getAllData(handleAllData, displayError);
        }

        // handle "listings" button
        if (button.innerText === "Listings") {
          buttons.querySelector(".active--button").classList.remove("active--button");
          button.classList.add("active--button");
          getListings(handleData, displayError);
        }

        // handle "events" button
        if (button.innerText === "Events") {
          buttons.querySelector(".active--button").classList.remove("active--button");
          button.classList.add("active--button");
          getEvents(handleData, displayError);
        }

        // handle "offers" buttons
        if (button.innerText === "Offers") {
          buttons.querySelector(".active--button").classList.remove("active--button");
          button.classList.add("active--button");
          getOffers(handleData, displayError);
        }
      }
  });
};

// Handling error
const displayError = (error) => {
  alert('There was an error trying to access data.');
  console.log(error);
};

handleButtons();
getAllData(handleAllData, displayError);
