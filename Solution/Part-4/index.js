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


// Shuffle Data
async function randomizeItems() {
  const listings = await getData();
  const events = await getData("events");
  const offers = await getData("offers");
  // Spread API data into random data Array
  const data = [...listings, ...events, ...offers];

  let shuffled = data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(0, 15);

  /*
  // Time complexity is O(N log N), same as quick sort.
  // Space complexity is O(N). 
  // This is not as efficient as a Fischer Yates shuffle
  // but, in my opinion, the code is significantly shorter
  // and more functional.
  // For large arrays you should certainly use Fischer Yates
  // source https://stackoverflow.com/a/46545530/11757474
  */

  return shuffled
}


// Display data
async function fetchAndDisplay() {
  const data = await randomizeItems();
  console.log(data);
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

// Handle Error
function handleError(err) {
  console.log(`Looks like there was an error: ${err}`);
}

// On load get data and populate cards
fetchAndDisplay().catch(handleError);

randomizeItems();
