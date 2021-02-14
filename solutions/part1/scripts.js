const api_url = 'https://sv-reqres.now.sh/api/listings';

// Grab block container to populate with API info
const main = document.getElementById("main");

async function getInfo() {
  // Wait on api response
  const response = await fetch(api_url);
  const data = await response.json();

  let newBlock;
  let newImg;
  let newTitle;
  let newDesc;
  let fader;
  let count = 1;

  // Iterate through JSON response
  for (let listing of data.data) {
    // Create div and append API info as elements
    newBlock = document.createElement("div");
    newBlock.className = "block";
    newBlock.style.gridArea = "block" + count;
    count += 1;
    main.appendChild(newBlock);
    newImg = document.createElement('img');
    // Add Local Fallback Image
    // It will still throw an error but I guess it is supposed to
    newImg.onerror = function() {
      this.src = "../../comps/fallback.jpg";
    }
    newImg.src = listing.mediaurl;
    newBlock.appendChild(newImg);
    newTitle = document.createElement('h3');
    newTitle.innerHTML = listing.title;
    newBlock.appendChild(newTitle);
    newDesc = document.createElement('p');
    newDesc.innerHTML = listing.description;
    newBlock.appendChild(newDesc);

    // Add white opacity gradient
    fader = document.createElement("div");
    fader.className = "whiteFader";
    newBlock.appendChild(fader);
  }
}

getInfo();
