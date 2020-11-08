const cardWrapper = document.querySelector(".card-wrapper");

// Fetching listings data
const getListings = (func, funcError) => {
  fetch("https://sv-reqres.now.sh/api/listings")
    .then((res) => res.json())
    .then((listings) => func(listings))
    .catch((error) => funcError(error));
};

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

// Handling error
const displayError = (error) => {
  alert('There was an error trying to access data.');
  console.log(error);
};

getListings(handleData, displayError);
