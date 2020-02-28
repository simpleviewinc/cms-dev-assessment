//on DOM load
$(function(){
	//first, request and display listings info
	$.ajax({
		url: 'https://sv-reqres.now.sh/api/listings',
		type: 'GET',
		dataType: 'json'
	})
	.done(displayListingInfo)
	.fail(listingGetError);

	//second, request and display events info
	$.ajax({
		url: 'https://sv-reqres.now.sh/api/events',
		type: 'GET',
		dataType: 'json'
	})
	.done(displayEventsInfo)
	.fail(eventsGetError);

	//finally, request and display offers info
	$.ajax({
		url: 'https://sv-reqres.now.sh/api/offers',
		type: 'GET',
		dataType: 'json'
	})
	.done(displayOffersInfo)
	.fail(offersGetError);

	//have listeners ready for button clicks

});

//display listings info from api
function displayListingInfo(data, textStatus, jqXHR) {
	//store the titles and descriptions
	let titleOne = data.data[0].title;
	let titleTwo = data.data[1].title;
	let descriptionOne = data.data[0].description;
	let descriptionTwo = data.data[1].description;

	//add listings to all content container
	$("#onlyListings").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>";
	$("#onlyListings").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>";
}

//error handler for listings request
function listingGetError(jqXHR, textStatus, errorThrown) {
	$("#error").innerHTML += "Error: " + status.message;
	$("#error").show();
}

//display events info from api
function displayEventsInfo(data, textStatus, jqXHR) {
	//store the titles and descriptions
	let titleOne = data.data[0].title;
	let titleTwo = data.data[1].title;
	let descriptionOne = data.data[0].description;
	let descriptionTwo = data.data[1].description;

	//add eventss to all content container
	$("#onlyEvents").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>";
	$("#onlyEvents").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>";
}

//error handler for events request
function eventsGetError(jqXHR, textStatus, errorThrown) {
	$("#error").innerHTML += "Error: " + status.message;
	$("#error").show();
}

function displayOffersInfo(data, textStatus, jqXHR) {
	//store the titles and descriptions
	let titleOne = data.data[0].title;
	let titleTwo = data.data[1].title;
	let descriptionOne = data.data[0].description;
	let descriptionTwo = data.data[1].description;

	//add offers to all content container
	$("#onlyOffers").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>";
	$("#onlyOffers").innerHTML += "<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>";
}

//error handler for offers request
function offersGetError(jqXHR, textStatus, errorThrown) {
	$("#error").innerHTML += "Error: " + status.message;
	$("#error").show();
}