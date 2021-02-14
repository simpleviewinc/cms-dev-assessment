let api_url = 'https://sv-reqres.now.sh/api/';

// Grab block container to populate with API info
const main = document.getElementById("main");

async function getInfo(filter) {
  // Wait on api response
  if (filter === "all") {filter = "listings"};
  const response = await fetch(api_url + filter);
  const data = await response.json();

  let newBlock;
  let newImg;
  let newTitle;
  let newDesc;
  let fader;
  let newButton;
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

    // Add Read More button
    newButton = document.createElement("button");
    newButton.innerHTML = "Read More";
    newButton.className = "readButton";
    newBlock.appendChild(newButton);

    // Add white opacity gradient
    fader = document.createElement("div");
    fader.className = "whiteFader";
    newBlock.appendChild(fader);
  }
}

function resetButtons() {
  let buttons = document.getElementsByClassName("selected");
  for (let ele of buttons) {
    ele.className = "navButton";
  }
}

function navigate(selection) {
  resetButtons();
  let blocks = document.getElementsByClassName("block");
  for (let block of blocks) {
    block.innerHTML = "";
  }
  getInfo(selection);
  switch(selection) {
    case 'all':
     document.getElementById("allButton").className = "selected";
     break;
    case 'listings':
      document.getElementById("listingsButton").className = "selected";
      break;
    case 'events':
      document.getElementById("eventsButton").className = "selected";
      break;
    case 'offers':
      document.getElementById("offersButton").className = "selected";
  }
}

getInfo("listings");
