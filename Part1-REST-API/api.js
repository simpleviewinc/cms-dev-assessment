const listingsUrl = "https://sv-reqres.now.sh/api/listings";
const eventsUrl = "https://sv-reqres.now.sh/api/events";
const offersUrl = "https://sv-reqres.now.sh/api/offers";

const getAll = async () => {
  const listings = await fetch(listingsUrl);

  if (!listings.ok) {
    throw new Error(`HTTP error! status: ${listings.status}`);
  } else {
    const { data } = await listings.json();
    window.addEventListener(
      "storage",
      function () {
        localStorage.setItem("listings", JSON.stringify(data));
      },
      false
    );
    
  }

  const events = await fetch(eventsUrl);

  if (!events.ok) {
    throw new Error(`HTTP error! status: ${events.status}`);
  } else {
    const { data } = await events.json();
    window.addEventListener(
      "storage",
      function () {
        localStorage.setItem("events", JSON.stringify(data));
      },
      false
    );
    
  }

  const offers = await fetch(offersUrl);

  if (!offers.ok) {
    throw new Error(`HTTP error! status: ${offers.status}`);
  } else {
    const { data } = await offers.json();
    window.addEventListener(
      "storage",
      function () {
        localStorage.setItem("offers", JSON.stringify(data));
      },
      false
    );
    
  }
};

getAll();



const allData = {
  listings: JSON.parse(window.localStorage.getItem("listings")),
  events: JSON.parse(localStorage.getItem("events")),
  offers: JSON.parse(localStorage.getItem("offers")),
};
