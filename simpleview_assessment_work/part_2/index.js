async function getListingsData() {
	return await fetch("https://sv-reqres.now.sh/api/listings");
}

async function getEventsData() {
	return await fetch("https://sv-reqres.now.sh/api/events");
}

async function getOffersData() {
	return await fetch("https://sv-reqres.now.sh/api/offers");
}

const listingsContainerDOM = document.querySelector('.listings');
// Listings //
async function populateListingData() {
	const listings_res = await getListingsData();
	const listings_data = await listings_res.json();
	clearDOMElement(listingsContainerDOM); //-- Clear the container for population
	
	//Fill template with listing API data and insert into the DOM
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

const eventsContainerDOM = document.querySelector('.events');
// Events //
async function populateEventData() {
	const events_res = await getEventsData();
	const events_data = await events_res.json();
	clearDOMElement(eventsContainerDOM); //-- Clear the container for population
	
	//Fill template with listing API data and insert into the DOM
	events_data.data.forEach(event => {
		const eventMarkup = `
			<div class='grid-item'>
				<figure class='listings-item'>
						<img class='listing-img' src=${event.mediaurl} onerror="if (this.src != 'error.jpg') this.src = '../comps/fallback.jpg';" alt="listing">
						<h1 class='listing-title'>${event.title}</h1>
						<figcaption class='listing-description'>${event.description}</figcaption>
				</figure>
				<a class='readmore-button' href=#>Read More</a>
			</div>
		`;
		eventsContainerDOM.insertAdjacentHTML('beforeend', eventMarkup);
	});
}

const offersContainerDOM = document.querySelector('.offers');
// Offers //
async function populateOfferData() {
	const offers_res = await getOffersData();
	const offers_data = await offers_res.json();
	clearDOMElement(offersContainerDOM); //-- Clear the container for population
	
	//Fill template with listing API data and insert into the DOM
	offers_data.data.forEach(offer => {
		const offerMarkup = `
			<div class='grid-item'>
				<figure class='listings-item'>
						<img class='listing-img' src=${offer.mediaurl} onerror="if (this.src != 'error.jpg') this.src = '../comps/fallback.jpg';" alt="listing">
						<h1 class='listing-title'>${offer.title}</h1>
						<figcaption class='listing-description'>${offer.description}</figcaption>
				</figure>
				<a class='readmore-button' href=#>Read More</a>
			</div>
		`;
		offersContainerDOM.insertAdjacentHTML('beforeend', offerMarkup);
	});
}

populateListingData();
populateEventData();
populateOfferData();

////////////////////////////////////
// Sorting Option Event Listeners //
const btnAll = document.getElementById("all_sort");
const btnListings = document.getElementById("listings_sort");
const btnEvents = document.getElementById("events_sort");
const btnOffers = document.getElementById("offers_sort");

btnAll.addEventListener("click", () => {
	document.querySelectorAll('.clicked').forEach(btn => { btn.classList.remove('clicked'); });
	btnAll.classList.add('clicked');
	
	//--Show all containers
	listingsContainerDOM.style.display = 'grid';
	eventsContainerDOM.style.display = 'grid';
	offersContainerDOM.style.display = 'grid';
});

btnListings.addEventListener("click", () => {
	document.querySelectorAll('.clicked').forEach(btn => { btn.classList.remove('clicked'); });
	btnListings.classList.add('clicked');
	
	//--Show listings and hide others
	listingsContainerDOM.style.display = 'grid';
	eventsContainerDOM.style.display = 'none';
	offersContainerDOM.style.display = 'none';
});

btnEvents.addEventListener("click", () => {
	document.querySelectorAll('.clicked').forEach(btn => { btn.classList.remove('clicked'); });
	btnEvents.classList.add('clicked');
	
	//--Show events and hide others
	listingsContainerDOM.style.display = 'none';
	eventsContainerDOM.style.display = 'grid';
	offersContainerDOM.style.display = 'none';
});

btnOffers.addEventListener("click", () => {
	document.querySelectorAll('.clicked').forEach(btn => { btn.classList.remove('clicked'); });
	btnOffers.classList.add('clicked');
	
	//--Show offers and hide others
	listingsContainerDOM.style.display = 'none';
	eventsContainerDOM.style.display = 'none';
	offersContainerDOM.style.display = 'grid';
});

// Extra Functions //
function clearDOMElement(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}