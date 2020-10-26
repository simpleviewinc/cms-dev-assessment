// Select cards div for display and set variable for end point url
const baseEndPoint = `https://sv-reqres.now.sh/api`;
// Get all items from each page
const itemsPerPage = `?per_page=20`;
const slideContent = document.querySelectorAll(".slide-content");

// Get data from end point set listings as default query
async function getData(query = "listings") {
  const response = await fetch(`${baseEndPoint}/${query}/${itemsPerPage}`);
  const data = await response.json();
  return data.data;
}

// Display data
async function fetchAndDisplay(query) {
  const data = await getData(query);
  // Populate each slide div with content from API
  slideContent.forEach(
    (div, index) =>
      (div.innerHTML = `
      <img onerror='this.src="../../comps/fallback.jpg"' 
      src=${data[index].mediaurl} 
      alt="item photo" 
      class="card-img img-${index}">
      </img>
      <div class="container">
          <h3><b>${data[index].title}</b></h3>
          <p class="description d-${index}">${data[index].description}</p>
      </div>`)
  );
}

// Shuffle Data
async function randomizeItems() {
  let randomData = [];
  await getData("listings");
  await getData("events");
  await getData("offers");
}

// Handle Error
function handleError(err) {
  console.log(`Looks like there was an error: ${err}`);
}

// On load get data and populate cards
fetchAndDisplay().catch(handleError);
