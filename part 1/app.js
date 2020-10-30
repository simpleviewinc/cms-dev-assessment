const cardsDiv = document.querySelector(".cards");
const endPoint = `https://sv-reqres.now.sh/api/listings/?per_page=18`;

function handleError(err) {
    console.log(`There was an error: ${err}`);
}

fetchAndDisplay().catch(handleError);

async function getData() {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data.data;
}

async function fetchAndDisplay() {
    const data = await getData();
    const html = data.map(
        (item, index) => ` <div class=" card data-card-${index}">
        <img onerror='this.src="./fallback.jpg"' src=${item.mediaurl} alt="item photo" class="card-img img-${index}" />
        
    <div class="container c-${index}">
          <h3><b>${item.title}</b></h3>
          <p class="description d-${index}">${item.description}</p>
    </div>
 </div> `
    )
        .join("");
    cardsDiv.innerHTML = html;
}