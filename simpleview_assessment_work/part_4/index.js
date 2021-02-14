async function getListingsData() {
	return await fetch("https://sv-reqres.now.sh/api/listings");
}

// Selectors //
const gridContainer = document.querySelector('.grid-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Page Setup // -----p1, p2, p3, p4
const resultsPerPage = [5, 5, 3, 2];
const gridItemKeys = ['a', 'b', 'c', 'd', 'e'];
const maxPages = 4;
let currentPage = 1; //--Starting page

// Initial Page Load //
let listing_data;
async function onPageLoad() {
	const listing_res = await getListingsData();
	listing_data = await listing_res.json();
	
	populateGridStyle(1);
}
onPageLoad();

// Populate Grid Functions //
function populateGridStyle(num) {
	if (listing_data) {
		clearDOMElement(gridContainer);
		gridContainer.classList.add(`grid-style-${num}`);
		
		for (let i=0; i<resultsPerPage[num-1]; i++) {
			const listing = listing_data.data[getRandomInt(5)];
			//-- Changed from the previous part to be randomized.  This is definitely wrong,
			//-- but I'm not sure how to achieve the desired result without more than six listings.
			//-- A dedicated result randomizer would select a listing from an array of all listings,
			//-- use it in the code below, and then splicing that listing from the array for subsequent selections.
			const gridItemMarkup = `
				<div class='grid-item ${gridItemKeys[i]}${num}' style='background: url(${listing.mediaurl})
				onerror="if (this.src != 'error.jpg') this.src = '../comps/fallback.jpg';" center/cover;'>
					<h1 class='listing-title'>${listing.title}</h1>
				</div>
			`;
			gridContainer.insertAdjacentHTML('beforeend', gridItemMarkup);
		}
	}
}

// Event Listeners //
nextBtn.addEventListener('click', () => {
	gridContainer.classList.remove(`grid-style-${currentPage}`);
	
	if (currentPage < 4) {
		currentPage++;
	} else {
		currentPage = 1;
	}
	
	populateGridStyle(currentPage);
});

prevBtn.addEventListener('click', () => {
	gridContainer.classList.remove(`grid-style-${currentPage}`);
	
	if (currentPage > 1) {
		currentPage--;
	} else {
		currentPage = 4;
	}
	
	populateGridStyle(currentPage);
});

// Extras //
function getRandomInt(max) { // --Used for random grid item selection.
  return Math.floor(Math.random() * Math.floor(max));
}

function clearDOMElement(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}