// Select cards div for display and set variable for end point url
const cardsDiv = document.querySelector(".cards");
const endPoint = `https://sv-reqres.now.sh/api/listings/?per_page=12`;

// Get data from end point
async function getData() {
  cardsDiv.innerHTML = `<h1>loading..</h1>`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data.data;
}

// Display data
async function fetchAndDisplay() {
  const data = await getData();
  const html = data
    .map(
      (item, index) => `
      <div class=" card data-card-${index}">
          <img onerror='this.src="../../comps/fallback.jpg"' src=${item.mediaurl} alt="item photo" class="card-img img-${index}"></img>
          <div class="container c-${index}">
                <h3><b>${item.title}</b><h3>
                <p>${item.description}</p>
          </div>
       </div> 
      `
    )
    .join("");
  cardsDiv.innerHTML = html;
  console.log(data);
}

fetchAndDisplay();
