// Select cards div for display and set variable for end point url
const cardsDiv = document.querySelector(".cards");
const baseEndPoint = `https://sv-reqres.now.sh/api`;
const itemsPerPage = `18`;
// Select Nav Buttons
const navBtns = document.querySelectorAll(".nav-btns");

// Get data from end point set listings as default query
async function getData(query = "listings", queryItemsPerPage = "18") {
  cardsDiv.innerHTML = `<h1>loading..</h1>`;
  const response = await fetch(
    `${baseEndPoint}/${query}/?per_page=${queryItemsPerPage}`
  );
  const data = await response.json();
  return data.data;
}

// Get data from all Listings
async function fetchURLs() {
  let merged;
  try {
    // Promise.all() lets us call multiple promises to run parallel into a single super-promise
    let data = await Promise.all([
      getData("listings", 6),
      getData("events", 6),
      getData("offers", 6),
    ]);
    merged = [].concat(...data);
  } catch (error) {
    console.log(error);
  }
  return merged;
}

// Display data
async function fetchAndDisplay(query) {
  let data;
  if (query == "all") {
    data = await fetchURLs();
  } else {
    data = await getData(query);
  }
  const html = data
    .map(
      (item, index) => `
      <div class=" card data-card-${index}">
              <img onerror='this.src="../../comps/fallback.jpg"' src=${item.mediaurl} alt="item photo" class="card-img img-${index}"></img>
          <div class="container c-${index}">
                <h3><b>${item.title}</b></h3>
                <p class="description d-${index}">
                ${item.description}
                </p>
                <button onclick='handleReadMore(this)' class='rm-btn rm-${index}'>Read more</button>
          </div>
       </div> 
      `
    )
    .join("");
  cardsDiv.innerHTML = html;
}

// Handle Error
function handleError(err) {
  console.log(`Looks like there was an error: ${err}`);
}

// Handle Nav Buttons click
function handleClick(event) {
  cardsDiv.innerHTML = "";
  fetchAndDisplay(event.target.value).catch(handleError);
}

// Handle Read more click
function handleReadMore(element) {
  // Select description from element
  let description = element.previousElementSibling;
  // Toggle class show
  if (!description.classList.contains('show')) {
    description.classList.add('show')
    element.innerText = "Read less"; 
  } else {
    description.classList.remove('show')
    element.innerHTML = "Read More"; 
  }
}

// Add on click Event listener to all Nav Buttons
navBtns.forEach((btn) => btn.addEventListener("mousedown", handleClick));
// navBtns.forEach((btn) => btn.addEventListener("keyup", handleClick));
// On load get data and populate cards
fetchAndDisplay().catch(handleError);
