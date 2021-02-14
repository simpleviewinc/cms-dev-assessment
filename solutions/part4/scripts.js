let api_url = 'https://sv-reqres.now.sh/api/';

let page = 0;
const pages = ["listings", "events", "offers"];

// Grab block container to populate with API info
const main = document.getElementById("main");

// Grab info from API and generate blocks
async function getInfo(filter) {
  // Wait on api response
  const response = await fetch(api_url + filter);
  const data = await response.json();

  let newBlock;
  let newImg;
  let newTitle;
  let newDesc;

  let pick;
  let positions = [1,2,3,4,5,6];

  // Iterate through JSON response
  for (let listing of data.data) {

    // Create div and append API info as elements
    newBlock = document.createElement("div");
    newBlock.className = "block";

    // Pick random position for block element
    pick = getRandomFromPool(positions);
    newBlock.style.gridArea = "block" + pick;
    main.appendChild(newBlock);

    newImg = document.createElement('img');

    // Add Local Fallback Image
    // It will still throw an error but I guess it is supposed to
    newImg.onerror = function() {
      this.src = "../../comps/fallback.jpg";
    }
    newImg.src = listing.mediaurl;
    newBlock.appendChild(newImg);
    newTitle = document.createElement('h1');
    newTitle.innerHTML = listing.title;
    newBlock.appendChild(newTitle);
    newDesc = document.createElement('p');
    newDesc.innerHTML = listing.description;
    newBlock.appendChild(newDesc);
  }
}

// No replacement random sample from pool
function getRandomFromPool(pool) {
   var randomIndex = Math.floor(Math.random()*pool.length);
   return pool.splice(randomIndex, 1)[0];
}

// Change pages cycling from API params
function navigate(selection) {
  let blocks = document.getElementsByClassName("block");
  for (let block of blocks) {
    block.innerHTML = "";
  }
  if(selection === "previous") {
    page -= 1;
  } else if(selection === "next") {
    page += 1;
  }
  getInfo(pages[page%3]);
}

getInfo("listings");
