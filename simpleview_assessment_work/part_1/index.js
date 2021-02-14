async function getListingsData() {
	return await fetch("https://sv-reqres.now.sh/api/listings");
}

// Listing Template //
async function populateListingData() {
	const listings_res = await getListingsData();
	const listings_data = await listings_res.json();
	
	const listingsContainerDOM = document.querySelector('.listings-container');
	clearDOMElement(listingsContainerDOM); //-- Clear the container for population
	
	//Fill template with data and send to DOM
	listings_data.data.forEach(listing => {
		const listingMarkup = `
			<div class='grid-item'>
				<figure class='listings-item'>
						<img class='listing-img' src=${listing.mediaurl} onerror="if (this.src != 'error.jpg') this.src = '../comps/fallback.jpg';" alt="listing">
						<h1 class='listing-title'>${listing.title}</h1>
						<figcaption class='listing-description'>${listing.description}</figcaption>
				</figure>
				<a class='readmore-button' href=${listing.weburl}>Read More</a>
			</div>
		`;
		listingsContainerDOM.insertAdjacentHTML('beforeend', listingMarkup);
	});
}
populateListingData();

// Extra Functions //
function clearDOMElement(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}