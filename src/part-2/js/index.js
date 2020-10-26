async function getData(category) {
  const URL = `https://sv-reqres.now.sh/api/${category}`;
  try {
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    throw Error(e);
  }
}
async function renderAll() {
  let resListings = await getData('listings');
  let listings = resListings.data;
  let resOffers = await getData('offers');
  let offers = resOffers.data;
  let resEvents = await getData('events');
  let events = resEvents.data;
  let html = '';

  listings.forEach(listing => {
    let htmlCardList = `
            <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${listing.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${listing.title}</h2>
                  <p class="listingsCard__copy">${listing.description}</p>
                </div>
              </div>
              <a class="listingsCard__link" href="${listing.weburl}">Read More</a>
            </div>`;

    html += htmlCardList;
    let container = document.querySelector('.listingsSection');
    container.innerHTML = html;
  });

  offers.forEach(offer => {
    let htmlCardOffer = `
           <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${offer.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${offer.title}</h2>
                  <p class="listingsCard__copy">${offer.description}</p>
                </div>
              </div>
              // <a class="listingsCard__link" href="${offer.weburl}">Read More</a>
            </div>`;

    html += htmlCardOffer;
    let container = document.querySelector('.listingsSection');
    container.innerHTML = html;
  });

  events.forEach(event => {
    let htmlCardEvents = `
           <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${event.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${event.title}</h2>
                  <p class="listingsCard__copy">${event.description}</p>
                </div>
              </div>
              // <a class="listingsCard__link" href="${event.weburl}">Read More</a>
            </div>`;

    html += htmlCardEvents;
    let container = document.querySelector('.listingsSection');
    container.innerHTML = html;
  });
}

async function renderListings() {
  let resListings = await getData('listings');
  let listings = resListings.data;
  let html = '';
  listings.forEach(listing => {
    let htmlCard = `
            <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${listing.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${listing.title}</h2>
                  <p class="listingsCard__copy">${listing.description}</p>
                </div>
              </div>
              <a class="listingsCard__link" href="${listing.weburl}">Read More</a>
            </div>`;

    html += htmlCard;
  });

  let container = document.querySelector('.listingsSection');
  container.innerHTML = html;
}

async function renderOffers() {
  let resOffers = await getData('offers');
  let offers = resOffers.data;
  let html = '';
  offers.forEach(offer => {
    let htmlCard = `
           <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${offer.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${offer.title}</h2>
                  <p class="listingsCard__copy">${offer.description}</p>
                </div>
              </div>
              // <a class="listingsCard__link" href="${offer.weburl}">Read More</a>
            </div>`;

    html += htmlCard;
  });

  let container = document.querySelector('.listingsSection');
  container.innerHTML = html;
}

async function renderEvents() {
  let resEvents = await getData('events');
  let events = resEvents.data;
  let html = '';
  events.forEach(event => {
    let htmlCard = `
           <div class="listingsCard">
              <div class="listingsCard__innerWrap">
                <img class="listingsCard__img" src="../assets/fallback.jpg" alt="${event.title}" />
                <div class="listingsCard__contentWrap">
                  <h2 class="listingsCard__title">${event.title}</h2>
                  <p class="listingsCard__copy">${event.description}</p>
                </div>
              </div>
              // <a class="listingsCard__link" href="${event.weburl}">Read More</a>
            </div>`;

    html += htmlCard;
  });

  let container = document.querySelector('.listingsSection');
  container.innerHTML = html;
}

function filterTabs() {
  let tabs = document.querySelectorAll('.filters .filtersList li');
  let tabListings = document.body.querySelector('.filtersList__item[data-filter="listings"]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach((tab) => {
        tab.classList.remove('filtersList__item--active');
      });
      tab.classList.add('filtersList__item--active');

      if (tab.dataset.filter == 'all') {
        renderAll();
      } else if (tab.dataset.filter == 'listings') {
        renderListings();
      } else if (tab.dataset.filter == 'offers') {
        renderOffers();
      } else if (tab.dataset.filter == 'events') {
        renderEvents();
      }
    });
  });
};
filterTabs();
window.addEventListener("load", renderAll());