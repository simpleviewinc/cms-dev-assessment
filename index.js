import "./styles.css";

fetch("https://sv-reqres.now.sh/api/listings/?per_page=20")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const data = json.data;
    for (let i = 0; i < data.length; i++) {
      document.body.appendChild(createListing2(data[i]));
      document.body.appendChild(createListing(data[i]));
      document.body.appendChild(createListing1(data[i]));
    }
  });

function createListing2(data) {
  let image = document.createElement("SPAN");
  image.innerText = data.mediaurl;
  return image;
}

function createListing(data) {
  let el = document.createElement("SPAN");
  el.innerText = data.title;
  return el;
}

function createListing1(data) {
  let des = document.createElement("SPAN");
  des.innerText = data.description;
  return des;
}

//For html - container div, img, p tag
//ex <img src="link"
//For CSS - use css grid
//For javascript - fetch data, create elements
