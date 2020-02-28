//on DOM load
$(function(){
	$.ajax({
		url: 'https://sv-reqres.now.sh/api/listings',
		type: 'GET',
		dataType: 'json'
	})
	.done(displayListingInfo)
	.fail(listingGetError);
});

//on success, display descriptions from api
function displayListingInfo(data, textStatus, jqXHR) {
	//store the titles and descriptions
	let titleOne = data.data[0].title;
	let titleTwo = data.data[1].title;
	let descriptionOne = data.data[0].description;
	let descriptionTwo = data.data[1].description;

	//assign descriptions to divs after the images
	$("#itemA").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>");
	$("#itemC").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>");
	$("#itemE").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleOne + "</h5><p class=\"card-text\">" + descriptionOne + "</p>");
	$("#itemB").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>");
	$("#itemD").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>");
	$("#itemF").html("<img src=\"fallback.jpg\" alt=\"a valley sunset\"><h5 class=\"card-title\">" + titleTwo + "</h5><p class=\"card-text\">" + descriptionTwo + "</p>");
}

//on error, display the error's message
function listingGetError(jqXHR, textStatus, errorThrown) {
	$("#error").html("Error: " + status.message);
	$("#error").show();
}