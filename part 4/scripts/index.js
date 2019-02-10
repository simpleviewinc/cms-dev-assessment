$(window).on('load', function(){

	// get data and render it
	var xhr = $.get('https://sv-reqres.now.sh/api/listings/?per_page=15', function(res){
		render(res.data);
	})
	.fail(function(res){
		console.log(res)
	})

	// add pagination to arrows
	var prev = $('.prev');
	var next = $('.next');
	prev.on('click', turnPage);
	next.on('click', turnPage);

})

function render(data) {

	var listings = []; // array to hold each listing's html
	var html = []; // array to hold each page's html

	// get template for individual listing and fill it with data
	$(data).each(function(idx, listing){

		var template = $('[data-item-template]');

		// add a fallback image if need be
		template.find('.item')[0].style.backgroundImage = 'url('+listing.mediaurl+'), url(./assets/fallback.jpg)';

		var num = idx+1;
		template.find('.title-cont p')[0].innerText = "0"+num+".";

		template.find('.title-cont h2')[0].innerText = listing.title;

		// add created listing html to listings array
		listings.push(template[0].innerHTML);
	})

	// shuffle listings for displaying items randomly
	listings = shuffle(listings);

	// get page layouts
	var layouts = [{template: $('[data-layout-1]'), num:5},{template: $('[data-layout-2]'), num:5},{template: $('[data-layout-3]'), num:3},{template: $('[data-layout-4]'), num:2}];

	// fill each page layout with listings
	$(layouts).each(function(idx, obj){

		//get listings for this page, remove them from listings array to avoid duplicates
		var pageListings = listings.splice(0, obj.num);

		// loop through all columns and add listing html
		var pageTemplate = obj.template;
		var columns = pageTemplate.find(".column");

		for(var i = 0; i<columns.length; i++){

			// determine how many listings should be in the column, add those listings to the column
			var numOfListings = parseInt(columns[i].className.split("-")[1]);
			var colHtml = pageListings.splice(0,numOfListings).join("");

			$(columns[i]).html(colHtml);
		}

		// add completed page layout to html array
		html.push(pageTemplate[0].innerHTML);
	})

	// convert array of pages to one string, insert it into the DOM
	html = html.join("");
	$('[data-items]').html(html);

	//remove templates
	$('[data-remove]').remove();

}

function turnPage() {

	// get current page number and hide it from view
	var thisPage = $('.show');
	var thisPageNum = parseInt($(thisPage[0]).attr('data-page'));
	$(thisPage).addClass('hide');
	$(thisPage).removeClass('show');

	// determine which page to show next and show it
	var newPageNum;
	if($(this)[0].className === 'prev' && thisPageNum === 1){

		$('[data-page="4"]').removeClass('hide');
		$('[data-page="4"]').addClass('show');

	} else if($(this)[0].className === 'prev') {

		newPageNum = thisPageNum - 1;
		$('[data-page="'+newPageNum+'"]').removeClass('hide');
		$('[data-page="'+newPageNum+'"]').addClass('show');

	} else if($(this)[0].className === 'next' && thisPageNum === 4){

		$('[data-page="1"]').removeClass('hide');
		$('[data-page="1"]').addClass('show');

	} else {

		newPageNum = thisPageNum + 1;
		$('[data-page="'+newPageNum+'"]').removeClass('hide');
		$('[data-page="'+newPageNum+'"]').addClass('show');

	}
}

// Knuth Shuffle
function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
