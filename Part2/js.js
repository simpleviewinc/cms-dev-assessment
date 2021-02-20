function itemDivHover(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'inline';
}

function itemDivMOut(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'none';
}

console.log(window.location.search.substr(1).split('=')[1]);

if ( typeof(window.location.search.substr(1)) !== 'undefined' ) { var filter = window.location.search.substr(1).split('=')[1]; }
else { var filter = "All"; }

// var filter = "All";

function runit() {

var menuItems = ['All','Listings','Events','Offers'];

for ( var b=0; b < menuItems.length; b++ ) {
	var menuItem = menuItems[b];
	var menuItemDiv = document.createElement('div');
	if ( filter == menuItem ) { menuItemDiv.setAttribute('class', 'activeOuter'); } else { menuItemDiv.setAttribute('class', 'menuOuter') }
	menuItemDiv.innerHTML = '<div><a href="index.htm?filter=' + menuItem + '">' + menuItem + '</a></div>';
	document.getElementById('menuOfFilters').appendChild(menuItemDiv);
	
}


var itemCount = 0;

if ( filter == "All" || filter == "Listings") {

var url = 'https://sv-reqres.now.sh/api/listings';
var request = new XMLHttpRequest()
request.timeout = 2000;
request.open('GET', url, true)
request.onload = function() {
	var results = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {

		var per_page = results['per_page'];
		var total = results['total'];
		var total_pages = results['total_pages'];
		console.log(results);
		

		for(var z=0; z < results['data'].length; z++) {

			var itemDiv = document.createElement('div');
			itemDiv.setAttribute('id', 'item' + itemCount);
			itemDiv.setAttribute('onmouseover', 'itemDivHover(' + itemCount + ')')
			itemDiv.setAttribute('onmouseout', 'itemDivMOut(' + itemCount + ')')
			document.getElementById('grid-wrapper').appendChild(itemDiv);
			if ( itemCount != 7 ) {
				var itemImage = document.createElement('img');
				itemImage.setAttribute('src', results['data'][z]['mediaurl']);
				itemImage.setAttribute('class', 'itemImage');
				itemImage.setAttribute('id', 'itemImage' + itemCount);
				itemImage.setAttribute('onerror', "this.src='fallback.jpg'");
				itemDiv.appendChild(itemImage);
			}
			if ( itemCount != 6 ) {
				var itemTitle = document.createElement('h2');
				itemTitle.setAttribute('class', 'itemTitle');
				itemTitle.innerHTML = results['data'][z]['title'];
				itemDiv.appendChild(itemTitle);
				var itemDesc = document.createElement('span');
				itemDesc.innerHTML = results['data'][z]['description'] + "<p class='read-more'><a href='#' class='button' id='itemDivButton" + itemCount +"'>Read More</a></p>";
				itemDesc.setAttribute('class', 'itemDesc');
				itemDiv.appendChild(itemDesc);
			}
			itemCount++;			
		}
			
	} else {
		console.log('error')
	}
}

request.send()
}

if ( filter == "All" || filter == "Events") {

var url = 'https://sv-reqres.now.sh/api/events';

var request = new XMLHttpRequest()
request.timeout = 2000;
request.open('GET', url, true)
request.onload = function() {
	var results = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {

//		documant.getElementById('page').innerHTML = results['page'];
		var per_page = results['per_page'];
		var total = results['total'];
		var total_pages = results['total_pages'];
		console.log(results);

		for(var z=0; z < results['data'].length; z++) {

			var itemDiv = document.createElement('div');
			itemDiv.setAttribute('id', 'item' + itemCount);
			itemDiv.setAttribute('onmouseover', 'itemDivHover(' + itemCount + ')')
			itemDiv.setAttribute('onmouseout', 'itemDivMOut(' + itemCount + ')')
			document.getElementById('grid-wrapper').appendChild(itemDiv);
			if ( itemCount != 7 ) {
				var itemImage = document.createElement('img');
				itemImage.setAttribute('src', results['data'][z]['mediaurl']);
				itemImage.setAttribute('class', 'itemImage');
				itemImage.setAttribute('id', 'itemImage' + itemCount);
				itemImage.setAttribute('onerror', "this.src='fallback.jpg'");
				itemDiv.appendChild(itemImage);
			}
			if ( itemCount != 6 ) {
				var itemTitle = document.createElement('h2');
				itemTitle.setAttribute('class', 'itemTitle');
				itemTitle.innerHTML = results['data'][z]['title'];
				itemDiv.appendChild(itemTitle);
				var itemDesc = document.createElement('span');
				itemDesc.innerHTML = results['data'][z]['description'] + "<p class='read-more'><a href='#' class='button' id='itemDivButton" + itemCount +"'>Read More</a></p>";
				itemDesc.setAttribute('class', 'itemDesc');
				itemDiv.appendChild(itemDesc);
			}
			itemCount++;			
		}
			
	} else {
		console.log('error')
	}
}

request.send()
}

if ( filter == "All" || filter == "Offers" ) {

var url = 'https://sv-reqres.now.sh/api/offers';

var request = new XMLHttpRequest()
request.timeout = 2000;
request.open('GET', url, true)
request.onload = function() {
	var results = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {

//		documant.getElementById('page').innerHTML = results['page'];
		var per_page = results['per_page'];
		var total = results['total'];
		var total_pages = results['total_pages'];
		console.log(results);

		for(var z=0; z < results['data'].length; z++) {

			var itemDiv = document.createElement('div');
			itemDiv.setAttribute('id', 'item' + itemCount);
			itemDiv.setAttribute('onmouseover', 'itemDivHover(' + itemCount + ')')
			itemDiv.setAttribute('onmouseout', 'itemDivMOut(' + itemCount + ')')
			document.getElementById('grid-wrapper').appendChild(itemDiv);
			if ( itemCount != 7 ) {
				var itemImage = document.createElement('img');
				itemImage.setAttribute('src', results['data'][z]['mediaurl']);
				itemImage.setAttribute('class', 'itemImage');
				itemImage.setAttribute('id', 'itemImage' + itemCount);
				itemImage.setAttribute('onerror', "this.src='fallback.jpg'");
				itemDiv.appendChild(itemImage);
			}
			if ( itemCount != 6 ) {
				var itemTitle = document.createElement('h2');
				itemTitle.setAttribute('class', 'itemTitle');
				itemTitle.innerHTML = results['data'][z]['title'];
				itemDiv.appendChild(itemTitle);
				var itemDesc = document.createElement('span');
				itemDesc.innerHTML = results['data'][z]['description'] + "<p class='read-more'><a href='#' class='button' id='itemDivButton" + itemCount +"'>Read More</a></p>";
				itemDesc.setAttribute('class', 'itemDesc');
				itemDiv.appendChild(itemDesc);
			}
			itemCount++;			
		}
			
	} else {
		console.log('error')
	}
}

request.send()
}
}